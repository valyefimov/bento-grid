import type { ControlValues, Level } from '../types';

export const DEFAULTS: ControlValues = {
  gap: '8',
  fit: 'fixed',
  cols: '3',
  size: '140',
  heroCol: '1',
  heroRow: '1',
  autoFlow: 'row',
  autoRows: 'auto',
  placeItems: 'stretch',
  placeContent: 'start',
  placeSelf: 'stretch',
  areasPreset: 'holy'
};

// Structural definitions only. Level text (concept/goal/hint) lives in i18n
// translations, indexed by the same position as this array.
export const LEVELS: Level[] = [
  {
    controls: ['fitcols'],
    forced: {},
    target: { fit: 'fixed', cols: '3' }
  },
  {
    controls: ['gap'],
    forced: { fit: 'fixed', cols: '3' },
    target: { gap: 24 }
  },
  {
    controls: ['fitcols', 'size'],
    forced: {},
    target: { fit: 'auto-fit', size: '140' }
  },
  {
    controls: ['fitcols', 'size'],
    forced: {},
    target: { fit: 'auto-fill', size: '140' }
  },
  {
    controls: ['hero'],
    forced: { fit: 'auto-fit', size: '140' },
    target: { heroCol: '2' }
  },
  {
    controls: ['hero'],
    forced: { fit: 'auto-fit', size: '140' },
    target: { heroRow: '2' }
  },
  {
    controls: ['hero'],
    forced: { fit: 'auto-fit', size: '140' },
    target: { heroCol: '3', heroRow: '2' }
  },
  {
    controls: ['hero'],
    forced: { fit: 'auto-fit', size: '140' },
    target: { heroCol: '-1' }
  },
  {
    controls: ['autoflow'],
    forced: { fit: 'fixed', cols: '3', heroCol: '2', heroRow: '2' },
    target: { autoFlow: 'dense' }
  },
  {
    controls: ['autorows'],
    forced: { fit: 'fixed', cols: '3', heroCol: '1', heroRow: '1' },
    extraPanels: true,
    target: { autoRows: '120' }
  },
  {
    controls: ['placeitems'],
    forced: { fit: 'auto-fit', size: '140' },
    target: { placeItems: 'start' }
  },
  {
    controls: ['placecontent'],
    forced: { fit: 'px', cols: '3' },
    target: { placeContent: 'center' }
  },
  {
    controls: ['placeself'],
    forced: { fit: 'auto-fit', size: '140', placeItems: 'start' },
    target: { placeSelf: 'center' }
  },
  {
    controls: ['areas'],
    forced: {},
    mode: 'areas',
    hidePanels: ['p5', 'p6'],
    target: { areasPreset: 'holy' }
  },
  {
    controls: ['fitcols', 'size', 'gap', 'hero'],
    forced: {},
    target: { fit: 'auto-fit', size: '200', gap: 20, heroCol: '2', heroRow: '2' }
  }
];
