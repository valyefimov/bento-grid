<script lang="ts">
  import { goto } from '$app/navigation';
  import { base } from '$app/paths';
  import { LOCALES, LOCALE_NAMES, localeStore } from '$lib/i18n/index.svelte';
  import type { Locale } from '$lib/i18n/types';

  function onChange(e: Event): void {
    const value = (e.target as HTMLSelectElement).value as Locale;
    localeStore.set(value);
    goto(`${base}/${value}/`);
  }
</script>

<select aria-label={localeStore.t.ui.languageLabel} value={localeStore.current} onchange={onChange}>
  {#each LOCALES as locale (locale)}
    <option value={locale}>{LOCALE_NAMES[locale]}</option>
  {/each}
</select>
