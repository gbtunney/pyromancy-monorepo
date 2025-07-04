import {
  defineConfig,
  presetTypography,
  transformerVariantGroup,
  presetWind3,
} from "unocss";
import { tailwindOKLCHColorsPreset } from "./src/presets/tailwind-oklch-colors-preset";
export default defineConfig({
  presets: [
    presetWind3({
      preflight: true,
      arbitrary: true, // Enable arbitrary value support
    }),
    tailwindOKLCHColorsPreset(), // Use your custom colors preset

    presetTypography(),
  ],

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
  ],
});
