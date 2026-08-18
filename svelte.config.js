import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
export default {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      pages: 'dist',
      assets: 'dist',
      fallback: undefined,
      precompress: false,
      strict: true
    }),
    // Set BASE_PATH="/repo-name" when deploying to a GitHub Pages project
    // site (not a custom domain) so asset/link URLs resolve correctly.
    paths: {
      base: process.env.BASE_PATH ?? ''
    },
    prerender: {
      entries: ['*']
    }
  }
};
