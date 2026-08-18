<script lang="ts">
  import { localeStore } from '../../i18n/index.svelte';
  import { ui } from '../../state/uiState.svelte';

  let t = $derived(localeStore.t);

  function close(): void {
    ui.helpModalOpen = false;
  }

  function onOverlayClick(e: MouseEvent): void {
    if (e.target === e.currentTarget) close();
  }
</script>

{#if ui.helpModalOpen}
  <div class="modal-overlay open" onclick={onOverlayClick} role="presentation">
    <div class="modal">
      <div class="burst">{@html t.ui.helpBurst.replace('\n', '<br>')}</div>
      <h2>{t.ui.helpTitle}</h2>
      <ol class="help-steps">
        {#each t.ui.helpSteps as step, i (i)}
          <li><span class="num">{i + 1}</span> {step}</li>
        {/each}
      </ol>
      <div class="help-topics">{t.ui.helpTopics}</div>
      <div class="modal-actions">
        <button class="btn" onclick={close}>{t.ui.helpCloseBtn}</button>
      </div>
    </div>
  </div>
{/if}
