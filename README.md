<img width="1252" height="1074" alt="image" src="https://github.com/user-attachments/assets/5e9b30c6-ed1a-4a6f-b03e-b872fd452343" />

**Live: https://bento-grid.yefimov.tech/en/**

# Comic Grid Studio

Learn CSS Grid by drawing a comic book. No tutorials, no walls of text — you turn knobs, the panels rearrange, and either the page looks glorious or it collapses into a Jackson Pollock painting. 18 levels, from `display: grid` to `subgrid`, in 5 languages, indexed by Google, and it survives a page reload without forgetting who you are.

Built because "just read the MDN docs" is correct advice that nobody follows.

## What it actually teaches

`display: grid`, `fr` / `repeat()`, `gap`, `auto-fit` vs `auto-fill`, `minmax()`, `grid-column` / `grid-row` span, negative line indexes, `grid-auto-flow: dense`, `grid-auto-rows` (implicit grid), `place-items`, `place-content`, `place-self`, `grid-template-areas`, `justify-self` / `align-self`, `order`, and `subgrid`.

Deliberately **not** covered: manual `@media` breakpoints (auto-fit/minmax quietly does that job better) and the `grid-template` shorthand (it's just three properties you already know wearing a trench coat). The in-app help modal says so out loud instead of pretending to be exhaustive.

Each level also links straight to the relevant MDN page — in the language you're playing in, where MDN actually has one.

## Stack

- **SvelteKit 2 + Svelte 5** (runes) — components own their slice of state, no framework ceremony
- **TypeScript**, strict, `noUncheckedIndexedAccess` and friends turned on
- **`adapter-static`** — fully prerendered, zero server at runtime
- **Vite** for the dev loop

No CSS framework. The CSS *is* the point.

## Internationalization

English, Russian, Ukrainian, German, Spanish. Every level's goal/hint/concept text, every UI label, and the MDN links are translated — not machine-translated placeholders, actual sentences.

Routes are `/en/`, `/ru/`, `/uk/`, `/de/`, `/es/`, each fully prerendered with its own `<title>`, meta description, canonical URL, and `hreflang` alternates. `/` detects your browser language client-side and redirects; crawlers get a `<meta refresh>` to `/en/` so nobody's stuck staring at a blank page.

## SEO, or: making sure a robot can read this thing

- Static HTML per language, no JS required to see real content (view-source it, it's all there)
- `sitemap.xml` and `robots.txt` generated at build time
- Progress (`completed` levels) persists in `localStorage`; current level persists in the URL (`?level=7`) so a shared link opens on the right level

## Running it

```bash
npm install
npm run dev       # dev server
npm run check     # svelte-kit sync + svelte-check
npm run build     # typecheck + prerender everything into dist/
npm run preview   # serve the production build locally
```

`dist/` is a plain folder of static files. Host it anywhere that can serve HTML — no Node process required in production.

### Deploying to a subpath (e.g. GitHub Pages project sites)

If the site doesn't live at your domain root, set these before building:

```bash
BASE_PATH=/your-repo-name VITE_SITE_URL=https://you.github.io/your-repo-name npm run build
```

Without them it assumes it owns the whole domain.

## CI/CD

- `.github/workflows/ci.yml` — typecheck + build on every push and PR. Catches the "works on my machine" class of bugs before they touch `main`.
- `.github/workflows/deploy.yml` — builds with the right `BASE_PATH`/`VITE_SITE_URL` for GitHub Pages and deploys on push to `main`. Enable it under **Settings → Pages → Source → GitHub Actions**, or it has nowhere to publish to.

## Project layout

```
src/
  routes/
    +page.svelte          language-sniffing redirect at "/"
    [lang]/+page.svelte    the actual app, one per locale
    sitemap.xml/robots.txt generated endpoints
  lib/
    components/            Header, Controls, ComicPreview, modals, ...
    data/levels.ts          18 levels: which controls show, what "correct" means
    i18n/                   translations + the reactive locale store
    state/                  game state and UI state (Svelte 5 runes)
    gridEngine.ts           pure functions: compute CSS, check answers, render code
    mdn.ts                  per-locale MDN link builder
```

Level *content* (goal/hint/concept text) lives in `i18n/locales/*.ts`; level *structure* (which controls are visible, what counts as solved) lives in `data/levels.ts`, same array index. Keep them in sync if you add a level — nothing will crash if you forget, it'll just quietly show the wrong instructions, which is somehow worse.

## License

MIT — see [LICENSE](LICENSE). Do whatever you want with it.

Created by [Valentyn Yefimov](https://github.com/valyefimov). Open source on GitHub.
