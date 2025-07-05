import {
  defineConfig,
  presetTypography,
  transformerVariantGroup,
  presetWind3,
  presetIcons,
  presetWebFonts,
} from "unocss";
import { tailwindOKLCHColorsPreset } from "./src/presets/tailwind-oklch-colors-preset";
import { gbtPreset } from "./src/presets/index.js";
console.log("colors", gbtPreset());
export default defineConfig({
  presets: [
    presetWind3({
      preflight: true,
      dark: "class",
    }),
    tailwindOKLCHColorsPreset(),
    presetTypography(),
    gbtPreset(),
    presetIcons({}),
  ],

  // Add theme configuration for font families
  theme: {
    fontFamily: {
      // Define font families that can be used with utilities
      heading: [
        "var(--font-heading)",
        "adorn-smooth-engraved",
        "mr-eaves-xl-sans-narrow",
        "ui-serif",
        "serif",
      ],
      "heading-alt": [
        "var(--font-heading-alt)",
        "mr-eaves-xl-sans-narrow",
        "adorn-smooth-engraved",
        "ui-sans-serif",
        "sans-serif",
      ],
      display: [
        "var(--font-display)",
        "adorn-smooth-engraved",
        "ui-serif",
        "serif",
      ],
      body: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
      // Override default sans/serif
      sans: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
      serif: [
        "var(--font-heading)",
        "adorn-smooth-engraved",
        "ui-serif",
        "serif",
      ],
    },
  },

  transformers: [transformerVariantGroup()],

  // Simplified content detection - UnoCSS will scan all files by default
  content: {
    filesystem: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  },

  // Safelist to ensure custom colors are always available
  safelist: [
    "to-my-coral",
    "text-gordons-green",
    "from-gordons-green",
    "to-gordons-green",
    "bg-oklch-green",
    "text-oklch-green",
    "from-oklch-green",
    "to-oklch-green",
    "bg-oklch-mint",
    "from-oklch-mint",
    "to-oklch-mint",
    // Standard colors (now forced to OKLCH)
    "bg-lime-500",
    "from-lime-500",
    "from-lime-600",
    "to-lime-500",
    "to-lime-300",
    "bg-red-500",
    "from-red-500",
    "to-red-500",
    "to-red-600",
    "bg-blue-500",
    "from-blue-500",
    "to-blue-500",
    "bg-yellow-300",
    "via-yellow-300",
    // Typography and font classes
    "prose",
    "prose-slate",
    "prose-lg",
    "prose-dark",
    "font-heading",
    "font-heading-alt",
    "font-display",
    "font-body",
    // Icon classes
    "i-ph-anchor-simple-thin",
    "i-mdi-alarm",
    "i-logos-vue",
    "i-carbon-sun",
    "i-carbon-moon",
    "i-twemoji-grinning-face-with-smiling-eyes",
    "i-twemoji-face-with-tears-of-joy",
    "i-heroicons-heart",
    "i-heroicons-home",
    "i-heroicons-user",
    "i-heroicons-cog",
    "i-heroicons-star",
    "i-heroicons-bell",
    "i-heroicons-search",
    "i-heroicons-mail",
  ],
});
