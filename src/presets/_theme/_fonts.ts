import type { Theme } from "unocss/preset-uno";

// Default font stacks (these override Tailwind's defaults)
const DEFAULT_FONTS = {
  sans: ["mr-eaves-xl-sans-narrow", "ui-sans-serif", "system-ui", "sans-serif"],
  serif: ["mrs-eaves", "ui-serif", "Georgia", "Cambria", "serif"], // Use Mrs Eaves as default serif
  mono: [
    "ui-monospace",
    "SFMono-Regular",
    "Menlo",
    "Monaco",
    "Consolas",
    "monospace",
  ],
};

// Your custom fonts
const CUSTOM_BASE_FONTS = {
  /** TYPEKIT FONTS */
  "adorn-engraved": ["adorn-smooth-engraved", ...DEFAULT_FONTS.sans],
  "adorn-serif": ["adorn-smooth-serif", ...DEFAULT_FONTS.serif],
  "mr-eaves": ["mr-eaves-xl-sans-narrow", ...DEFAULT_FONTS.sans],
  "mrs-eaves": ["mrs-eaves", ...DEFAULT_FONTS.serif],
  kopius: ["kopius", ...DEFAULT_FONTS.serif],
  "kopius-condensed": ["kopius-condensed", ...DEFAULT_FONTS.sans],
  "mrs-eaves-small-caps": [
    "mrs-eaves-roman-all-small-ca",
    ...DEFAULT_FONTS.serif,
  ],
};

export const fontFamily: Record<string, string | string[]> = {
  // Tailwind default overrides (these control font-sans, font-serif, font-mono)
  ...DEFAULT_FONTS,
  // Your custom fonts (these create font-adorn-engraved, etc.)
  ...CUSTOM_BASE_FONTS,
} as const;

export const fontWeight = {
  thin: 100,
  extralight: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
};

export default fontFamily;
