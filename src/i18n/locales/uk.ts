import type { Translation } from '../types';

export const uk: Translation = {
  ui: {
    appTitle: 'Comic Grid Studio',
    helpBtn: '? Як грати',
    runBtn: '▶ Запустити екшн!',
    workspaceHeading: 'Майстерня коду',
    previewHeading: 'Сторінка коміксу',
    goalLabel: 'Завдання',
    gapControlLabel: 'Gap (проміжок панелей)',
    fitControlLabel: 'Режим колонок / кількість',
    sizeControlLabel: 'minmax() розмір треку',
    heroControlLabel: 'Герой-панель: span',
    autoflowControlLabel: 'grid-auto-flow',
    autorowsControlLabel: 'grid-auto-rows (неявні рядки)',
    placeitemsControlLabel: 'place-items (align+justify-items)',
    placecontentControlLabel: 'place-content (align+justify-content)',
    placeselfControlLabel: 'place-self (тільки герой)',
    areasControlLabel: 'grid-template-areas розкладка',
    captainSays: 'Капітан Каскад каже:',
    defaultHint: 'Крути контроли вище — код і прев’ю справа оновлюються наживо.',
    toggleLines: 'Лінії сітки',
    toggleNeg1: 'line -1',
    toggleNeg2: 'line -2',
    legendHero: 'Герой (розтягнута панель)',
    legendNormal: 'Звичайні панелі дії',
    footerText: 'Comic Grid Studio — вчи CSS Grid, збираючи комікс, рівень за рівнем.',
    successBurst: 'РІВЕНЬ\nПРОЙДЕНО!',
    successTitle: 'КАБУМ!\nСітку вирівняно!',
    successBody: 'Панелі лягли ідеально. Ось твій CSS цього рівня:',
    closeBtn: 'Закрити',
    nextLevelBtn: 'Наступний рівень ▶',
    successFeedback: 'Є! Сітку зібрано правильно.',
    errorFeedbackPrefix: 'Поки не те: ',
    helpBurst: 'ЧИТАЙ\nСЮДИ!',
    helpTitle: 'Як грати',
    helpSteps: [
      'Зліва картка "Завдання" — там назва теми CSS Grid і що потрібно зібрати на цьому рівні.',
      'Під нею з’являються ТІЛЬКИ ті контроли (слайдер/дропдауни), які потрібні для цього уроку — решта прихована, щоб не плутатись.',
      'Крути контроли — код у чорному блоці й комікс справа оновлюються наживо, в реальному часі.',
      'Звір результат справа із завданням і тисни "Запустити екшн!". Правильно — комікс склеїться, покажемо фінальний CSS і відкриємо наступний рівень. Неправильно — панелі трусоне і підкажемо що виправити.',
      'Дропдаун "Рівень" зверху — можна стрибати між рівнями в будь-який момент.'
    ],
    helpTopics:
      'Теми: display:grid, fr / repeat(), gap, auto-fit vs auto-fill, minmax(), grid-column/row span, від’ємні line-індекси, grid-auto-flow: dense, grid-auto-rows (неявна сітка), place-items, place-content, place-self, grid-template-areas.',
    helpCloseBtn: 'Зрозуміло, поїхали!',
    levelSelectLabel: 'Вибір рівня',
    levelWord: 'Рівень',
    languageLabel: 'Мова',
    areaComment: 'і sidebar / main / footer у решти'
  },
  options: {
    fitFixed: 'фікс. колонки (1fr)',
    fitPx: 'фікс. колонки (100px)',
    fitAutoFit: 'auto-fit',
    fitAutoFill: 'auto-fill',
    autoFlowRow: 'row (за замовчуванням)',
    autoFlowDense: 'dense (заповнити дірки)',
    heroToLastLine: 'до line -1',
    areaHoly: 'header зверху / sidebar зліва / main / footer знизу',
    areaStack: 'все в один стовпчик (header/sidebar/main/footer)',
    areaRight: 'header зверху / sidebar СПРАВА / main / footer знизу'
  },
  hints: {
    fixed: 'Фіксовані колонки (repeat(N, 1fr)) — передбачувана розкладка, гнучко ділить доступний простір.',
    px: 'Колонки в px не розтягуються під контейнер — вільний залишок якраз для place-content.',
    'auto-fit': 'auto-fit стискає порожні колонки до нуля — панелі розтягуються на всю ширину сторінки.',
    'auto-fill': "auto-fill тримає порожні 'слоти' колонок живими, навіть без панелей всередині."
  },
  panelTags: ['БАБАХ!', 'Погоня!', '"Стій!"', 'Стрибок', 'Вибух', 'Фінал', 'Бонус', 'Титри'],
  levels: [
    {
      concept: 'display: grid + repeat()/fr',
      goal: 'Зібери 3 рівні колонки. Обери "фікс. колонки (1fr)" і repeat(3, ...) — це база grid-template-columns.',
      hint: 'Потрібен режим "фікс. колонки (1fr)" і repeat(3, ...).'
    },
    {
      concept: 'gap',
      goal: 'Панелі злиплися! Постав gap приблизно 24px, щоб між кадрами коміксу було "біле поле", як у справжньому коміксі.',
      hint: 'Посунь повзунок gap ближче до 24px.'
    },
    {
      concept: 'auto-fit + minmax()',
      goal: 'Зроби сітку гумовою: auto-fit з minmax(140px, 1fr). Порожні колонки схлопнуться, а панелі розтягнуться на всю ширину.',
      hint: 'Режим auto-fit, minmax 140px.'
    },
    {
      concept: 'auto-fill vs auto-fit',
      goal: 'Тепер спробуй auto-fill з minmax(140px, 1fr) — порівняй з попереднім рівнем: порожні "слоти" лишаються замість розтягування панелей.',
      hint: 'Режим auto-fill, minmax 140px.'
    },
    {
      concept: 'grid-column: span',
      goal: 'Герой-панель має виділятися! Розтягни її на 2 колонки: grid-column: span 2.',
      hint: 'Обери у героя span-col: 2.'
    },
    {
      concept: 'grid-row: span',
      goal: 'Вибух має бути високим кадром! Розтягни героя на 2 рядки: grid-row: span 2.',
      hint: 'Обери у героя span-row: 2.'
    },
    {
      concept: 'span col + row разом',
      goal: 'Збери великий "hero panel": span 3 по колонках і span 2 по рядках одночасно.',
      hint: 'Герой: span-col 3 і span-row 2.'
    },
    {
      concept: 'від’ємні line-індекси',
      goal: 'Розтягни героя аж до самого краю сторінки через від’ємний індекс лінії: grid-column: span 2 / -1.',
      hint: 'Обери у героя "до line -1" (або кнопку line -1 над сіткою).'
    },
    {
      concept: 'grid-auto-flow: dense',
      goal: 'Герой зайняв 2 колонки і 2 рядки — через це поруч з ним лишилася "дірка" (auto-flow: row просто пропускає зайняте місце). Увімкни grid-auto-flow: dense, щоб наступні панелі заповнили дірку.',
      hint: 'Обери grid-auto-flow: dense.'
    },
    {
      concept: 'grid-auto-rows (неявна сітка)',
      goal: 'Додали ще кадрів — вони не вміщаються в задані рядки і створюють НЕЯВНІ (implicit) рядки. Задай grid-auto-rows: 120px, щоб нові рядки мали однакову висоту.',
      hint: 'Обери grid-auto-rows: 120px.'
    },
    {
      concept: 'place-items (align/justify-items)',
      goal: 'За замовчуванням панелі розтягуються на всю комірку (stretch). Постав place-items: start, щоб побачити справжній розмір панелей всередині своїх комірок.',
      hint: 'Обери place-items: start.'
    },
    {
      concept: 'place-content (align/justify-content)',
      goal: 'Колонки фіксованої ширини (100px) не заповнюють всю сторінку — лишається вільне місце. Постав place-content: center, щоб уся сітка стала по центру сторінки.',
      hint: 'Обери place-content: center.'
    },
    {
      concept: 'place-self (тільки один елемент)',
      goal: 'У всіх панелей place-items: start (не розтягнуті). Видели героя з натовпу: постав йому place-self: center — тільки герой сам стане по центру своєї комірки.',
      hint: 'Обери place-self: center.'
    },
    {
      concept: 'grid-template-areas',
      goal: 'Збери класичну розкладку сторінки: header зверху на всю ширину, sidebar ЗЛІВА, main по центру, footer знизу на всю ширину — через іменовані області.',
      hint: 'Обери перший варіант: "header зверху / sidebar зліва / main / footer знизу".'
    },
    {
      concept: 'фінальний розворот: усе разом',
      goal: 'Збери фінальну сторінку: auto-fit, minmax(200px, 1fr), gap 20px, герой span 2 колонки і span 2 рядки — повноцінний спленш-кадр!',
      hint: 'auto-fit, minmax 200px, gap ~20px, героя span-col 2 і span-row 2.'
    }
  ]
};
