<script lang="ts">
  import { localeStore } from '../../i18n/index.svelte';
  import { TOTAL_LEVELS, game } from '../../state/gameState.svelte';

  let t = $derived(localeStore.t);
  let levelText = $derived(t.levels[game.levelIdx]!);
</script>

<div class="goal-card">
  <div class="goal-concept">{levelText.concept}</div>
  <p class="goal-label">{t.ui.goalLabel}</p>
  <p>{levelText.goal}</p>
  <div class="progress-dots">
    {#each Array(TOTAL_LEVELS) as _, i (i)}
      <span class:done={game.completed.has(i)} class:current={i === game.levelIdx}></span>
    {/each}
  </div>
</div>
