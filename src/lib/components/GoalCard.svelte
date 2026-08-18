<script lang="ts">
  import { localeStore } from '$lib/i18n/index.svelte';
  import { LEVELS } from '$lib/data/levels';
  import { TOTAL_LEVELS, game } from '$lib/state/gameState.svelte';
  import { mdnUrl } from '$lib/mdn';

  let t = $derived(localeStore.t);
  let levelText = $derived(t.levels[game.levelIdx]!);
  let level = $derived(LEVELS[game.levelIdx]!);

  function mdnLabel(slug: string): string {
    const last = slug.includes('/') ? slug.split('/').pop()! : slug;
    return last.replace(/_/g, ' ');
  }
</script>

<div class="goal-card">
  <div class="goal-concept">{levelText.concept}</div>
  <p class="goal-label">{t.ui.goalLabel}</p>
  <p>{levelText.goal}</p>
  <div class="mdn-links">
    {#each level.mdn as slug (slug)}
      <a href={mdnUrl(slug, localeStore.current)} target="_blank" rel="noopener noreferrer">
        {t.ui.mdnLinkLabel}: {mdnLabel(slug)} ↗
      </a>
    {/each}
  </div>
  <div class="progress-dots">
    {#each Array(TOTAL_LEVELS) as _, i (i)}
      <span class:done={game.completed.has(i)} class:current={i === game.levelIdx}></span>
    {/each}
  </div>
</div>
