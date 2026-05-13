'use client';

import { motion } from 'framer-motion';
import { useI18n, type Locale } from './I18nProvider';

const OPTIONS: { code: Locale; label: string }[] = [
  { code: 'es', label: 'ES' },
  { code: 'en', label: 'EN' },
];

interface LanguageToggleProps {
  size?: 'sm' | 'md';
  layoutIdSuffix?: string;
}

export default function LanguageToggle({ size = 'md', layoutIdSuffix = 'desktop' }: LanguageToggleProps) {
  const { locale, setLocale } = useI18n();

  const padX = size === 'sm' ? 'px-2' : 'px-2.5';
  const padY = size === 'sm' ? 'py-0.5' : 'py-1';
  const fontSize = size === 'sm' ? '0.65rem' : '0.7rem';

  return (
    <div
      role="group"
      aria-label="Language switcher"
      className="relative inline-flex items-center rounded-lg p-0.5"
      style={{
        background: 'rgba(15, 23, 42, 0.55)',
        border: '1px solid rgba(148, 163, 184, 0.10)',
      }}
    >
      {OPTIONS.map((opt) => {
        const active = locale === opt.code;
        return (
          <button
            key={opt.code}
            type="button"
            onClick={() => setLocale(opt.code)}
            aria-pressed={active}
            aria-label={`Switch language to ${opt.code === 'es' ? 'Español' : 'English'}`}
            className={`relative ${padX} ${padY} rounded-md font-semibold tracking-wide transition-colors duration-200`}
            style={{
              color: active ? '#F1F5F9' : '#64748B',
              fontSize,
              minWidth: '2rem',
              zIndex: 1,
            }}
            onMouseEnter={(e) => {
              if (!active) e.currentTarget.style.color = '#F1F5F9';
            }}
            onMouseLeave={(e) => {
              if (!active) e.currentTarget.style.color = '#64748B';
            }}
          >
            {active && (
              <motion.span
                layoutId={`lang-toggle-pill-${layoutIdSuffix}`}
                className="absolute inset-0 rounded-md"
                style={{
                  background: 'linear-gradient(135deg, #3B82F6, #2563EB)',
                  boxShadow: '0 0 12px rgba(59,130,246,0.30)',
                  zIndex: -1,
                }}
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
