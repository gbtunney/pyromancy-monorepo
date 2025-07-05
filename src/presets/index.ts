import { definePreset } from "unocss";
import type { Theme } from "unocss/preset-uno";
import { merge } from "ts-deepmerge";
import { colors as baseColors } from "./_colors/_base.js";
import fontFamily, {
  type ThemedFontFamilyEntry,
  fontFamily as baseFonts,
  fontWeight as baseFontWeight,
} from "./_theme/_fonts.js";

export type PresetOptions = {
  colors?: Theme["colors"];
  fontFamily?: ThemedFontFamilyEntry; //Record<string, string | string[]>;
  fontWeight?: Record<string, string | number>;
};

export const gbtPreset = definePreset<PresetOptions>(
  (options: PresetOptions = {}) => {
    const mytheme = {
      colors: options.colors ? merge(baseColors, options.colors) : baseColors,
      fontFamily: options.fontFamily
        ? merge(baseFonts, options.fontFamily)
        : baseFonts,
      fontWeight: options.fontWeight
        ? merge(baseFontWeight, options.fontWeight)
        : baseFontWeight,
    };

    return {
      name: "gbt-preset",
      preflights: [
        {
          getCSS: () => `
        h1,h2,h3,h4,h5 {
          font-family: ${options.fontFamily?.display}
        }
      `,
        },
      ],
      theme: mytheme,
      rules: [
        // ...
      ],
      variants: [
        // ...
      ],
      // it supports most of the configuration you could have in the root config
    };
  },
);

export default gbtPreset;
