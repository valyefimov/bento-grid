import type { Handle } from '@sveltejs/kit';
import { LOCALES } from '$lib/i18n/index.svelte';

export const handle: Handle = async ({ event, resolve }) => {
  const param = event.params.lang;
  const lang = param && (LOCALES as string[]).includes(param) ? param : 'en';

  return resolve(event, {
    transformPageChunk: ({ html }) => html.replace('%lang%', lang)
  });
};
