import { definePreset } from "unocss";
import type { Theme } from "unocss/preset-uno";
import type { Preset } from "unocss";
import { merge } from "ts-deepmerge";
import { colors as baseColors } from "./_colors/_base.js";
import {
  fontFamily as baseFonts,
  fontWeight as baseFontWeight,
} from "./_theme/_fonts.js";

export type PresetOptions = {
  colors?: Theme["colors"];
  fontFamily?: Theme["fontFamily"];
  fontWeight?: Theme["fontWeight"];
};

export const gbtPreset = definePreset<PresetOptions>(
  (options: PresetOptions = {}) => {
    return {
      name: "gbt-preset",
      theme: {
        colors: options.colors ? merge(baseColors, options.colors) : baseColors,
        fontFamily: options.fontFamily
          ? merge(baseFonts, options.fontFamily)
          : baseFonts,
        fontWeight: options.fontWeight
          ? merge(baseFontWeight, options.fontWeight)
          : baseFontWeight,
      },
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
