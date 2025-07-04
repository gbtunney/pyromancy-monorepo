import { colors as tailwindColors } from "@unocss/preset-wind4/colors";
// import { Map } from 'immutable' // Commented out - not currently used
import { oklch, formatCss } from "culori";
import type { Preset } from "unocss";

// Function to convert hex colors to OKLCH format
const hexToOklch = (hexColor: string): string => {
  try {
    const oklchColor = oklch(hexColor);
    const formattedColor = oklchColor ? formatCss(oklchColor) : undefined;
    return formattedColor || hexColor; // fallback to original hex if undefined
  } catch (error) {
    console.warn(`Failed to convert ${hexColor} to OKLCH:`, error);
    return hexColor; // fallback to original hex
  }
};

// Function to convert an entire color object to OKLCH
const convertColorsToOklch = (
  colorObj: Record<string, string | Record<string, string>>,
): Record<string, string | Record<string, string>> => {
  const converted: Record<string, string | Record<string, string>> = {};

  for (const [colorName, colorValue] of Object.entries(colorObj)) {
    if (typeof colorValue === "string") {
      // Simple color value
      converted[colorName] = colorValue.startsWith("#")
        ? hexToOklch(colorValue)
        : colorValue;
    } else if (typeof colorValue === "object" && colorValue !== null) {
      // Nested color object (like corn: { 50: '#...', 100: '#...' })
      converted[colorName] = {};
      for (const [shade, shadeValue] of Object.entries(colorValue)) {
        if (typeof shadeValue === "string") {
          converted[colorName][shade] = shadeValue.startsWith("#")
            ? hexToOklch(shadeValue)
            : shadeValue;
        } else {
          converted[colorName][shade] = shadeValue;
        }
      }
    } else {
      converted[colorName] = colorValue;
    }
  }

  return converted;
};

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

const CUSTOM_COLORS = {
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

// Convert your custom colors to OKLCH
const CUSTOM_COLORS_OKLCH = convertColorsToOklch(CUSTOM_COLORS);

// Unused variables commented out for now
// const colorMap = Map(CUSTOM_COLORS)
//lt: colorMap.getIn(['corn', '300']),
//   DEFAULT: colorMap.getIn(['corn', '500']),
//  dk: colorMap.getIn(['corn', '700']),
///**** PROJECT CUSTOM SYSTEM FONTS *******///
type DefaultFonts = {
  sans: string[];
  serif: string[];
};
type FontDef = string[] | string;

const DEFAULT_FONTS: DefaultFonts = {
  sans: ["Optima", "sans-serif"],
  serif: ["Garamond", "Georgia", "serif"],
};

///**** PROJECT CUSTOM (BASE) FONTS *******///
type BaseFonts = {
  garamond: FontDef;
  cormorant: FontDef;
  cronos: FontDef;
  "corso-medium": FontDef;
  "corso-regular": FontDef;
  mont: FontDef;
};
const CUSTOM_BASE_FONTS: BaseFonts = {
  garamond: ["adobe-garamond-pro", ...DEFAULT_FONTS.serif],
  cormorant: ["cormorantgaramond", ...DEFAULT_FONTS.serif],

  /** Accent/ Sans Font Candidates */
  /** CRONOS */
  cronos: ["cronos-pro-display", ...DEFAULT_FONTS.sans],

  /** CORSO */
  "corso-medium": ["Corso Medium", ...DEFAULT_FONTS.sans], //mergeSystemFont('Corso Medium', DEFAULT_FONTS.sans),
  "corso-regular": ["Corso Regular", ...DEFAULT_FONTS.sans],

  /** MONTTSERRAT */
  mont: ["montserrat", ...DEFAULT_FONTS.sans],
};

//these shhould become a shortcut.
// const CUSTOM_THEME_FONTS = {
//     primary: CUSTOM_BASE_FONTS.garamond,
//     secondary: CUSTOM_BASE_FONTS.cronos,
//     accent: CUSTOM_BASE_FONTS.cormorant,
// }
//todo: turn this into a factory thing.

const presetTest = (): Preset => ({
  name: "mypreset",
  shortcuts: [
    // Dynamic fg-{color} alias for text-{color} - fixed regex to not capture extra characters
    [/^fg-([a-zA-Z0-9-]+)$/, ([, color]) => `text-${color}`],
    // Static shortcuts as object
    {
      "theme-primary": "'text-primary', 'bg-white', 'fill-white'",
      "theme-primary-inverse": "bg-primary fill-primary text-white",
      "theme-accent-primary":
        "text-accent-primary fill-accent-primary bg-white",
      "theme-accent-primary-inverse": "bg-accent-primary fill-white text-white",
      "theme-accent-secondary":
        "text-accent-secondary fill-accent-primary bg-white",
      "theme-accent-secondary-inverse": "bg-corn-600 text-white fill-white",
    },
  ],
  theme: {
    colors: {
      ...CUSTOM_COLORS, // Original hex colors
      ...CUSTOM_COLORS_OKLCH, // Same colors in OKLCH format
    },
    /* fontFamily: {
            sans: 'angie-sans',
            serif: 'cormorant-garamond',
            mono: 'DM Mono',
            condensed: 'aktiv-grotesk-condensed',
        },*/

    backgroundImage: {
      "hero-pattern": "url('/img/hero-pattern.svg')",
      "footer-texture": "url('/img/footer-texture.png')",
    },
    fontFamily: { ...DEFAULT_FONTS, ...CUSTOM_BASE_FONTS },
  },
});

export default presetTest;
