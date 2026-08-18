<script lang="ts">
  import { localeStore } from '$lib/i18n/index.svelte';
  import { game } from '$lib/state/gameState.svelte';

  let t = $derived(localeStore.t);
  let hint = $derived(t.hints[game.values.fit as keyof typeof t.hints] ?? t.ui.defaultHint);
</script>

<div class="hint-card">
  <div class="avatar">!</div>
  <div class="tag">{t.ui.captainSays}</div>
  <p>{hint}</p>
</div>
