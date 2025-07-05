import { colors as tailwindColors } from "@unocss/preset-wind4/colors";
// import { Map } from 'immutable' // Commented out - not currently used
import { oklch, formatCss } from "culori";
import type { Preset } from "unocss";

// Function to convert hex colors to OKLCH format
export const hexToOklch = (hexColor: string): string => {
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
export const convertColorsToOklch = (
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
