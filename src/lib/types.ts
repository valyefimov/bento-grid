export type FitMode = 'fixed' | 'px' | 'auto-fit' | 'auto-fill';
export type AutoFlow = 'row' | 'dense';
export type AreaPresetKey = 'holy' | 'stack' | 'right';
export type SubgridMode = 'own' | 'subgrid';

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
  | 'areas'
  | 'justifyself'
  | 'alignself'
  | 'order'
  | 'subgrid';

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
  justifySelf: string;
  alignSelf: string;
  order: string;
  subgridMode: string;
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
  justifySelf?: string;
  alignSelf?: string;
  order?: string;
  subgridMode?: SubgridMode;
}

export interface Level {
  controls: ControlId[];
  forced: Partial<ControlValues>;
  target: LevelTarget;
  mode?: 'grid' | 'areas';
  extraPanels?: boolean;
  hidePanels?: string[];
  // Bypasses the normal fit/cols/size column computation with a literal
  // track template — used by the subgrid level to demonstrate uneven
  // parent tracks that a subgrid child can inherit.
  customColumns?: string;
  // The 'order' level applies grid-order to this panel id instead of the hero.
  orderTargetId?: string;
  // MDN "Web/CSS/<slug>" paths (usually one, sometimes two related properties).
  mdn: string[];
}
