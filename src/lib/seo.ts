// Falls back to this placeholder locally; the deploy workflow overrides it
// via VITE_SITE_URL so canonical/hreflang/sitemap match the real deploy URL.
export const SITE_URL: string =
  import.meta.env.VITE_SITE_URL ?? 'https://comic-grid-studio.example';
