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
  areasPreset: 'holy',
  justifySelf: 'stretch',
  alignSelf: 'stretch',
  order: '0',
  subgridMode: 'own'
};

// Structural definitions only. Level text (concept/goal/hint) lives in i18n
// translations, indexed by the same position as this array.
export const LEVELS: Level[] = [
  {
    controls: ['fitcols'],
    forced: {},
    target: { fit: 'fixed', cols: '3' },
    mdn: ['grid-template-columns']
  },
  {
    controls: ['gap'],
    forced: { fit: 'fixed', cols: '3' },
    target: { gap: 24 },
    mdn: ['gap']
  },
  {
    controls: ['fitcols', 'size'],
    forced: {},
    target: { fit: 'auto-fit', size: '140' },
    mdn: ['repeat']
  },
  {
    controls: ['fitcols', 'size'],
    forced: {},
    target: { fit: 'auto-fill', size: '140' },
    mdn: ['repeat']
  },
  {
    controls: ['hero'],
    forced: { fit: 'auto-fit', size: '140' },
    target: { heroCol: '2' },
    mdn: ['grid-column']
  },
  {
    controls: ['hero'],
    forced: { fit: 'auto-fit', size: '140' },
    target: { heroRow: '2' },
    mdn: ['grid-row']
  },
  {
    controls: ['hero'],
    forced: { fit: 'auto-fit', size: '140' },
    target: { heroCol: '3', heroRow: '2' },
    mdn: ['grid-column', 'grid-row']
  },
  {
    controls: ['hero'],
    forced: { fit: 'auto-fit', size: '140' },
    target: { heroCol: '-1' },
    mdn: ['grid-column']
  },
  {
    controls: ['autoflow'],
    forced: { fit: 'fixed', cols: '3', heroCol: '2', heroRow: '2' },
    target: { autoFlow: 'dense' },
    mdn: ['grid-auto-flow']
  },
  {
    controls: ['autorows'],
    forced: { fit: 'fixed', cols: '3', heroCol: '1', heroRow: '1' },
    extraPanels: true,
    target: { autoRows: '120' },
    mdn: ['grid-auto-rows']
  },
  {
    controls: ['placeitems'],
    forced: { fit: 'auto-fit', size: '140' },
    target: { placeItems: 'start' },
    mdn: ['place-items']
  },
  {
    controls: ['placecontent'],
    forced: { fit: 'px', cols: '3' },
    target: { placeContent: 'center' },
    mdn: ['place-content']
  },
  {
    controls: ['placeself'],
    forced: { fit: 'auto-fit', size: '140', placeItems: 'start' },
    target: { placeSelf: 'center' },
    mdn: ['place-self']
  },
  {
    controls: ['areas'],
    forced: {},
    mode: 'areas',
    hidePanels: ['p5', 'p6'],
    target: { areasPreset: 'holy' },
    mdn: ['grid-template-areas']
  },
  {
    controls: ['justifyself', 'alignself'],
    forced: { fit: 'auto-fit', size: '140', placeItems: 'start' },
    target: { justifySelf: 'end', alignSelf: 'start' },
    mdn: ['justify-self', 'align-self']
  },
  {
    controls: ['order'],
    forced: { fit: 'fixed', cols: '3' },
    orderTargetId: 'p2',
    target: { order: '-1' },
    mdn: ['order']
  },
  {
    controls: ['subgrid'],
    forced: { fit: 'fixed', cols: '3', heroCol: '2', heroRow: '1' },
    customColumns: '2fr 1fr 1fr',
    target: { subgridMode: 'subgrid' },
    mdn: ['CSS_grid_layout/Subgrid']
  },
  {
    controls: ['fitcols', 'size', 'gap', 'hero'],
    forced: {},
    target: { fit: 'auto-fit', size: '200', gap: 20, heroCol: '2', heroRow: '2' },
    mdn: ['CSS_grid_layout']
  }
];
