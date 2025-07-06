type BtnPrefix = 'btn'

export const staticBtn: Record<`${BtnPrefix}-${string}` | BtnPrefix, string> = {
  // config
  'btn-default-variant': 'btn-solid',
  'btn-loading-icon': 'i-loading',

  // base
  btn: 'font-bold font-small-caps tracking-wide font-size-2xl btn-rectangle bg-transparent transition-colors leading-1.4285714285714286em shrink-0 gap-x-0.5714285714285714em rounded-md whitespace-nowrap inline-flex justify-center items-center btn-disabled font-medium',
  'btn-disabled': 'disabled:opacity-50 disabled:cursor-not-allowed',
  'btn-label': '',
  'btn-icon-label': 'size-1.1428571428571428em',
  'btn-leading': 'size-1.1428571428571428em',
  'btn-trailing': 'size-1.1428571428571428em',
  'btn-loading': 'animate-spin size-1.1428571428571428em',
  'btn-rectangle':
    'h-2.5714285714285716em px-1.1428571428571428em py-0.5714285714285714em',
  'btn-square': 'square-2.5714285714285716em p-0',

  // options
  'btn-block': 'w-full',
  'btn-reverse': 'flex-row-reverse',

  // variants with valid colors instead of theme variables
  'btn-solid-white':
    'bg-white text-gray-900 ring-1 ring-gray-200 ring-inset shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 hover:bg-gray-50',
  'btn-ghost-white':
    'text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 hover:bg-gray-50',
  'btn-outline-white':
    'text-gray-900 ring-1 ring-gray-200 ring-inset focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 hover:bg-gray-50',

  'btn-solid-gray':
    'bg-gray-50 text-gray-800 ring-1 ring-gray-200 ring-inset shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 hover:bg-gray-100',
  'btn-ghost-gray':
    'text-gray-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 hover:bg-gray-100',
  'btn-soft-gray':
    'text-gray-600 bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 hover:bg-gray-100',
  'btn-outline-gray':
    'text-gray-500 hover:text-gray-600 ring-1 ring-gray-200 ring-inset focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 hover:bg-gray-50',
  'btn-link-gray':
    'text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 hover:text-gray-900 hover:underline underline-offset-4',
  'btn-text-gray':
    'text-gray-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 hover:text-gray-900',

  'btn-solid-black':
    'bg-gray-900 text-white shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500',
  'btn-link-black':
    'text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 hover:underline underline-offset-4',
  'btn-text-black':
    'text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500',
  'btn-soft-black':
    'text-gray-900 bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 shadow-sm',

  'btn-text-muted':
    'text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 hover:text-blue-600',
  'btn-link-muted':
    'text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 hover:underline underline-offset-4',
  'btn-ghost-muted':
    'text-blue-600 hover:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 hover:bg-gray-50',

  'btn-soft-accent':
    'text-blue-600 bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
  'btn-text-accent':
    'text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
  'btn-link-accent':
    'text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 hover:underline underline-offset-4',
}

