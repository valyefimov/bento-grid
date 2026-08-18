import type { Locale } from './i18n/types';

// MDN only ships a fixed set of locales. Anything we support beyond that
// (de, uk) falls back to en-US rather than linking a 404/redirect chain.
const MDN_LOCALES: Record<Locale, string> = {
  en: 'en-US',
  ru: 'ru',
  es: 'es',
  de: 'en-US',
  uk: 'en-US'
};

export function mdnLocale(locale: Locale): string {
  return MDN_LOCALES[locale];
}

export function mdnUrl(slug: string, locale: Locale): string {
  return `https://developer.mozilla.org/${mdnLocale(locale)}/docs/Web/CSS/${slug}`;
}
