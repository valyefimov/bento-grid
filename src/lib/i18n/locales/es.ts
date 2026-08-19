import type { Translation } from '../types';

export const es: Translation = {
  seo: {
    title: 'Comic Grid Studio — aprende CSS Grid creando un cómic',
    description:
      'Aprende CSS Grid maquetando viñetas de cómic: unidades fr, auto-fit vs auto-fill, minmax(), grid-template-areas, subgrid y más, en 18 niveles prácticos.'
  },
  ui: {
    appTitle: 'Comic Grid Studio',
    helpBtn: '? Cómo jugar',
    runBtn: '▶ ¡Ejecutar acción!',
    workspaceHeading: 'Taller de código',
    previewHeading: 'Página del cómic',
    goalLabel: 'Tarea',
    gapControlLabel: 'Gap (espacio entre paneles)',
    fitControlLabel: 'Modo de columnas / cantidad',
    sizeControlLabel: 'Tamaño de pista minmax()',
    heroControlLabel: 'Panel héroe: span',
    autoflowControlLabel: 'grid-auto-flow',
    autorowsControlLabel: 'grid-auto-rows (filas implícitas)',
    placeitemsControlLabel: 'place-items (align+justify-items)',
    placecontentControlLabel: 'place-content (align+justify-content)',
    placeselfControlLabel: 'place-self (solo el héroe)',
    areasControlLabel: 'diseño grid-template-areas',
    justifyselfControlLabel: 'justify-self (horizontal)',
    alignselfControlLabel: 'align-self (vertical)',
    orderControlLabel: 'order (panel de persecución)',
    subgridControlLabel: 'grid-template-columns interno del héroe',
    captainSays: 'El Capitán Cascada dice:',
    defaultHint: 'Mueve los controles de arriba — el código y la vista previa de la derecha se actualizan en vivo.',
    toggleLines: 'Líneas de la cuadrícula',
    toggleNeg1: 'line -1',
    toggleNeg2: 'line -2',
    legendHero: 'Héroe (panel estirado)',
    legendNormal: 'Paneles de acción normales',
    footerText: 'Comic Grid Studio — aprende CSS Grid armando un cómic, nivel a nivel.',
    footerCreatedBy: 'Creado por',
    footerOpenSource: 'Código abierto en GitHub',
    successBurst: '¡NIVEL\nSUPERADO!',
    successTitle: '¡KABOOM!\n¡Cuadrícula alineada!',
    successBody: 'Los paneles encajaron perfectamente. Aquí está el CSS de este nivel:',
    closeBtn: 'Cerrar',
    nextLevelBtn: 'Siguiente nivel ▶',
    successFeedback: '¡Sí! La cuadrícula está bien armada.',
    errorFeedbackPrefix: 'Todavía no: ',
    helpBurst: '¡LEE\nESTO!',
    helpTitle: 'Cómo jugar',
    helpSteps: [
      'La tarjeta "Tarea" de la izquierda indica el concepto de CSS Grid y qué construir en este nivel.',
      'Debajo aparecen SOLO los controles (sliders/menús) que necesita esta lección — el resto queda oculto para no confundirte.',
      'Mueve los controles — el código en el bloque negro y el cómic de la derecha se actualizan en vivo.',
      'Compara el resultado de la derecha con la tarea y pulsa "¡Ejecutar acción!". Correcto — el cómic encaja, mostramos el CSS final y se desbloquea el siguiente nivel. Incorrecto — los paneles tiemblan y te damos una pista.',
      'El menú "Nivel" de arriba te deja saltar entre niveles en cualquier momento.'
    ],
    helpTopics:
      'Temas: display:grid, fr / repeat(), gap, auto-fit vs auto-fill, minmax(), grid-column/row span, índices de línea negativos, grid-auto-flow: dense, grid-auto-rows (cuadrícula implícita), place-items, place-content, place-self, grid-template-areas, justify-self / align-self, order, subgrid. No cubierto: breakpoints manuales con @media (auto-fit/minmax cubre la mayoría de esos casos) y el atajo grid-template (solo combina propiedades que ya conoces).',
    helpCloseBtn: '¡Entendido, vamos!',
    levelSelectLabel: 'Selección de nivel',
    levelWord: 'Nivel',
    languageLabel: 'Idioma',
    areaComment: 'y sidebar / main / footer en el resto',
    mdnLinkLabel: 'Leer en MDN'
  },
  options: {
    fitFixed: 'columnas fijas (1fr)',
    fitPx: 'columnas fijas (100px)',
    fitAutoFit: 'auto-fit',
    fitAutoFill: 'auto-fill',
    autoFlowRow: 'row (por defecto)',
    autoFlowDense: 'dense (rellenar huecos)',
    heroToLastLine: 'hasta line -1',
    areaHoly: 'header arriba / sidebar a la izquierda / main / footer abajo',
    areaStack: 'todo apilado (header/sidebar/main/footer)',
    areaRight: 'header arriba / sidebar a la DERECHA / main / footer abajo',
    subgridOwn: 'columnas propias (repeat(2, 1fr))',
    subgridSubgrid: 'subgrid (heredar las pistas del padre)'
  },
  hints: {
    fixed: 'Columnas fijas (repeat(N, 1fr)) — diseño predecible, divide el espacio disponible de forma flexible.',
    px: 'Las columnas en px no se estiran con el contenedor — el espacio sobrante es justo para lo que sirve place-content.',
    'auto-fit': 'auto-fit colapsa las columnas vacías a cero — los paneles se estiran para llenar el ancho de la página.',
    'auto-fill': "auto-fill mantiene vivos los 'huecos' de columna vacíos, incluso sin paneles dentro."
  },
  panelTags: ['¡BUM!', '¡Persecución!', '"¡Alto!"', 'Salto', 'Explosión', 'Final', 'Bono', 'Créditos'],
  levels: [
    {
      concept: 'display: grid + repeat()/fr',
      goal: 'Crea 3 columnas iguales. Elige "columnas fijas (1fr)" y repeat(3, ...) — es la base de grid-template-columns.',
      hint: 'Necesitas el modo "columnas fijas (1fr)" y repeat(3, ...).'
    },
    {
      concept: 'gap',
      goal: '¡Los paneles están pegados! Pon gap en unos 24px para tener ese margen blanco típico de cómic entre viñetas.',
      hint: 'Mueve el slider de gap más cerca de 24px.'
    },
    {
      concept: 'auto-fit + minmax()',
      goal: 'Haz la cuadrícula flexible: auto-fit con minmax(140px, 1fr). Las columnas vacías colapsan y los paneles se estiran para llenar el ancho.',
      hint: 'Modo auto-fit, minmax 140px.'
    },
    {
      concept: 'auto-fill vs auto-fit',
      goal: 'Ahora prueba auto-fill con minmax(140px, 1fr) — compáralo con el nivel anterior: quedan "huecos" vacíos en vez de estirar los paneles.',
      hint: 'Modo auto-fill, minmax 140px.'
    },
    {
      concept: 'grid-column: span',
      goal: '¡El panel héroe debe destacar! Estíralo a lo largo de 2 columnas: grid-column: span 2.',
      hint: 'Pon el span-col del héroe en 2.'
    },
    {
      concept: 'grid-row: span',
      goal: '¡La explosión necesita una viñeta alta! Estira al héroe a lo largo de 2 filas: grid-row: span 2.',
      hint: 'Pon el span-row del héroe en 2.'
    },
    {
      concept: 'span col + row juntos',
      goal: 'Crea un "panel héroe" grande: span 3 columnas y span 2 filas a la vez.',
      hint: 'Héroe: span-col 3 y span-row 2.'
    },
    {
      concept: 'índices de línea negativos',
      goal: 'Estira al héroe hasta el borde de la página usando un índice de línea negativo: grid-column: span 2 / -1.',
      hint: 'Elige "hasta line -1" para el héroe (o el botón line -1 sobre la cuadrícula).'
    },
    {
      concept: 'grid-auto-flow: dense',
      goal: 'El héroe ocupa 2 columnas y 2 filas — eso deja un "hueco" a su lado (auto-flow: row simplemente salta el espacio ocupado). Activa grid-auto-flow: dense para que los siguientes paneles rellenen el hueco.',
      hint: 'Elige grid-auto-flow: dense.'
    },
    {
      concept: 'grid-auto-rows (cuadrícula implícita)',
      goal: 'Se añadieron más viñetas — no caben en las filas definidas y crean filas IMPLÍCITAS. Pon grid-auto-rows: 120px para que las filas nuevas tengan la misma altura.',
      hint: 'Elige grid-auto-rows: 120px.'
    },
    {
      concept: 'place-items (align/justify-items)',
      goal: 'Por defecto los paneles se estiran para llenar su celda (stretch). Pon place-items: start para ver el tamaño real de cada panel dentro de su celda.',
      hint: 'Elige place-items: start.'
    },
    {
      concept: 'place-content (align/justify-content)',
      goal: 'Las columnas fijas de 100px no llenan toda la página — sobra espacio. Pon place-content: center para que toda la cuadrícula quede centrada en la página.',
      hint: 'Elige place-content: center.'
    },
    {
      concept: 'place-self (un solo elemento)',
      goal: 'Todos los paneles tienen place-items: start (sin estirar). Haz que el héroe destaque entre la multitud: dale place-self: center — solo el héroe se centra en su celda.',
      hint: 'Elige place-self: center.'
    },
    {
      concept: 'grid-template-areas',
      goal: 'Crea un diseño de página clásico: header arriba a todo el ancho, sidebar a la IZQUIERDA, main en el centro, footer abajo a todo el ancho — usando áreas con nombre.',
      hint: 'Elige la primera opción: "header arriba / sidebar a la izquierda / main / footer abajo".'
    },
    {
      concept: 'justify-self / align-self',
      goal: 'place-self es la forma corta de align-self (vertical) + justify-self (horizontal). Configúralos por separado en el héroe: justify-self: end y align-self: start.',
      hint: 'Pon justify-self en end y align-self en start.'
    },
    {
      concept: 'order',
      goal: 'El panel de Persecución es el 2º en el HTML pero visualmente debe saltar delante del héroe. Dale order: -1 — el DOM no cambia, solo el orden visual.',
      hint: 'Pon order: -1 en el panel de Persecución.'
    },
    {
      concept: 'subgrid',
      goal: 'El héroe tiene 2 bloques internos que deben alinearse exactamente con las líneas de columna reales (desiguales) de la página. Pon el grid-template-columns del héroe en subgrid para que sus bloques hereden los tamaños reales de las pistas del padre en vez de inventar sus propias mitades iguales.',
      hint: 'Cambia las columnas internas del héroe a subgrid.'
    },
    {
      concept: 'página final: todo junto',
      goal: '¡Crea la página final: auto-fit, minmax(200px, 1fr), gap 20px, el héroe abarca 2 columnas y 2 filas — un panel splash completo!',
      hint: 'auto-fit, minmax 200px, gap ~20px, héroe span-col 2 y span-row 2.'
    }
  ]
};