export const dynamicBtn: [RegExp, (params: RegExpExecArray) => string][] = [
  // Custom fg/bg button variants
  // Usage: btn-custom-fg-sandstone-bg-lime-500
  [
    /^btn-custom-fg-(\S+)-bg-(\S+)$/,
    ([, fg, bg]) =>
      `uppercase font-small-caps text-${fg} bg-${bg} hover:bg-${bg}/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-colors`,
  ],

  // Custom solid with hover variants
  // Usage: btn-solid-custom-fg-white-bg-sandstone-hover-madras
  [
    /^btn-solid-custom-fg-(\S+)-bg-(\S+)-hover-(\S+)$/,
    ([, fg, bg, hover = 20]) =>
      `text-${fg} bg-${bg} hover:bg-${hover} shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-colors`,
  ],

  // Custom outline with custom colors
  // Usage: btn-outline-custom-fg-sandstone-border-corn
  [
    /^btn-outline-custom-fg-(\S+)-bg-(\S+)$/,
    ([, fg, bg]) =>
      `text-${fg} border-solid border-2 border-${fg} bg-${bg} hover:bg-${bg}/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-colors`,
  ],

  // Custom soft with custom background and text
  // Usage: btn-soft-custom-fg-crowshead-bg-gumleaf
  [
    /^btn-soft-custom-fg-(\S+)-bg-(\S+)$/,
    ([, fg, bg]) =>
      `text-${fg} bg-${bg}/20 hover:bg-${bg}/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-colors`,
  ],

  // Custom ghost with hover background
  // Usage: btn-ghost-custom-fg-jacko-bean-hover-schooner
  [
    /^btn-ghost-custom-fg-(\S+)-hover-(\S+)$/,
    ([, fg, hover]) =>
      `text-${fg} hover:bg-${hover}/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-colors`,
  ],

  // Custom gradient button
  // Usage: btn-gradient-from-coral-tree-to-pohutukawa
  [
    /^btn-gradient-from-(\S+)-to-(\S+)$/,
    ([, from, to]) =>
      `text-white bg-gradient-to-r from-${from} to-${to} hover:from-${from}/90 hover:to-${to}/90 shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-all`,
  ],

  // Original variants - Made specific to avoid conflicts with custom patterns
  // Only matches simple color names (no hyphens) and primary/secondary/etc
  [
    /^btn-solid$/, // btn-solid only (defaults to primary)
    () =>
      `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 text-white shadow-sm bg-primary-600 hover:bg-primary-500 dark:bg-primary-500 dark:hover:bg-primary-400`,
  ],
  [
    /^btn-solid-(primary|secondary|red|blue|green|yellow|purple|pink|indigo|gray|orange|teal|cyan|lime|emerald|sky|violet|fuchsia|rose)$/,
    ([, c]) =>
      `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-${c}-500 text-white shadow-sm bg-${c}-600 hover:bg-${c}-500 dark:bg-${c}-500 dark:hover:bg-${c}-400`,
  ],
  [
    /^btn-text$/, // btn-text only (defaults to primary)
    () =>
      `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 text-primary-600 dark:text-primary-500 hover:text-primary-500 dark:hover:text-primary-400`,
  ],
  [
    /^btn-text-(primary|secondary|red|blue|green|yellow|purple|pink|indigo|gray|orange|teal|cyan|lime|emerald|sky|violet|fuchsia|rose)$/,
    ([, c]) =>
      `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-${c}-500 text-${c}-600 dark:text-${c}-500 hover:text-${c}-500 dark:hover:text-${c}-400`,
  ],
  [
    /^btn-outline$/, // btn-outline only (defaults to primary)
    () =>
      `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 text-primary-500 dark:text-primary-400 ring-1 ring-inset ring-primary-500 dark:ring-primary-400 hover:bg-primary-50 dark:hover:bg-primary-950`,
  ],
  [
    /^btn-outline-(primary|secondary|red|blue|green|yellow|purple|pink|indigo|gray|orange|teal|cyan|lime|emerald|sky|violet|fuchsia|rose)$/,
    ([, c]) =>
      `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-${c}-500 text-${c}-500 dark:text-${c}-400 ring-1 ring-inset ring-${c}-500 dark:ring-${c}-400 hover:bg-${c}-50 dark:hover:bg-${c}-950`,
  ],
  [
    /^btn-soft$/, // btn-soft only (defaults to primary)
    () =>
      `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950 hover:bg-primary-100 dark:hover:bg-primary-900`,
  ],
  [
    /^btn-soft-(primary|secondary|red|blue|green|yellow|purple|pink|indigo|gray|orange|teal|cyan|lime|emerald|sky|violet|fuchsia|rose)$/,
    ([, c]) =>
      `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-${c}-500 text-${c}-600 dark:text-${c}-400 bg-${c}-50 dark:bg-${c}-950 hover:bg-${c}-100 dark:hover:bg-${c}-900`,
  ],
  [
    /^btn-ghost$/, // btn-ghost only (defaults to primary)
    () =>
      `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 text-primary-600 dark:text-primary-400 hover:bg-primary-100 dark:hover:bg-primary-900`,
  ],
  [
    /^btn-ghost-(primary|secondary|red|blue|green|yellow|purple|pink|indigo|gray|orange|teal|cyan|lime|emerald|sky|violet|fuchsia|rose)$/,
    ([, c]) =>
      `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-${c}-500 text-${c}-600 dark:text-${c}-400 hover:bg-${c}-100 dark:hover:bg-${c}-900`,
  ],
  [
    /^btn-link$/, // btn-link only (defaults to primary)
    () =>
      `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 text-primary-600 dark:text-primary-500 hover:underline underline-offset-4`,
  ],
  [
    /^btn-link-(primary|secondary|red|blue|green|yellow|purple|pink|indigo|gray|orange|teal|cyan|lime|emerald|sky|violet|fuchsia|rose)$/,
    ([, c]) =>
      `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-${c}-500 text-${c}-600 dark:text-${c}-500 hover:underline underline-offset-4`,
  ],
]

export const btn = [...dynamicBtn, staticBtn]
