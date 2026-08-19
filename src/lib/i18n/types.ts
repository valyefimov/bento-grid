export type Locale = 'en' | 'ru' | 'uk' | 'de' | 'es';

export interface LevelContent {
  concept: string;
  goal: string;
  hint: string;
}

export interface Translation {
  seo: {
    title: string;
    description: string;
  };
  ui: {
    appTitle: string;
    helpBtn: string;
    runBtn: string;
    workspaceHeading: string;
    previewHeading: string;
    goalLabel: string;
    gapControlLabel: string;
    fitControlLabel: string;
    sizeControlLabel: string;
    heroControlLabel: string;
    autoflowControlLabel: string;
    autorowsControlLabel: string;
    placeitemsControlLabel: string;
    placecontentControlLabel: string;
    placeselfControlLabel: string;
    areasControlLabel: string;
    justifyselfControlLabel: string;
    alignselfControlLabel: string;
    orderControlLabel: string;
    subgridControlLabel: string;
    captainSays: string;
    defaultHint: string;
    toggleLines: string;
    toggleNeg1: string;
    toggleNeg2: string;
    legendHero: string;
    legendNormal: string;
    footerText: string;
    footerCreatedBy: string;
    footerOpenSource: string;
    successBurst: string;
    successTitle: string;
    successBody: string;
    closeBtn: string;
    nextLevelBtn: string;
    viewCertificateBtn: string;
    successFeedback: string;
    errorFeedbackPrefix: string;
    certificateBurst: string;
    certificateTitle: string;
    certificateBody: string;
    certificateSignature: string;
    certificateCloseBtn: string;
    helpBurst: string;
    helpTitle: string;
    helpSteps: string[];
    helpTopics: string;
    helpCloseBtn: string;
    levelSelectLabel: string;
    levelWord: string;
    languageLabel: string;
    areaComment: string;
    mdnLinkLabel: string;
  };
  options: {
    fitFixed: string;
    fitPx: string;
    fitAutoFit: string;
    fitAutoFill: string;
    autoFlowRow: string;
    autoFlowDense: string;
    heroToLastLine: string;
    areaHoly: string;
    areaStack: string;
    areaRight: string;
    subgridOwn: string;
    subgridSubgrid: string;
  };
  hints: {
    fixed: string;
    px: string;
    'auto-fit': string;
    'auto-fill': string;
  };
  panelTags: [string, string, string, string, string, string, string, string];
  levels: LevelContent[];
}
