'use client';

import { useI18n } from './I18nProvider';

export function useT() {
  const { t, tArray, tObject, locale, setLocale } = useI18n();
  return { t, tArray, tObject, locale, setLocale };
}
