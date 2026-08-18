import { AREA_PRESETS } from '../data/areaPresets';
import type { AreaPresetKey, ControlValues, Level, LevelTarget } from '../types';

function areaPreset(key: string) {
  return AREA_PRESETS[key as AreaPresetKey];
}

export function spanValue(v: string): string {
  if (v === '-1') return 'span 2 / -1';
  return 'span ' + v;
}

export function computeColumnsCss(values: ControlValues): string {
  if (values.fit === 'fixed') return `repeat(${values.cols}, 1fr)`;
  if (values.fit === 'px') return `repeat(${values.cols}, 100px)`;
  return `repeat(${values.fit}, minmax(${values.size}px, 1fr))`;
}

export function checkLevel(target: LevelTarget, values: ControlValues): boolean {
  if (target.fit !== undefined && values.fit !== target.fit) return false;
  if (target.cols !== undefined && values.cols !== target.cols) return false;
  if (target.size !== undefined && values.size !== target.size) return false;
  if (target.gap !== undefined && Math.abs(parseInt(values.gap, 10) - target.gap) > 4) return false;
  if (target.heroCol !== undefined && values.heroCol !== target.heroCol) return false;
  if (target.heroRow !== undefined && values.heroRow !== target.heroRow) return false;
  if (target.autoFlow !== undefined && values.autoFlow !== target.autoFlow) return false;
  if (target.autoRows !== undefined && values.autoRows !== target.autoRows) return false;
  if (target.placeItems !== undefined && values.placeItems !== target.placeItems) return false;
  if (target.placeContent !== undefined && values.placeContent !== target.placeContent) return false;
  if (target.placeSelf !== undefined && values.placeSelf !== target.placeSelf) return false;
  if (target.areasPreset !== undefined && values.areasPreset !== target.areasPreset) return false;
  return true;
}

export function stripTags(html: string): string {
  return html.replace(/<[^>]+>/g, '');
}

export interface CodeLabels {
  levelWord: string;
  concept: string;
  areaComment: string;
}

export function buildCodeHtml(level: Level, values: ControlValues, levelNum: number, labels: CodeLabels): string {
  const areasMode = level.mode === 'areas';
  const colsCss = areasMode ? areaPreset(values.areasPreset).cols : computeColumnsCss(values);
  const rowsCss = areasMode ? areaPreset(values.areasPreset).rows : '';
  const gap = values.gap + 'px';
  const c = level.controls;

  let gridLines = '  <span class="prop">display</span>: <span class="val">grid</span>;\n';
  if (areasMode) {
    gridLines += `  <span class="prop">grid-template-columns</span>: <span class="val">${colsCss}</span>;\n`;
    gridLines += `  <span class="prop">grid-template-rows</span>: <span class="val">${rowsCss}</span>;\n`;
    const areasFormatted = areaPreset(values.areasPreset).areas.replace(/" "/g, '"\n    "');
    gridLines += `  <span class="prop">grid-template-areas</span>:\n    <span class="val">${areasFormatted}</span>;\n`;
  } else {
    gridLines += `  <span class="prop">grid-template-columns</span>: <span class="val">${colsCss}</span>;\n`;
  }
  gridLines += `  <span class="prop">gap</span>: <span class="val">${gap}</span>;\n`;
  if (c.includes('autoflow')) {
    gridLines += `  <span class="prop">grid-auto-flow</span>: <span class="val">${values.autoFlow === 'dense' ? 'row dense' : 'row'}</span>;\n`;
  }
  if (c.includes('autorows')) {
    gridLines += `  <span class="prop">grid-auto-rows</span>: <span class="val">${values.autoRows === 'auto' ? 'auto' : values.autoRows + 'px'}</span>;\n`;
  }
  if (c.includes('placeitems')) {
    gridLines += `  <span class="prop">place-items</span>: <span class="val">${values.placeItems}</span>;\n`;
  }
  if (c.includes('placecontent')) {
    gridLines += `  <span class="prop">place-content</span>: <span class="val">${values.placeContent}</span>;\n`;
  }

  let panelLines = '';
  const heroSelector = areasMode ? '<span class="sel">.header</span>' : '<span class="sel">.panel-action.hero</span>';
  if (areasMode) {
    panelLines += `  <span class="prop">grid-area</span>: <span class="val">header</span>; <span class="cmt">/* ${labels.areaComment} */</span>\n`;
  } else {
    panelLines += `  <span class="prop">grid-column</span>: <span class="val">${spanValue(values.heroCol)}</span>;\n`;
    panelLines += `  <span class="prop">grid-row</span>: <span class="val">span ${values.heroRow}</span>;\n`;
  }
  if (c.includes('placeself')) {
    panelLines += `  <span class="prop">place-self</span>: <span class="val">${values.placeSelf}</span>;\n`;
  }

  return (
    `<span class="cmt">/* ${labels.levelWord} ${levelNum}: ${labels.concept} */</span>\n` +
    `<span class="sel">.comic-grid</span> {\n${gridLines}}\n\n` +
    `${heroSelector} {\n${panelLines}}`
  );
}
