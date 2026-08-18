import type { Translation } from '../types';

export const en: Translation = {
  ui: {
    appTitle: 'Comic Grid Studio',
    helpBtn: '? How to play',
    runBtn: '▶ Run action!',
    workspaceHeading: 'Code workshop',
    previewHeading: 'Comic page',
    goalLabel: 'Task',
    gapControlLabel: 'Gap (panel spacing)',
    fitControlLabel: 'Column mode / count',
    sizeControlLabel: 'minmax() track size',
    heroControlLabel: 'Hero panel: span',
    autoflowControlLabel: 'grid-auto-flow',
    autorowsControlLabel: 'grid-auto-rows (implicit rows)',
    placeitemsControlLabel: 'place-items (align+justify-items)',
    placecontentControlLabel: 'place-content (align+justify-content)',
    placeselfControlLabel: 'place-self (hero only)',
    areasControlLabel: 'grid-template-areas layout',
    captainSays: 'Captain Cascade says:',
    defaultHint: 'Turn the controls above — the code and preview on the right update live.',
    toggleLines: 'Grid lines',
    toggleNeg1: 'line -1',
    toggleNeg2: 'line -2',
    legendHero: 'Hero (stretched panel)',
    legendNormal: 'Regular action panels',
    footerText: 'Comic Grid Studio — learn CSS Grid by assembling a comic, level by level.',
    successBurst: 'LEVEL\nCLEARED!',
    successTitle: 'KABOOM!\nGrid aligned!',
    successBody: "Panels snapped in perfectly. Here's this level's CSS:",
    closeBtn: 'Close',
    nextLevelBtn: 'Next level ▶',
    successFeedback: 'Yes! Grid assembled correctly.',
    errorFeedbackPrefix: 'Not quite: ',
    helpBurst: 'READ\nTHIS!',
    helpTitle: 'How to play',
    helpSteps: [
      'The "Task" card on the left names the CSS Grid concept and what to build this level.',
      'Only the controls (sliders/dropdowns) needed for this lesson show up below it — the rest stay hidden so you don’t get lost.',
      'Turn the controls — the code in the black box and the comic on the right update live.',
      'Compare the result on the right with the task and click "Run action!". Correct — the comic snaps together, we show the final CSS and unlock the next level. Wrong — the panels shake and we hint what to fix.',
      'The "Level" dropdown up top lets you jump between levels any time.'
    ],
    helpTopics:
      'Topics: display:grid, fr / repeat(), gap, auto-fit vs auto-fill, minmax(), grid-column/row span, negative line indexes, grid-auto-flow: dense, grid-auto-rows (implicit grid), place-items, place-content, place-self, grid-template-areas.',
    helpCloseBtn: "Got it, let's go!",
    levelSelectLabel: 'Level select',
    levelWord: 'Level',
    languageLabel: 'Language',
    areaComment: 'plus sidebar / main / footer for the rest'
  },
  options: {
    fitFixed: 'fixed columns (1fr)',
    fitPx: 'fixed columns (100px)',
    fitAutoFit: 'auto-fit',
    fitAutoFill: 'auto-fill',
    autoFlowRow: 'row (default)',
    autoFlowDense: 'dense (fill holes)',
    heroToLastLine: 'to line -1',
    areaHoly: 'header on top / sidebar left / main / footer bottom',
    areaStack: 'everything stacked (header/sidebar/main/footer)',
    areaRight: 'header on top / sidebar on the RIGHT / main / footer bottom'
  },
  hints: {
    fixed: 'Fixed columns (repeat(N, 1fr)) — predictable layout, flexibly divides the available space.',
    px: "Columns in px don't stretch with the container — leftover space is what place-content is for.",
    'auto-fit': 'auto-fit collapses empty columns to zero width — panels stretch to fill the page.',
    'auto-fill': "auto-fill keeps empty column 'slots' alive, even without panels inside."
  },
  panelTags: ['BOOM!', 'Chase!', '"Stop!"', 'Jump', 'Blast', 'Finale', 'Bonus', 'Credits'],
  levels: [
    {
      concept: 'display: grid + repeat()/fr',
      goal: "Build 3 equal columns. Pick \"fixed columns (1fr)\" and repeat(3, ...) — this is the base of grid-template-columns.",
      hint: 'You need "fixed columns (1fr)" mode and repeat(3, ...).'
    },
    {
      concept: 'gap',
      goal: "Panels are stuck together! Set gap to about 24px so there's a comic-style white gutter between frames.",
      hint: 'Move the gap slider closer to 24px.'
    },
    {
      concept: 'auto-fit + minmax()',
      goal: 'Make the grid fluid: auto-fit with minmax(140px, 1fr). Empty columns collapse and panels stretch to fill the width.',
      hint: 'auto-fit mode, minmax 140px.'
    },
    {
      concept: 'auto-fill vs auto-fit',
      goal: "Now try auto-fill with minmax(140px, 1fr) — compare with the previous level: empty 'slots' stay instead of stretching panels.",
      hint: 'auto-fill mode, minmax 140px.'
    },
    {
      concept: 'grid-column: span',
      goal: 'The hero panel should stand out! Stretch it across 2 columns: grid-column: span 2.',
      hint: "Set the hero's span-col to 2."
    },
    {
      concept: 'grid-row: span',
      goal: 'The explosion needs a tall frame! Stretch the hero across 2 rows: grid-row: span 2.',
      hint: "Set the hero's span-row to 2."
    },
    {
      concept: 'span col + row together',
      goal: 'Build a big "hero panel": span 3 columns and span 2 rows at the same time.',
      hint: 'Hero: span-col 3 and span-row 2.'
    },
    {
      concept: 'negative line indexes',
      goal: 'Stretch the hero all the way to the page edge using a negative line index: grid-column: span 2 / -1.',
      hint: "Pick 'to line -1' for the hero (or the line -1 button above the grid)."
    },
    {
      concept: 'grid-auto-flow: dense',
      goal: "The hero takes 2 columns and 2 rows — that leaves a 'hole' next to it (auto-flow: row just skips occupied space). Turn on grid-auto-flow: dense so the next panels fill the hole.",
      hint: 'Pick grid-auto-flow: dense.'
    },
    {
      concept: 'grid-auto-rows (implicit grid)',
      goal: 'More frames got added — they don’t fit the defined rows and create IMPLICIT rows. Set grid-auto-rows: 120px so the new rows share the same height.',
      hint: 'Pick grid-auto-rows: 120px.'
    },
    {
      concept: 'place-items (align/justify-items)',
      goal: "By default panels stretch to fill their cell (stretch). Set place-items: start to see each panel's real size inside its cell.",
      hint: 'Pick place-items: start.'
    },
    {
      concept: 'place-content (align/justify-content)',
      goal: "Fixed 100px columns don't fill the whole page — there's leftover space. Set place-content: center so the whole grid sits centered on the page.",
      hint: 'Pick place-content: center.'
    },
    {
      concept: 'place-self (single element only)',
      goal: 'All panels have place-items: start (not stretched). Make the hero stand out from the crowd: give it place-self: center — only the hero centers itself in its cell.',
      hint: 'Pick place-self: center.'
    },
    {
      concept: 'grid-template-areas',
      goal: 'Build a classic page layout: header on top full width, sidebar on the LEFT, main in the center, footer on the bottom full width — using named areas.',
      hint: "Pick the first option: 'header on top / sidebar left / main / footer bottom'."
    },
    {
      concept: 'final splash page: everything together',
      goal: 'Build the final page: auto-fit, minmax(200px, 1fr), gap 20px, hero spans 2 columns and 2 rows — a full splash panel!',
      hint: 'auto-fit, minmax 200px, gap ~20px, hero span-col 2 and span-row 2.'
    }
  ]
};
