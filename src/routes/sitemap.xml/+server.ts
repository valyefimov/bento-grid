import { LOCALES } from '$lib/i18n/index.svelte';
import { SITE_URL } from '$lib/seo';
import type { RequestHandler } from './$types';

export const prerender = true;

function urlEntry(lang: string): string {
  const alternates = LOCALES.map(
    (l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${SITE_URL}/${l}/" />`
  ).join('\n');
  return `  <url>
    <loc>${SITE_URL}/${lang}/</loc>
${alternates}
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}/en/" />
  </url>`;
}

export const GET: RequestHandler = () => {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${LOCALES.map(urlEntry).join('\n')}
</urlset>
`;
  return new Response(body, {
    headers: { 'Content-Type': 'application/xml' }
  });
};
