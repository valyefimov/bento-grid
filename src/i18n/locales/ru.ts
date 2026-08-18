import type { Translation } from '../types';

export const ru: Translation = {
  ui: {
    appTitle: 'Comic Grid Studio',
    helpBtn: '? Как играть',
    runBtn: '▶ Запустить экшн!',
    workspaceHeading: 'Мастерская кода',
    previewHeading: 'Страница комикса',
    goalLabel: 'Задание',
    gapControlLabel: 'Gap (зазор панелей)',
    fitControlLabel: 'Режим колонок / кол-во',
    sizeControlLabel: 'minmax() размер трека',
    heroControlLabel: 'Герой-панель: span',
    autoflowControlLabel: 'grid-auto-flow',
    autorowsControlLabel: 'grid-auto-rows (неявные ряды)',
    placeitemsControlLabel: 'place-items (align+justify-items)',
    placecontentControlLabel: 'place-content (align+justify-content)',
    placeselfControlLabel: 'place-self (только герой)',
    areasControlLabel: 'grid-template-areas раскладка',
    captainSays: 'Капитан Каскад говорит:',
    defaultHint: 'Крути контролы выше — код и превью справа обновляются вживую.',
    toggleLines: 'Линии сетки',
    toggleNeg1: 'line -1',
    toggleNeg2: 'line -2',
    legendHero: 'Герой (растянутая панель)',
    legendNormal: 'Обычные панели действия',
    footerText: 'Comic Grid Studio — учи CSS Grid, собирая комикс, уровень за уровнем.',
    successBurst: 'УРОВЕНЬ\nПРОЙДЕН!',
    successTitle: 'КАБУМ!\nСетка выровнена!',
    successBody: 'Панели легли идеально. Вот твой CSS этого уровня:',
    closeBtn: 'Закрыть',
    nextLevelBtn: 'Следующий уровень ▶',
    successFeedback: 'Есть! Сетка собрана верно.',
    errorFeedbackPrefix: 'Пока не то: ',
    helpBurst: 'ЧИТАЙ\nСЮДА!',
    helpTitle: 'Как играть',
    helpSteps: [
      'Слева карточка "Задание" — там название CSS Grid темы и что нужно собрать на этом уровне.',
      'Под ней появляются ТОЛЬКО те контролы (слайдер/дропдауны), которые нужны для этого урока — остальные скрыты, чтобы не путаться.',
      'Крути контролы — код в чёрном блоке и комикс справа обновляются вживую, в реальном времени.',
      'Сверь результат справа с заданием и жми "Запустить экшн!". Верно — комикс склеится, покажем финальный CSS и откроем следующий уровень. Неверно — панели тряхнёт и подскажем что поправить.',
      'Дропдаун "Уровень" сверху — можно прыгать между уровнями в любой момент.'
    ],
    helpTopics:
      'Темы: display:grid, fr / repeat(), gap, auto-fit vs auto-fill, minmax(), grid-column/row span, отрицательные line-индексы, grid-auto-flow: dense, grid-auto-rows (неявная сетка), place-items, place-content, place-self, grid-template-areas.',
    helpCloseBtn: 'Понял, поехали!',
    levelSelectLabel: 'Выбор уровня',
    levelWord: 'Уровень',
    languageLabel: 'Язык',
    areaComment: 'и sidebar / main / footer у остальных'
  },
  options: {
    fitFixed: 'фикс. колонки (1fr)',
    fitPx: 'фикс. колонки (100px)',
    fitAutoFit: 'auto-fit',
    fitAutoFill: 'auto-fill',
    autoFlowRow: 'row (по умолчанию)',
    autoFlowDense: 'dense (заполнить дыры)',
    heroToLastLine: 'до line -1',
    areaHoly: 'header сверху / sidebar слева / main / footer снизу',
    areaStack: 'всё в один столбик (header/sidebar/main/footer)',
    areaRight: 'header сверху / sidebar СПРАВА / main / footer снизу'
  },
  hints: {
    fixed: 'Фиксированные колонки (repeat(N, 1fr)) — предсказуемая раскладка, гибко делит доступное место.',
    px: 'Колонки в px не тянутся под контейнер — свободный остаток как раз для place-content.',
    'auto-fit': 'auto-fit сжимает пустые колонки до нуля — панели тянутся на всю ширину страницы.',
    'auto-fill': 'auto-fill держит пустые "слоты" колонок живыми, даже без панелей внутри.'
  },
  panelTags: ['БАБАХ!', 'Погоня!', '"Стой!"', 'Прыжок', 'Взрыв', 'Финал', 'Бонус', 'Титры'],
  levels: [
    {
      concept: 'display: grid + repeat()/fr',
      goal: 'Собери 3 равные колонки. Выбери "фикс. колонки (1fr)" и repeat(3, ...) — это база grid-template-columns.',
      hint: 'Нужен режим "фикс. колонки (1fr)" и repeat(3, ...).'
    },
    {
      concept: 'gap',
      goal: 'Панели слиплись! Поставь gap примерно 24px, чтобы между кадрами комикса было "белое поле" как в настоящем комиксе.',
      hint: 'Подвинь слайдер gap ближе к 24px.'
    },
    {
      concept: 'auto-fit + minmax()',
      goal: 'Сделай сетку резиновой: auto-fit с minmax(140px, 1fr). Пустые колонки схлопнутся, а панели растянутся на всю ширину.',
      hint: 'Режим auto-fit, minmax 140px.'
    },
    {
      concept: 'auto-fill vs auto-fit',
      goal: 'Теперь попробуй auto-fill с minmax(140px, 1fr) — сравни с прошлым уровнем: пустые "слоты" остаются вместо растяжения панелей.',
      hint: 'Режим auto-fill, minmax 140px.'
    },
    {
      concept: 'grid-column: span',
      goal: 'Герой-панель должна выделяться! Растяни её на 2 колонки: grid-column: span 2.',
      hint: 'Выбери у героя span-col: 2.'
    },
    {
      concept: 'grid-row: span',
      goal: 'Взрыв должен быть высоким кадром! Растяни героя на 2 ряда: grid-row: span 2.',
      hint: 'Выбери у героя span-row: 2.'
    },
    {
      concept: 'span col + row вместе',
      goal: 'Собери большой "hero panel": span 3 по колонкам и span 2 по рядам одновременно.',
      hint: 'Герой: span-col 3 и span-row 2.'
    },
    {
      concept: 'отрицательные line-индексы',
      goal: 'Растяни героя до самого края страницы через отрицательный индекс линии: grid-column: span 2 / -1.',
      hint: 'Выбери у героя "до line -1" (или кнопку line -1 над сеткой).'
    },
    {
      concept: 'grid-auto-flow: dense',
      goal: 'Герой занял 2 колонки и 2 ряда — из-за этого рядом с ним осталась "дыра" (auto-flow: row просто пропускает занятое место). Включи grid-auto-flow: dense, чтобы следующие панели заполнили дыру.',
      hint: 'Выбери grid-auto-flow: dense.'
    },
    {
      concept: 'grid-auto-rows (неявная сетка)',
      goal: 'Добавили ещё кадры — они не помещаются в заданные ряды и создают НЕЯВНЫЕ (implicit) строки. Задай grid-auto-rows: 120px, чтобы новые ряды были одинаковой высоты.',
      hint: 'Выбери grid-auto-rows: 120px.'
    },
    {
      concept: 'place-items (align/justify-items)',
      goal: 'По умолчанию панели растягиваются на всю ячейку (stretch). Поставь place-items: start, чтобы увидеть настоящий размер панелей внутри своих ячеек.',
      hint: 'Выбери place-items: start.'
    },
    {
      concept: 'place-content (align/justify-content)',
      goal: 'Колонки фиксированной ширины (100px) не заполняют всю страницу — остаётся свободное место. Поставь place-content: center, чтобы вся сетка встала по центру страницы.',
      hint: 'Выбери place-content: center.'
    },
    {
      concept: 'place-self (только один элемент)',
      goal: 'У всех панелей place-items: start (не растянуты). Выдели героя из толпы: поставь ему place-self: center — только герой сам встанет по центру своей ячейки.',
      hint: 'Выбери place-self: center.'
    },
    {
      concept: 'grid-template-areas',
      goal: 'Собери классическую раскладку страницы: header сверху во всю ширину, sidebar СЛЕВА, main по центру, footer снизу во всю ширину — через именованные области.',
      hint: 'Выбери первый вариант: "header сверху / sidebar слева / main / footer снизу".'
    },
    {
      concept: 'финальный разворот: всё вместе',
      goal: 'Собери финальную страницу: auto-fit, minmax(200px, 1fr), gap 20px, герой span 2 колонки и span 2 ряда — полноценный сплэш-кадр!',
      hint: 'auto-fit, minmax 200px, gap ~20px, героя span-col 2 и span-row 2.'
    }
  ]
};
