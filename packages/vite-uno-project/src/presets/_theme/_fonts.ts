// Default font stacks (these override Tailwind's defaults)
export type FontFamilyEntry = Record<string, string | string[]>
const DEFAULT_FONTS: {
  sans: string[]
  serif: string[]
  mono: string[]
} = {
  sans: ['ui-sans-serif', 'system-ui', 'sans-serif'],
  serif: ['ui-serif', 'Georgia', 'Cambria', 'serif'], // Use Mrs Eaves as default serif
  mono: [
    'ui-monospace',
    'SFMono-Regular',
    'Menlo',
    'Monaco',
    'Consolas',
    'monospace',
  ],
} as const

const fontFamilyMapEntry = <
  Key extends keyof typeof DEFAULT_FONTS = keyof typeof DEFAULT_FONTS,
>(
  font_family_name: string,
  key: Key,
  alias: undefined | string = undefined
): FontFamilyEntry => {
  const lookupValues = DEFAULT_FONTS[key] ? DEFAULT_FONTS[key] : []

  return {
    [alias !== undefined ? alias : font_family_name]: [
      font_family_name,
      ...lookupValues,
    ],
  }
}

const font_list_bk: FontFamilyEntry[] = [
  fontFamilyMapEntry('adorn-smooth-engraved', 'sans', 'adorn-engraved'),
  fontFamilyMapEntry('adorn-smooth-serif', 'serif', 'adorn-serif'),
  fontFamilyMapEntry('mr-eaves-xl-sans-narrow', 'sans', 'mr-eaves'),
  fontFamilyMapEntry('mrs-eaves', 'serif'),
  fontFamilyMapEntry('kopius', 'serif'),
  fontFamilyMapEntry('kopius-condensed', 'sans'),
  fontFamilyMapEntry(
    'mrs-eaves-roman-all-small-ca',
    'serif',
    'mrs-eaves-small-caps'
  ),
]
const font_lookup = {
  /** TYPEKIT FONTS */
  'adorn-engraved': ['adorn-smooth-engraved', ...DEFAULT_FONTS.sans],
  'adorn-serif': ['adorn-smooth-serif', ...DEFAULT_FONTS.serif],
  'mr-eaves': ['mr-eaves-xl-sans-narrow', ...DEFAULT_FONTS.sans],
  'mrs-eaves': ['mrs-eaves', ...DEFAULT_FONTS.serif],
  kopius: ['kopius', ...DEFAULT_FONTS.serif],
  'kopius-condensed': ['kopius-condensed', ...DEFAULT_FONTS.sans],
  'mrs-eaves-small-caps': [
    'mrs-eaves-roman-all-small-ca',
    ...DEFAULT_FONTS.serif,
  ],
}

export type ThemeFontFamily = {
  sans: string | string[]
  serif: string | string[]
  mono: string | string[]

  heading: string | string[]
  'heading-alt': string | string[]
  display: string | string[]
  'display-alt': string | string[]
  'small-caps': string | string[]
  body: string | string[]
}

const THEME_FONTS: ThemeFontFamily = {
  sans: ['mr-eaves-xl-sans-narrow', ...DEFAULT_FONTS.sans],
  serif: ['mrs-eaves', ...DEFAULT_FONTS.serif],
  mono: ['darkmode-mono-off', ...DEFAULT_FONTS.mono],

  heading: font_lookup['mrs-eaves'],
  'heading-alt': font_lookup['mr-eaves'],
  display: font_lookup['adorn-engraved'],
  'display-alt': font_lookup['kopius-condensed'],
  'small-caps': font_lookup['mrs-eaves-small-caps'],

  body: font_lookup['mrs-eaves'],
} as const
export type ThemedFontFamilyEntry = typeof THEME_FONTS & FontFamilyEntry

export const fontFamily: ThemedFontFamilyEntry = {
  // Tailwind default overrides (these control font-sans, font-serif, font-mono)
  ...THEME_FONTS,
  // Your custom fonts (these create font-adorn-engraved, etc.)
  ...font_lookup,
}

export const fontWeight: Record<string, string | number> = {
  thin: 100,
  extralight: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
}

export default fontFamily
