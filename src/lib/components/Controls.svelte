<script lang="ts">
  import { localeStore } from '../../i18n/index.svelte';
  import { LEVELS } from '../../data/levels';
  import { game } from '../../state/gameState.svelte';
  import type { ControlId } from '../../types';

  let t = $derived(localeStore.t);
  let level = $derived(LEVELS[game.levelIdx]!);

  function visible(id: ControlId): boolean {
    return level.controls.includes(id);
  }
</script>

<div class="ctl" class:ctl-hidden={!visible('gap')}>
  <label class="control-row" style="margin-bottom:0;">
    <span style="display:flex; justify-content:space-between; font-weight:700; font-size:13px; text-transform:uppercase;">
      {t.ui.gapControlLabel} <span style="color:var(--red);">{game.values.gap}px</span>
    </span>
    <input type="range" min="0" max="40" bind:value={game.values.gap} />
  </label>
</div>

<div class="ctl" class:ctl-hidden={!visible('fitcols')}>
  <p class="ctl-label">{t.ui.fitControlLabel}</p>
  <div class="control-grid">
    <select bind:value={game.values.fit}>
      <option value="fixed">{t.options.fitFixed}</option>
      <option value="px">{t.options.fitPx}</option>
      <option value="auto-fit">{t.options.fitAutoFit}</option>
      <option value="auto-fill">{t.options.fitAutoFill}</option>
    </select>
    <select bind:value={game.values.cols}>
      <option value="2">repeat(2, ...)</option>
      <option value="3">repeat(3, ...)</option>
      <option value="4">repeat(4, ...)</option>
      <option value="5">repeat(5, ...)</option>
    </select>
  </div>
</div>

<div class="ctl" class:ctl-hidden={!visible('size')}>
  <p class="ctl-label">{t.ui.sizeControlLabel}</p>
  <select style="width:100%; box-shadow:3px 3px 0 var(--black);" bind:value={game.values.size}>
    <option value="100">minmax(100px, 1fr)</option>
    <option value="140">minmax(140px, 1fr)</option>
    <option value="200">minmax(200px, 1fr)</option>
    <option value="260">minmax(260px, 1fr)</option>
  </select>
</div>

<div class="ctl" class:ctl-hidden={!visible('hero')}>
  <p class="ctl-label">{t.ui.heroControlLabel}</p>
  <div class="control-grid">
    <select bind:value={game.values.heroCol}>
      <option value="1">span-col: 1</option>
      <option value="2">span-col: 2</option>
      <option value="3">span-col: 3</option>
      <option value="-1">{t.options.heroToLastLine}</option>
    </select>
    <select bind:value={game.values.heroRow}>
      <option value="1">span-row: 1</option>
      <option value="2">span-row: 2</option>
      <option value="3">span-row: 3</option>
    </select>
  </div>
</div>

<div class="ctl" class:ctl-hidden={!visible('autoflow')}>
  <p class="ctl-label">{t.ui.autoflowControlLabel}</p>
  <select style="width:100%; box-shadow:3px 3px 0 var(--black);" bind:value={game.values.autoFlow}>
    <option value="row">{t.options.autoFlowRow}</option>
    <option value="dense">{t.options.autoFlowDense}</option>
  </select>
</div>

<div class="ctl" class:ctl-hidden={!visible('autorows')}>
  <p class="ctl-label">{t.ui.autorowsControlLabel}</p>
  <select style="width:100%; box-shadow:3px 3px 0 var(--black);" bind:value={game.values.autoRows}>
    <option value="auto">auto</option>
    <option value="80">80px</option>
    <option value="120">120px</option>
    <option value="160">160px</option>
  </select>
</div>

<div class="ctl" class:ctl-hidden={!visible('placeitems')}>
  <p class="ctl-label">{t.ui.placeitemsControlLabel}</p>
  <select style="width:100%; box-shadow:3px 3px 0 var(--black);" bind:value={game.values.placeItems}>
    <option value="stretch">stretch</option>
    <option value="start">start</option>
    <option value="center">center</option>
    <option value="end">end</option>
  </select>
</div>

<div class="ctl" class:ctl-hidden={!visible('placecontent')}>
  <p class="ctl-label">{t.ui.placecontentControlLabel}</p>
  <select style="width:100%; box-shadow:3px 3px 0 var(--black);" bind:value={game.values.placeContent}>
    <option value="start">start</option>
    <option value="center">center</option>
    <option value="end">end</option>
    <option value="space-between">space-between</option>
  </select>
</div>

<div class="ctl" class:ctl-hidden={!visible('placeself')}>
  <p class="ctl-label">{t.ui.placeselfControlLabel}</p>
  <select style="width:100%; box-shadow:3px 3px 0 var(--black);" bind:value={game.values.placeSelf}>
    <option value="stretch">stretch</option>
    <option value="start">start</option>
    <option value="center">center</option>
    <option value="end">end</option>
  </select>
</div>

<div class="ctl" class:ctl-hidden={!visible('areas')}>
  <p class="ctl-label">{t.ui.areasControlLabel}</p>
  <select style="width:100%; box-shadow:3px 3px 0 var(--black);" bind:value={game.values.areasPreset}>
    <option value="holy">{t.options.areaHoly}</option>
    <option value="stack">{t.options.areaStack}</option>
    <option value="right">{t.options.areaRight}</option>
  </select>
</div>
