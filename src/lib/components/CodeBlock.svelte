<script lang="ts">
  import { localeStore } from '$lib/i18n/index.svelte';
  import { LEVELS } from '$lib/data/levels';
  import { game } from '$lib/state/gameState.svelte';
  import { buildCodeHtml } from '$lib/gridEngine';

  let t = $derived(localeStore.t);
  let level = $derived(LEVELS[game.levelIdx]!);
  let levelText = $derived(t.levels[game.levelIdx]!);
  let html = $derived(
    buildCodeHtml(level, game.values, game.levelIdx + 1, {
      levelWord: t.ui.levelWord,
      concept: levelText.concept,
      areaComment: t.ui.areaComment
    })
  );
</script>

<div class="code-box">{@html html}</div>
