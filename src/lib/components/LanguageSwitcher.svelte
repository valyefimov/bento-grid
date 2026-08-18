<script lang="ts">
  import { LOCALES, LOCALE_NAMES, localeStore } from '../../i18n/index.svelte';
  import type { Locale } from '../../i18n/types';

  function onChange(e: Event): void {
    const value = (e.target as HTMLSelectElement).value as Locale;
    localeStore.set(value);
  }
</script>

<select aria-label={localeStore.t.ui.languageLabel} value={localeStore.current} onchange={onChange}>
  {#each LOCALES as locale (locale)}
    <option value={locale}>{LOCALE_NAMES[locale]}</option>
  {/each}
</select>
