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

const STORAGE_KEY = 'cgs_locale';

function detectInitialLocale(): Locale {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved && LOCALES.includes(saved as Locale)) return saved as Locale;
  const nav = navigator.language.slice(0, 2).toLowerCase();
  return LOCALES.includes(nav as Locale) ? (nav as Locale) : 'en';
}

class LocaleStore {
  current = $state<Locale>(detectInitialLocale());

  get t(): Translation {
    return TRANSLATIONS[this.current];
  }

  set(locale: Locale): void {
    this.current = locale;
    localStorage.setItem(STORAGE_KEY, locale);
  }
}

export const localeStore = new LocaleStore();
