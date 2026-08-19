import type { Translation } from '../types';

export const de: Translation = {
  seo: {
    title: 'Comic Grid Studio — CSS Grid lernen durch Comic-Bau',
    description:
      'Lerne CSS Grid beim Layouten von Comic-Panels: fr-Einheiten, auto-fit vs auto-fill, minmax(), grid-template-areas, subgrid und mehr — 18 praktische Levels.'
  },
  ui: {
    appTitle: 'Comic Grid Studio',
    helpBtn: '? Spielanleitung',
    runBtn: '▶ Aktion starten!',
    workspaceHeading: 'Code-Werkstatt',
    previewHeading: 'Comicseite',
    goalLabel: 'Aufgabe',
    gapControlLabel: 'Gap (Panel-Abstand)',
    fitControlLabel: 'Spaltenmodus / Anzahl',
    sizeControlLabel: 'minmax() Spurgröße',
    heroControlLabel: 'Hero-Panel: span',
    autoflowControlLabel: 'grid-auto-flow',
    autorowsControlLabel: 'grid-auto-rows (implizite Zeilen)',
    placeitemsControlLabel: 'place-items (align+justify-items)',
    placecontentControlLabel: 'place-content (align+justify-content)',
    placeselfControlLabel: 'place-self (nur Hero)',
    areasControlLabel: 'grid-template-areas Layout',
    justifyselfControlLabel: 'justify-self (horizontal)',
    alignselfControlLabel: 'align-self (vertikal)',
    orderControlLabel: 'order (Verfolgungs-Panel)',
    subgridControlLabel: 'inneres grid-template-columns des Hero',
    captainSays: 'Captain Kaskade sagt:',
    defaultHint: 'Bediene die Regler oben — Code und Vorschau rechts aktualisieren sich live.',
    toggleLines: 'Rasterlinien',
    toggleNeg1: 'line -1',
    toggleNeg2: 'line -2',
    legendHero: 'Hero (gedehntes Panel)',
    legendNormal: 'Normale Action-Panels',
    footerText: 'Comic Grid Studio — lerne CSS Grid, indem du Level für Level einen Comic zusammenbaust.',
    footerCreatedBy: 'Erstellt von',
    footerOpenSource: 'Open Source auf GitHub',
    successBurst: 'LEVEL\nGESCHAFFT!',
    successTitle: 'KABUMM!\nRaster ausgerichtet!',
    successBody: 'Die Panels sitzen perfekt. Hier ist das CSS dieses Levels:',
    closeBtn: 'Schließen',
    nextLevelBtn: 'Nächstes Level ▶',
    successFeedback: 'Ja! Das Raster ist korrekt aufgebaut.',
    errorFeedbackPrefix: 'Noch nicht ganz: ',
    helpBurst: 'LIES\nDAS!',
    helpTitle: 'Spielanleitung',
    helpSteps: [
      'Die "Aufgabe"-Karte links nennt das CSS-Grid-Konzept und was in diesem Level zu bauen ist.',
      'Darunter erscheinen NUR die Regler (Slider/Dropdowns), die für diese Lektion nötig sind — der Rest bleibt versteckt, damit du nicht durcheinanderkommst.',
      'Bediene die Regler — der Code im schwarzen Kasten und der Comic rechts aktualisieren sich live.',
      'Vergleiche das Ergebnis rechts mit der Aufgabe und klicke auf "Aktion starten!". Richtig — der Comic fügt sich zusammen, wir zeigen das finale CSS und schalten das nächste Level frei. Falsch — die Panels wackeln und wir geben einen Tipp.',
      'Das "Level"-Dropdown oben lässt dich jederzeit zwischen Levels springen.'
    ],
    helpTopics:
      'Themen: display:grid, fr / repeat(), gap, auto-fit vs auto-fill, minmax(), grid-column/row span, negative line-Indizes, grid-auto-flow: dense, grid-auto-rows (implizites Grid), place-items, place-content, place-self, grid-template-areas, justify-self / align-self, order, subgrid. Nicht abgedeckt: manuelle @media-Breakpoints (auto-fit/minmax deckt die meisten dieser Fälle ab) und die grid-template-Kurzschreibweise (kombiniert nur Eigenschaften, die du schon kennst).',
    helpCloseBtn: "Verstanden, los geht's!",
    levelSelectLabel: 'Levelauswahl',
    levelWord: 'Level',
    languageLabel: 'Sprache',
    areaComment: 'plus sidebar / main / footer für den Rest',
    mdnLinkLabel: 'Auf MDN lesen'
  },
  options: {
    fitFixed: 'feste Spalten (1fr)',
    fitPx: 'feste Spalten (100px)',
    fitAutoFit: 'auto-fit',
    fitAutoFill: 'auto-fill',
    autoFlowRow: 'row (Standard)',
    autoFlowDense: 'dense (Lücken füllen)',
    heroToLastLine: 'bis line -1',
    areaHoly: 'Header oben / Sidebar links / Main / Footer unten',
    areaStack: 'alles gestapelt (Header/Sidebar/Main/Footer)',
    areaRight: 'Header oben / Sidebar RECHTS / Main / Footer unten',
    subgridOwn: 'eigene Spalten (repeat(2, 1fr))',
    subgridSubgrid: 'subgrid (Spuren des Elternelements erben)'
  },
  hints: {
    fixed: 'Feste Spalten (repeat(N, 1fr)) — vorhersehbares Layout, teilt den verfügbaren Platz flexibel auf.',
    px: 'Spalten in px passen sich nicht dem Container an — der Rest ist genau das, wofür place-content da ist.',
    'auto-fit': 'auto-fit kollabiert leere Spalten auf null — Panels dehnen sich auf die volle Seitenbreite aus.',
    'auto-fill': "auto-fill hält leere Spalten-'Slots' am Leben, auch ohne Panels darin."
  },
  panelTags: ['BUMM!', 'Verfolgung!', '"Halt!"', 'Sprung', 'Explosion', 'Finale', 'Bonus', 'Abspann'],
  levels: [
    {
      concept: 'display: grid + repeat()/fr',
      goal: 'Baue 3 gleich breite Spalten. Wähle "feste Spalten (1fr)" und repeat(3, ...) — das ist die Basis von grid-template-columns.',
      hint: 'Du brauchst den Modus "feste Spalten (1fr)" und repeat(3, ...).'
    },
    {
      concept: 'gap',
      goal: 'Die Panels kleben aneinander! Setze gap auf etwa 24px, damit zwischen den Panels ein comictypischer weißer Rinnstein entsteht.',
      hint: 'Schiebe den gap-Regler näher an 24px.'
    },
    {
      concept: 'auto-fit + minmax()',
      goal: 'Mach das Raster flüssig: auto-fit mit minmax(140px, 1fr). Leere Spalten kollabieren, Panels dehnen sich auf die volle Breite.',
      hint: 'Modus auto-fit, minmax 140px.'
    },
    {
      concept: 'auto-fill vs auto-fit',
      goal: "Probier jetzt auto-fill mit minmax(140px, 1fr) — vergleiche mit dem vorigen Level: leere 'Slots' bleiben, statt die Panels zu dehnen.",
      hint: 'Modus auto-fill, minmax 140px.'
    },
    {
      concept: 'grid-column: span',
      goal: 'Das Hero-Panel soll herausstechen! Dehne es über 2 Spalten: grid-column: span 2.',
      hint: 'Setze beim Hero span-col auf 2.'
    },
    {
      concept: 'grid-row: span',
      goal: 'Die Explosion braucht ein hohes Panel! Dehne den Hero über 2 Zeilen: grid-row: span 2.',
      hint: 'Setze beim Hero span-row auf 2.'
    },
    {
      concept: 'span col + row zusammen',
      goal: 'Baue ein großes "Hero-Panel": span 3 Spalten und span 2 Zeilen gleichzeitig.',
      hint: 'Hero: span-col 3 und span-row 2.'
    },
    {
      concept: 'negative line-Indizes',
      goal: 'Dehne den Hero bis zum Seitenrand mit einem negativen Line-Index: grid-column: span 2 / -1.',
      hint: 'Wähle beim Hero "bis line -1" (oder den line -1-Button über dem Raster).'
    },
    {
      concept: 'grid-auto-flow: dense',
      goal: "Der Hero nimmt 2 Spalten und 2 Zeilen ein — dadurch bleibt daneben ein 'Loch' (auto-flow: row überspringt einfach belegten Platz). Aktiviere grid-auto-flow: dense, damit die nächsten Panels das Loch füllen.",
      hint: 'Wähle grid-auto-flow: dense.'
    },
    {
      concept: 'grid-auto-rows (implizites Grid)',
      goal: 'Es wurden weitere Panels hinzugefügt — sie passen nicht in die definierten Zeilen und erzeugen IMPLIZITE Zeilen. Setze grid-auto-rows: 120px, damit die neuen Zeilen gleich hoch sind.',
      hint: 'Wähle grid-auto-rows: 120px.'
    },
    {
      concept: 'place-items (align/justify-items)',
      goal: 'Standardmäßig dehnen sich Panels über ihre ganze Zelle (stretch). Setze place-items: start, um die echte Größe jedes Panels in seiner Zelle zu sehen.',
      hint: 'Wähle place-items: start.'
    },
    {
      concept: 'place-content (align/justify-content)',
      goal: 'Feste 100px-Spalten füllen nicht die ganze Seite — es bleibt Platz übrig. Setze place-content: center, damit das ganze Raster mittig auf der Seite sitzt.',
      hint: 'Wähle place-content: center.'
    },
    {
      concept: 'place-self (nur ein Element)',
      goal: 'Alle Panels haben place-items: start (nicht gedehnt). Hebe den Hero aus der Menge hervor: gib ihm place-self: center — nur der Hero zentriert sich in seiner Zelle.',
      hint: 'Wähle place-self: center.'
    },
    {
      concept: 'grid-template-areas',
      goal: 'Baue ein klassisches Seitenlayout: Header oben über die volle Breite, Sidebar LINKS, Main in der Mitte, Footer unten über die volle Breite — mit benannten Bereichen.',
      hint: 'Wähle die erste Option: "Header oben / Sidebar links / Main / Footer unten".'
    },
    {
      concept: 'justify-self / align-self',
      goal: 'place-self ist die Kurzform für align-self (vertikal) + justify-self (horizontal). Setze sie beim Hero unabhängig voneinander: justify-self: end und align-self: start.',
      hint: 'Setze justify-self auf end und align-self auf start.'
    },
    {
      concept: 'order',
      goal: 'Das Verfolgungs-Panel steht im HTML an zweiter Stelle, soll aber visuell vor dem Hero erscheinen. Gib ihm order: -1 — das DOM bleibt unverändert, nur die visuelle Reihenfolge ändert sich.',
      hint: 'Setze beim Verfolgungs-Panel order auf -1.'
    },
    {
      concept: 'subgrid',
      goal: 'Der Hero hat 2 innere Blöcke, die genau mit den echten (ungleichen) Spaltenlinien der Seite übereinstimmen sollen. Setze grid-template-columns des Hero auf subgrid, damit seine Blöcke die echten Spurgrößen des Elternelements erben, statt eigene gleiche Hälften zu bilden.',
      hint: 'Schalte die inneren Spalten des Hero auf subgrid um.'
    },
    {
      concept: 'finale Splash-Seite: alles zusammen',
      goal: 'Baue die finale Seite: auto-fit, minmax(200px, 1fr), gap 20px, Hero über 2 Spalten und 2 Zeilen — ein vollwertiges Splash-Panel!',
      hint: 'auto-fit, minmax 200px, gap ~20px, Hero span-col 2 und span-row 2.'
    }
  ]
};
