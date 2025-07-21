import { Map } from 'immutable'
// @ts-expect-error Package is busted
import colors from 'windicss/colors'

/*
$gordons-green: #2a322a
$astra: #f0dba4
$coral-tree: #b66368
$sepia-black: #2b0007
$pohutukawa: #651325
$jacko-bean: #2e1c08
$mirage: #14222b

$crowshead: #1a130a
$onion: #33250d
$madras: #4c3b25
$metallic-bronze: #46371a
$west-coast: #64551f
$spice: #66543e
$hot-curry: #84652a
$sandstone: #7b6d5c
$schooner: #8b8378
$ironside-gray: #756f68
$highball: #90813b */

const BRAND_COLOR_OBJ = {
    'gordons-green': '#2a322a',
    'astra': '#f0dba4',
    'coral-tree': '#b66368',
    'sepia-black': '#2b0007',
    'pohutukawa': '#651325',
    'mirage': '#14222b',

    'tana': '#f0dba4',
    'spice': '#66543e',
    'highball': '#90813b',
    'west-coast': '#64551f',
    'jacko-bean': '#2e1c08',

    ///muteds
    'sandstone': '#7b6d5c',
    'schooner': '#8b8378',
    'ironside-gray': '#756f68',
    'madras': {
        dk: '#1a130a', //crowshead
        md: '#33250d', //onion
        DEFAULT: '#46371a', //metallic-bronze
        lt: '#66543e', //spice      //'#4c3b25', //madras
    },
    'corn': {
        'DEFAULT': '#efc618',
        '50': '#fefcf3',
        '100': '#fdf9e8',
        '200': '#fbf1c5',
        '300': '#f9e8a3',
        '400': '#f4d75d',
        '500': '#efc618',
        '600': '#d7b216',
        '700': '#b39512',
        '800': '#8f770e',
        '900': '#75610c',
    },
    'gumleaf': {
        'DEFAULT': '#afd3c2',
        '50': '#fbfdfc',
        '100': '#f7fbf9',
        '200': '#ebf4f0',
        '300': '#dfede7',
        '400': '#c7e0d4',
        '500': '#afd3c2',
        '600': '#9ebeaf',
        '700': '#839e92',
        '800': '#697f74',
        '900': '#56675f',
    },
    'brandGrey': {
        dk: '#585858',
        DEFAULT: '#7f7f7f',
        lt: '#b0b0b0',
    },
    'grey': {
        DEFAULT: '#7f7f7f',
    },
    'brown': {
        DEFAULT: '#2e1c08',
    },
}
const colorMap = Map(BRAND_COLOR_OBJ)

const CUSTOM_THEME_COLORS = {
    /** PRIMARY ACCENT ---- BRAND MINT GREEN COLOR w defaults */
    'accent-primary': {
        lt: colorMap.getIn(['gumleaf', '300']),
        DEFAULT: colorMap.getIn(['gumleaf', 'DEFAULT']),
        dk: colorMap.getIn(['gumleaf', '600']),
    },
    'accent-secondary': {
        lt: colorMap.getIn(['corn', '300']),
        DEFAULT: colorMap.getIn(['corn', '500']),
        dk: colorMap.getIn(['corn', '700']),
    },
    'dark': {
        lt: colorMap.getIn(['brandGrey', 'lt']),
        DEFAULT: colorMap.getIn(['brandGrey', 'dk']),
        dk: colorMap.getIn(['brandGrey', 'dk']),
    },
    'light': {
        ///TODO : UPDATE someday with maybe a tint or something??????
        lt: colors.white,
        DEFAULT: colors.white,
        dk: colors.white,
    },
    'primary': {
        lt: colorMap.getIn(['brandGrey', 'lt']),
        DEFAULT: colorMap.getIn(['brandGrey', 'DEFAULT']),
        dk: colorMap.getIn(['brandGrey', 'dk']),
    },
}

///**** PROJECT CUSTOM SYSTEM FONTS *******///
type DefaultFonts = {
    sans: string[]
    serif: string[]
}
type FontDef<T extends keyof DefaultFonts> = string[] | string

const DEFAULT_FONTS: DefaultFonts = {
    sans: ['Optima', 'sans-serif'],
    serif: ['Garamond', 'Georgia', 'serif'],
}

///**** PROJECT CUSTOM (BASE) FONTS *******///
type BaseFonts = {
    'garamond': FontDef<'serif'>
    'cormorant': FontDef<'serif'>
    'cronos': FontDef<'sans'>
    'corso-medium': FontDef<'sans'>
    'corso-regular': FontDef<'sans'>
    'mont': FontDef<'sans'>
}
const CUSTOM_BASE_FONTS: BaseFonts = {
    'garamond': ['adobe-garamond-pro', ...DEFAULT_FONTS.serif],
    'cormorant': ['cormorantgaramond', ...DEFAULT_FONTS.serif],

    /** Accent/ Sans Font Candidates */
    /** CRONOS */
    'cronos': ['cronos-pro-display', ...DEFAULT_FONTS.sans],

    /** CORSO */
    'corso-medium': ['Corso Medium', ...DEFAULT_FONTS.sans], //mergeSystemFont('Corso Medium', DEFAULT_FONTS.sans),
    'corso-regular': ['Corso Regular', ...DEFAULT_FONTS.sans],

    /** MONTTSERRAT */
    'mont': ['montserrat', ...DEFAULT_FONTS.sans],
}

//these shhould become a shortcut.
const CUSTOM_THEME_FONTS = {
    primary: CUSTOM_BASE_FONTS.garamond,
    secondary: CUSTOM_BASE_FONTS.cronos,
    accent: CUSTOM_BASE_FONTS.cormorant,
}
//todo: turn this into a factory thing.

import { Preset } from 'unocss'

const presetTest = (): Preset => ({
    name: 'mypreset',
    shortcuts: {
        'theme-primary': "'text-primary', 'bg-white', 'fill-white'",
        'theme-primary-inverse': 'bg-primary fill-primary text-white',
        'theme-accent-primary':
            'text-accent-primary fill-accent-primary bg-white',
        'theme-accent-primary-inverse':
            'bg-accent-primary fill-white text-white',
        'theme-accent-secondary':
            'text-accent-secondary fill-accent-primary bg-white',
        'theme-accent-secondary-inverse': 'bg-corn-600 text-white fill-white',
    },
    theme: {
        /* fontFamily: {
            sans: 'angie-sans',
            serif: 'cormorant-garamond',
            mono: 'DM Mono',
            condensed: 'aktiv-grotesk-condensed',
        },*/
        colors: {
            ...BRAND_COLOR_OBJ,
            ...CUSTOM_THEME_COLORS,
        },
        backgroundImage: {
            'hero-pattern': "url('/img/hero-pattern.svg')",
            'footer-texture': "url('/img/footer-texture.png')",
        },
        fontFamily: { ...DEFAULT_FONTS, ...CUSTOM_BASE_FONTS },
    },
})

export default presetTest
