<script lang="ts">
  import { localeStore } from '$lib/i18n/index.svelte';
  import { LEVELS } from '$lib/data/levels';
  import { AREA_PRESETS } from '$lib/data/areaPresets';
  import { game } from '$lib/state/gameState.svelte';
  import { ui } from '$lib/state/uiState.svelte';
  import { computeColumnsCss, spanValue } from '$lib/gridEngine';
  import type { AreaPresetKey } from '$lib/types';

  const PANEL_IDS = ['heroPanel', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8'];
  const PANEL_CLASSES = ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8'];
  const EXTRA_IDS = ['p7', 'p8'];

  let t = $derived(localeStore.t);
  let level = $derived(LEVELS[game.levelIdx]!);
  let areasMode = $derived(level.mode === 'areas');
  let subgridLevel = $derived(level.controls.includes('subgrid'));
  let orderLevel = $derived(level.controls.includes('order'));
  let selfLevel = $derived(level.controls.includes('justifyself') || level.controls.includes('alignself'));
  let preset = $derived(AREA_PRESETS[game.values.areasPreset as AreaPresetKey]);

  let gridStyle = $derived.by(() => {
    const parts: string[] = ['display: grid', `gap: ${game.values.gap}px`];
    if (areasMode) {
      parts.push(`grid-template-columns: ${preset.cols}`);
      parts.push(`grid-template-rows: ${preset.rows}`);
      parts.push(`grid-template-areas: ${preset.areas}`);
    } else {
      parts.push(`grid-template-columns: ${level.customColumns ?? computeColumnsCss(game.values)}`);
    }
    parts.push(`grid-auto-flow: ${game.values.autoFlow === 'dense' ? 'row dense' : 'row'}`);
    parts.push(`grid-auto-rows: ${game.values.autoRows === 'auto' ? 'auto' : game.values.autoRows + 'px'}`);
    parts.push(`place-items: ${game.values.placeItems}`);
    parts.push(`place-content: ${game.values.placeContent}`);
    return parts.join('; ');
  });

  let heroStyle = $derived.by(() => {
    const parts: string[] = [];
    if (areasMode) {
      parts.push(`grid-area: ${preset.assign.heroPanel}`);
      parts.push(`place-self: ${game.values.placeSelf}`);
    } else {
      parts.push(`grid-column: ${spanValue(game.values.heroCol)}`);
      if (subgridLevel) {
        parts.push('display: grid');
        parts.push(`grid-template-columns: ${game.values.subgridMode === 'subgrid' ? 'subgrid' : 'repeat(2, 1fr)'}`);
      } else {
        parts.push(`grid-row: span ${game.values.heroRow}`);
      }
      if (selfLevel) {
        parts.push(`justify-self: ${game.values.justifySelf}`);
        parts.push(`align-self: ${game.values.alignSelf}`);
      } else if (!subgridLevel) {
        parts.push(`place-self: ${game.values.placeSelf}`);
      }
    }
    return parts.join('; ');
  });

  function panelStyle(id: string): string {
    const parts: string[] = [];
    if (areasMode && preset.assign[id]) parts.push(`grid-area: ${preset.assign[id]}`);
    if (orderLevel && id === (level.orderTargetId ?? 'p2')) parts.push(`order: ${game.values.order}`);
    return parts.join('; ');
  }

  function isHidden(id: string): boolean {
    if (EXTRA_IDS.includes(id)) return !level.extraPanels;
    return level.hidePanels?.includes(id) ?? false;
  }

  function toggleNeg1(): void {
    ui.negLine1Active = !ui.negLine1Active;
    game.values.heroCol = ui.negLine1Active ? '-1' : '2';
  }

  function toggleNeg2(): void {
    ui.negLine2Active = !ui.negLine2Active;
    game.values.heroRow = ui.negLine2Active ? '2' : '1';
  }
</script>

<div class="comic-page-wrap">
  <div class="overlay-toggles">
    <button class="toggle-btn" class:active={ui.showGridLines} onclick={() => (ui.showGridLines = !ui.showGridLines)}>
      {t.ui.toggleLines}
    </button>
    <button class="toggle-btn" class:active={ui.negLine1Active} onclick={toggleNeg1}>{t.ui.toggleNeg1}</button>
    <button class="toggle-btn" class:active={ui.negLine2Active} onclick={toggleNeg2}>{t.ui.toggleNeg2}</button>
  </div>

  {#key ui.shakeKey}
    <div class="comic-grid" class:show-lines={ui.showGridLines} class:shake={ui.shakeKey > 0} style={gridStyle}>
      {#each PANEL_IDS as id, i (id)}
        {#if id === 'heroPanel'}
          <div class="panel-action {PANEL_CLASSES[i]}" class:hidden-panel={isHidden(id)} style={heroStyle}>
            {#if subgridLevel}
              <div class="subgrid-dot" style="grid-column: 1;">A</div>
              <div class="subgrid-dot" style="grid-column: 2;">B</div>
            {:else}
              <span class="idx">L1</span><span class="tag">{t.panelTags[i]}</span>
            {/if}
          </div>
        {:else}
          <div class="panel-action {PANEL_CLASSES[i]}" class:hidden-panel={isHidden(id)} style={panelStyle(id)}>
            <span class="idx">{i + 1}</span><span class="tag">{t.panelTags[i]}</span>
          </div>
        {/if}
      {/each}
    </div>
  {/key}

  <div class="grid-legend">
    <span><span class="swatch" style="background:#FF7A45"></span>{t.ui.legendHero}</span>
    <span><span class="swatch" style="background:#5B8DEF"></span>{t.ui.legendNormal}</span>
  </div>

  {#if ui.feedbackKind}
    <div class="feedback-msg show" class:ok={ui.feedbackKind === 'ok'} class:err={ui.feedbackKind === 'err'}>
      {ui.feedbackText}
    </div>
  {/if}
</div>
