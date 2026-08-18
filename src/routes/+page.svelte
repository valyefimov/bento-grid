<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { base } from '$app/paths';
  import { detectPreferredLocale } from '$lib/i18n/index.svelte';
  import { SITE_URL } from '$lib/seo';

  onMount(() => {
    goto(`${base}/${detectPreferredLocale()}/`, { replaceState: true });
  });
</script>

<svelte:head>
  <title>Comic Grid Studio</title>
  <meta http-equiv="refresh" content="0; url={base}/en/" />
  <link rel="canonical" href="{SITE_URL}/en/" />
</svelte:head>

<p>Redirecting to <a href="{base}/en/">Comic Grid Studio</a>…</p>
