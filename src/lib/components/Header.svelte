<script lang="ts">
  import { localeStore } from '../../i18n/index.svelte';
  import { LEVELS } from '../../data/levels';
  import { game, loadLevel } from '../../state/gameState.svelte';
  import { ui } from '../../state/uiState.svelte';
  import { checkLevel, buildCodeHtml, stripTags } from '../../lib/gridEngine';
  import LanguageSwitcher from './LanguageSwitcher.svelte';

  const totalLevels = LEVELS.length;

  function onLevelSelect(e: Event): void {
    const idx = parseInt((e.target as HTMLSelectElement).value, 10) - 1;
    loadLevel(idx);
    ui.resetToggles();
    ui.resetFeedback();
  }

  function runAction(): void {
    const t = localeStore.t;
    const level = LEVELS[game.levelIdx]!;
    const levelText = t.levels[game.levelIdx]!;
    if (checkLevel(level.target, game.values)) {
      game.completed.add(game.levelIdx);
      ui.showSuccess(t.ui.successFeedback);
      ui.successCode = stripTags(
        buildCodeHtml(level, game.values, game.levelIdx + 1, {
          levelWord: t.ui.levelWord,
          concept: levelText.concept,
          areaComment: t.ui.areaComment
        })
      );
      ui.successModalOpen = true;
    } else {
      ui.showError(t.ui.errorFeedbackPrefix + levelText.hint);
    }
  }
</script>

<header>
  <div class="brand">
    <div class="bubble">{localeStore.t.ui.appTitle}</div>
  </div>
  <div class="header-controls">
    <LanguageSwitcher />
    <select aria-label={localeStore.t.ui.levelSelectLabel} value={String(game.levelIdx + 1)} onchange={onLevelSelect}>
      {#each Array(totalLevels) as _, i (i)}
        <option value={String(i + 1)}>{localeStore.t.ui.levelWord} {i + 1}</option>
      {/each}
    </select>
    <button class="btn ghost icon" onclick={() => (ui.helpModalOpen = true)}>{localeStore.t.ui.helpBtn}</button>
    <button class="btn" onclick={runAction}>{localeStore.t.ui.runBtn}</button>
  </div>
</header>
