import type { Locale, Translation } from './types';
import { en } from './locales/en';
import { ru } from './locales/ru';
import { uk } from './locales/uk';
import { de } from './locales/de';
import { es } from './locales/es';

export type { Locale, Translation } from './types';

export const TRANSLATIONS: Record<Locale, Translation> = { en, ru, uk, de, es };

export const LOCALE_NAMES: Record<Locale, string> = {
  en: 'English',
  ru: 'Русский',
  uk: 'Українська',
  de: 'Deutsch',
  es: 'Español'
};

export const LOCALES: Locale[] = ['en', 'ru', 'uk', 'de', 'es'];
export const DEFAULT_LOCALE: Locale = 'en';

const STORAGE_KEY = 'cgs_locale';

// Client-only preference lookup, used to pick a redirect target from the
// language-neutral "/" route. Never called during SSR/prerendering.
export function detectPreferredLocale(): Locale {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved && LOCALES.includes(saved as Locale)) return saved as Locale;
  const nav = navigator.language.slice(0, 2).toLowerCase();
  return LOCALES.includes(nav as Locale) ? (nav as Locale) : DEFAULT_LOCALE;
}

class LocaleStore {
  // Always starts at the default so server-rendered and prerendered markup
  // is deterministic; each /[lang]/ route syncs this to its own param.
  current = $state<Locale>(DEFAULT_LOCALE);

  get t(): Translation {
    return TRANSLATIONS[this.current];
  }

  setFromRoute(locale: Locale): void {
    this.current = locale;
  }

  set(locale: Locale): void {
    this.current = locale;
    if (typeof localStorage !== 'undefined') localStorage.setItem(STORAGE_KEY, locale);
  }
}

export const localeStore = new LocaleStore();
