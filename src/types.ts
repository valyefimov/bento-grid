export type FitMode = 'fixed' | 'px' | 'auto-fit' | 'auto-fill';
export type AutoFlow = 'row' | 'dense';
export type AreaPresetKey = 'holy' | 'stack' | 'right';

export type ControlId =
  | 'gap'
  | 'fitcols'
  | 'size'
  | 'hero'
  | 'autoflow'
  | 'autorows'
  | 'placeitems'
  | 'placecontent'
  | 'placeself'
  | 'areas';

// Plain strings (not the narrower union types above) so <select bind:value>
// bindings in Svelte components stay simple; the unions are still used for
// literal data (level targets, area preset keys) where narrowing helps.
export interface ControlValues {
  gap: string;
  fit: string;
  cols: string;
  size: string;
  heroCol: string;
  heroRow: string;
  autoFlow: string;
  autoRows: string;
  placeItems: string;
  placeContent: string;
  placeSelf: string;
  areasPreset: string;
}

export interface AreaPreset {
  cols: string;
  rows: string;
  areas: string;
  assign: Record<string, string>;
}

export interface LevelTarget {
  fit?: FitMode;
  cols?: string;
  size?: string;
  gap?: number;
  heroCol?: string;
  heroRow?: string;
  autoFlow?: AutoFlow;
  autoRows?: string;
  placeItems?: string;
  placeContent?: string;
  placeSelf?: string;
  areasPreset?: AreaPresetKey;
}

export interface Level {
  controls: ControlId[];
  forced: Partial<ControlValues>;
  target: LevelTarget;
  mode?: 'grid' | 'areas';
  extraPanels?: boolean;
  hidePanels?: string[];
}
