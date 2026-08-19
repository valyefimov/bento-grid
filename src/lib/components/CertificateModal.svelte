<script lang="ts">
  import { localeStore } from '$lib/i18n/index.svelte';
  import { TOTAL_LEVELS } from '$lib/state/gameState.svelte';
  import { ui } from '$lib/state/uiState.svelte';

  let t = $derived(localeStore.t);
  let today = $derived(new Date().toLocaleDateString(localeStore.current));

  const confettiColors = ['var(--red)', 'var(--yellow)', '#4dd0e1', '#7c5cff', '#5be37d'];
  const confettiPieces = Array.from({ length: 18 }, (_, i) => ({
    left: (i * 53.5) % 100,
    delay: (i % 9) * 0.25,
    duration: 2.6 + (i % 5) * 0.35,
    color: confettiColors[i % confettiColors.length]
  }));

  function close(): void {
    ui.certificateModalOpen = false;
  }

  function onOverlayClick(e: MouseEvent): void {
    if (e.target === e.currentTarget) close();
  }
</script>

{#if ui.certificateModalOpen}
  <div class="modal-overlay open" onclick={onOverlayClick} role="presentation">
    <div class="confetti" aria-hidden="true">
      {#each confettiPieces as piece, i (i)}
        <span
          class="confetti-piece"
          style="left:{piece.left}%; animation-delay:{piece.delay}s; animation-duration:{piece.duration}s; background:{piece.color};"
        ></span>
      {/each}
    </div>
    <div class="modal certificate">
      <div class="burst">{@html t.ui.certificateBurst.replace('\n', '<br>')}</div>
      <h2>{@html t.ui.certificateTitle.replace('\n', '<br>')}</h2>
      <p class="certificate-levels">{TOTAL_LEVELS} / {TOTAL_LEVELS} ✓</p>
      <p>{t.ui.certificateBody}</p>
      <p class="certificate-signature">{t.ui.certificateSignature}</p>
      <p class="certificate-date">{today}</p>
      <div class="modal-actions">
        <button class="btn" onclick={close}>{t.ui.certificateCloseBtn}</button>
      </div>
    </div>
  </div>
{/if}

<style>
  .confetti {
    position: fixed;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
    z-index: 201;
  }
  .confetti-piece {
    position: absolute;
    top: -20px;
    width: 10px;
    height: 16px;
    opacity: 0.9;
    animation-name: confetti-fall;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
  @keyframes confetti-fall {
    from {
      transform: translateY(-10vh) rotate(0deg);
    }
    to {
      transform: translateY(110vh) rotate(360deg);
    }
  }
  .certificate {
    text-align: center;
    border-style: double;
    border-width: 6px;
  }
  .certificate-levels {
    font-family: 'Bangers', cursive;
    font-size: 22px;
    color: var(--red);
    letter-spacing: 1px;
  }
  .certificate-signature {
    margin-top: 10px;
    font-style: italic;
  }
  .certificate-date {
    font-size: 11px;
    opacity: 0.7;
  }
  .certificate .modal-actions {
    justify-content: center;
  }
</style>
