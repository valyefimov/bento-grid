import { error } from '@sveltejs/kit';
import { LOCALES } from '$lib/i18n/index.svelte';
import type { Locale } from '$lib/i18n/types';
import type { EntryGenerator, PageLoad } from './$types';

export const prerender = true;

export const entries: EntryGenerator = () => LOCALES.map((lang) => ({ lang }));

export const load: PageLoad = ({ params }) => {
  if (!LOCALES.includes(params.lang as Locale)) {
    error(404, 'Not found');
  }
  return { lang: params.lang as Locale };
};
