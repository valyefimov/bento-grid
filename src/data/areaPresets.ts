import type { AreaPreset, AreaPresetKey } from '../types';

export const AREA_PRESETS: Record<AreaPresetKey, AreaPreset> = {
  holy: {
    cols: '100px 1fr',
    rows: 'auto 1fr auto',
    areas: '"header header" "sidebar main" "footer footer"',
    assign: { heroPanel: 'header', p2: 'sidebar', p3: 'main', p4: 'footer' }
  },
  stack: {
    cols: '1fr',
    rows: 'repeat(4, auto)',
    areas: '"header" "sidebar" "main" "footer"',
    assign: { heroPanel: 'header', p2: 'sidebar', p3: 'main', p4: 'footer' }
  },
  right: {
    cols: '1fr 100px',
    rows: 'auto 1fr auto',
    areas: '"header header" "main sidebar" "footer footer"',
    assign: { heroPanel: 'header', p2: 'sidebar', p3: 'main', p4: 'footer' }
  }
};
