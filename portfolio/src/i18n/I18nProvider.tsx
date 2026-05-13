'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import es from './messages/es.json';
import en from './messages/en.json';

export type Locale = 'es' | 'en';

type Messages = typeof es;

const DICTIONARIES: Record<Locale, Messages> = { es, en: en as Messages };

interface I18nContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string, vars?: Record<string, string | number>) => string;
  tArray: (key: string) => string[];
  tObject: <T = unknown>(key: string) => T | undefined;
}

const I18nContext = createContext<I18nContextValue | null>(null);

function resolve(messages: Messages, key: string): unknown {
  const parts = key.split('.');
  let cursor: unknown = messages;
  for (const part of parts) {
    if (cursor && typeof cursor === 'object' && part in (cursor as Record<string, unknown>)) {
      cursor = (cursor as Record<string, unknown>)[part];
    } else {
      return undefined;
    }
  }
  return cursor;
}

function interpolate(template: string, vars?: Record<string, string | number>): string {
  if (!vars) return template;
  return template.replace(/\{(\w+)\}/g, (match, name: string) => {
    return name in vars ? String(vars[name]) : match;
  });
}

function detectInitialLocale(): Locale {
  if (typeof document !== 'undefined') {
    const fromDom = document.documentElement.dataset.locale;
    if (fromDom === 'es' || fromDom === 'en') return fromDom;
  }
  if (typeof window !== 'undefined') {
    try {
      const stored = window.localStorage.getItem('locale');
      if (stored === 'es' || stored === 'en') return stored;
    } catch {}
    const nav = window.navigator?.language?.toLowerCase() ?? '';
    if (nav.startsWith('es')) return 'es';
  }
  return 'en';
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLocaleState(detectInitialLocale());
    setHydrated(true);
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    try {
      window.localStorage.setItem('locale', l);
    } catch {}
    document.documentElement.lang = l;
    document.documentElement.dataset.locale = l;
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    document.documentElement.lang = locale;
    document.documentElement.dataset.locale = locale;
  }, [locale, hydrated]);

  const t = useCallback(
    (key: string, vars?: Record<string, string | number>) => {
      const value = resolve(DICTIONARIES[locale], key);
      if (typeof value === 'string') return interpolate(value, vars);
      if (process.env.NODE_ENV !== 'production') {
        console.warn(`[i18n] Missing or non-string key for locale "${locale}": ${key}`);
      }
      return key;
    },
    [locale]
  );

  const tArray = useCallback(
    (key: string): string[] => {
      const value = resolve(DICTIONARIES[locale], key);
      if (Array.isArray(value) && value.every((v) => typeof v === 'string')) return value as string[];
      return [];
    },
    [locale]
  );

  const tObject = useCallback(
    <T,>(key: string): T | undefined => {
      const value = resolve(DICTIONARIES[locale], key);
      return value as T | undefined;
    },
    [locale]
  );

  const value = useMemo<I18nContextValue>(
    () => ({ locale, setLocale, t, tArray, tObject }),
    [locale, setLocale, t, tArray, tObject]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}
