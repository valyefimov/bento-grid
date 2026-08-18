<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/state';
  import { browser } from '$app/environment';
  import { LOCALES, TRANSLATIONS, localeStore } from '$lib/i18n/index.svelte';
  import { ui } from '$lib/state/uiState.svelte';
  import { loadLevel, levelIdxFromSearch, hydrateCompletedFromStorage } from '$lib/state/gameState.svelte';
  import { SITE_URL } from '$lib/seo';
  import Header from '$lib/components/Header.svelte';
  import GoalCard from '$lib/components/GoalCard.svelte';
  import CodeBlock from '$lib/components/CodeBlock.svelte';
  import Controls from '$lib/components/Controls.svelte';
  import HintCard from '$lib/components/HintCard.svelte';
  import ComicPreview from '$lib/components/ComicPreview.svelte';
  import SuccessModal from '$lib/components/SuccessModal.svelte';
  import HelpModal from '$lib/components/HelpModal.svelte';

  let { data } = $props();

  // Plain synchronous assignment (not $effect: effects never run during SSR,
  // so relying on one here would leave every prerendered page on the default
  // locale/level). This runs during SSR/prerender and on first client mount;
  // the {#key data.lang} below forces a remount (re-running this block)
  // whenever the route's lang param changes on client-side navigation.
  // svelte-ignore state_referenced_locally -- intentional: {#key data.lang} below remounts on change
  localeStore.setFromRoute(data.lang);
  // url.searchParams is off-limits during prerendering (query strings aren't
  // part of a static route); only read it in the browser.
  // svelte-ignore state_referenced_locally -- same as above, re-read on remount
  loadLevel(browser ? levelIdxFromSearch(page.url.searchParams) : 0, { syncUrl: false });

  const HELP_SEEN_KEY = 'cgs_seen_help';

  onMount(() => {
    hydrateCompletedFromStorage();
    if (!localStorage.getItem(HELP_SEEN_KEY)) {
      ui.helpModalOpen = true;
      localStorage.setItem(HELP_SEEN_KEY, '1');
    }
  });

  let t = $derived(localeStore.t);
  let canonicalUrl = $derived(`${SITE_URL}/${data.lang}/`);
</script>

<svelte:head>
  <title>{TRANSLATIONS[data.lang].seo.title}</title>
  <meta name="description" content={TRANSLATIONS[data.lang].seo.description} />
  <link rel="canonical" href={canonicalUrl} />
  {#each LOCALES as locale (locale)}
    <link rel="alternate" hreflang={locale} href={`${SITE_URL}/${locale}/`} />
  {/each}
  <link rel="alternate" hreflang="x-default" href={`${SITE_URL}/en/`} />
</svelte:head>

{#key data.lang}
  <Header />

  <main>
    <section class="panel-frame">
      <h2>{t.ui.workspaceHeading}</h2>
      <GoalCard />
      <CodeBlock />
      <Controls />
      <HintCard />
    </section>

    <section class="panel-frame">
      <h2>{t.ui.previewHeading}</h2>
      <ComicPreview />
    </section>
  </main>

  <footer>
    {t.ui.footerText}
    <div class="footer-credit">
      {t.ui.footerCreatedBy} Valentyn Yefimov.
      <a href="https://github.com/valyefimov/bento-grid" target="_blank" rel="noopener noreferrer">
        {t.ui.footerOpenSource}
      </a>
    </div>
  </footer>

  <SuccessModal />
  <HelpModal />
{/key}
