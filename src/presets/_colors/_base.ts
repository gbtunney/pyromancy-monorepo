import type { Theme } from "unocss/preset-uno";
import { colors as tailwindColors } from "@unocss/preset-wind4/colors";

// import { Map } from 'immutable' // Commented out - not currently used
import { convertColorsToOklch } from "./../../utilities.ts";
/*
$gordons-green: #2a322a
$astra: #f0d    rules: [
        // fg-{color} alias for text-{color} - using direct class mapping
        [/^fg-(.+)$/, ([, color]) => {
            return [['color', `var(--un-text-${color})`]]
        }],
    ],oral-tree: #b66368
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

const DEFAULT_COLORS = {
  "gordons-green": "#2a322a", // 🎨 Dark green
  astra: "#f0dba4", // 🎨 Light gold
  "coral-tree": "#b66368", // 🎨 Coral pink
  "sepia-black": "#2b0007", // 🎨 Dark red
  pohutukawa: "#651325", // 🎨 Dark burgundy
  mirage: "#14222b", // 🎨 Dark blue

  tana: "#f0dba4", // 🎨 Light gold
  spice: "#66543e", // 🎨 Brown
  highball: "#90813b", // 🎨 Olive
  "west-coast": "#64551f", // 🎨 Dark olive
  "jacko-bean": "#2e1c08", // 🎨 Dark brown

  ///muteds
  sandstone: "#7b6d5c", // 🎨 Medium brown
  schooner: "#8b8378", // 🎨 Gray brown
  "ironside-gray": "#756f68", // 🎨 Medium gray
  crowshead: "#1a130a", // 🎨 Very dark brown
  onion: "#33250d", // 🎨 Dark brown
  madras: "#46371a", // 🎨 metallic-bronze
  corn: "#efc618", // 🎨 Bright yellow
  gumleaf: "#afd3c2", // 🎨 Mint green
  grey: tailwindColors.gray,
};

export const colors: Exclude<Theme["colors"], undefined> =
  convertColorsToOklch(DEFAULT_COLORS);

export default colors;

// assign default color
// Object.values(colo
// rs as Required<Theme>['colors']).forEach((color) => {
//   if (typeof color !== 'string' && color !== undefined && color.DEFAULT === undefined)
//     color.DEFAULT = color.DEFAULT || color[600] as string
// })
/*
  primary: {
    DEFAULT: 'rgba(var(--c-primary) / <alpha-value>)',
    active: 'rgba(var(--c-primary-active) / <alpha-value>)',
    50: 'rgba(var(--una-primary-50) / <alpha-value>)',
    100: 'rgba(var(--una-primary-100) / <alpha-value>)',
    200: 'rgba(var(--una-primary-200) / <alpha-value>)',
    300: 'rgba(var(--una-primary-300) / <alpha-value>)',
    400: 'rgba(var(--una-primary-400) / <alpha-value>)',
    500: 'rgba(var(--una-primary-500) / <alpha-value>)',
    600: 'rgba(var(--una-primary-600) / <alpha-value>)',
    700: 'rgba(var(--una-primary-700) / <alpha-value>)',
    800: 'rgba(var(--una-primary-800) / <alpha-value>)',
    900: 'rgba(var(--una-primary-900) / <alpha-value>)',
    950: 'rgba(var(--una-primary-950) / <alpha-value>)',
  },
  gray: {
    DEFAULT: 'rgba(var(--c-gray) / <alpha-value>)',
    active: 'rgba(var(--c-gray-active) / <alpha-value>)',
    50: 'rgba(var(--una-gray-50) / <alpha-value>)',
    100: 'rgba(var(--una-gray-100) / <alpha-value>)',
    200: 'rgba(var(--una-gray-200) / <alpha-value>)',
    300: 'rgba(var(--una-gray-300) / <alpha-value>)',
    400: 'rgba(var(--una-gray-400) / <alpha-value>)',
    500: 'rgba(var(--una-gray-500) / <alpha-value>)',
    600: 'rgba(var(--una-gray-600) / <alpha-value>)',
    700: 'rgba(var(--una-gray-700) / <alpha-value>)',
    800: 'rgba(var(--una-gray-800) / <alpha-value>)',
    900: 'rgba(var(--una-gray-900) / <alpha-value>)',
    950: 'rgba(var(--una-gray-950) / <alpha-value>)',
  },
  error: {
    50: '#fdf2f2',
    100: '#fde8e8',
    200: '#fbd5d5',
    300: '#f8b4b4',
    400: '#f98080',
    500: '#f05252',
    600: '#e02424',
    700: '#c81e1e',
    800: '#9b1c1c',
    900: '#771d1d',
    950: '#3f0708',
  },
  success: {
    50: '#f7fee7',
    100: '#ecfccb',
    200: '#d9f99d',
    300: '#bef264',
    400: '#a3e635',
    500: '#84cc16',
    600: '#65a30d',
    700: '#4d7c0f',
    800: '#3f6212',
    900: '#365314',
    950: '#1a2e05',
  },
  warning: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
    950: '#451a03',
  },
  info: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
    950: '#082f49',
  },*/
