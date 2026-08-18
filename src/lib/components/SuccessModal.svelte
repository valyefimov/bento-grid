<script lang="ts">
  import { localeStore } from '../../i18n/index.svelte';
  import { TOTAL_LEVELS, loadLevel, game } from '../../state/gameState.svelte';
  import { ui } from '../../state/uiState.svelte';

  let t = $derived(localeStore.t);

  function close(): void {
    ui.successModalOpen = false;
  }

  function next(): void {
    const nextIdx = (game.levelIdx + 1) % TOTAL_LEVELS;
    loadLevel(nextIdx);
    ui.resetToggles();
    ui.resetFeedback();
    close();
  }

  function onOverlayClick(e: MouseEvent): void {
    if (e.target === e.currentTarget) close();
  }
</script>

{#if ui.successModalOpen}
  <div class="modal-overlay open" onclick={onOverlayClick} role="presentation">
    <div class="modal">
      <div class="burst">{@html t.ui.successBurst.replace('\n', '<br>')}</div>
      <h2>{@html t.ui.successTitle.replace('\n', '<br>')}</h2>
      <p>{t.ui.successBody}</p>
      <pre>{ui.successCode}</pre>
      <div class="modal-actions">
        <button class="btn ghost" onclick={close}>{t.ui.closeBtn}</button>
        <button class="btn" onclick={next}>{t.ui.nextLevelBtn}</button>
      </div>
    </div>
  </div>
{/if}
