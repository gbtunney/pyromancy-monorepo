import React, { useState } from "react";

// Import contrast functions
// @ts-expect-error no types available for apcach package
import { apcach, apcachToCss } from "apcach";
// Import culori for color formatting and manipulation
import { formatCss, oklch, wcagContrast } from "culori";

// Button Contrast Generator component
const ButtonContrastGenerator: React.FC<{
  copyToClipboard: (text: string) => void;
  copiedText: string;
}> = ({ copyToClipboard, copiedText }) => {
  const [inputColor, setInputColor] = useState("#3b82f6"); // Default blue
  const [method, setMethod] = useState<"apcach" | "culori">("apcach");
  const [contrastLevel, setContrastLevel] = useState(50); // 0-100 contrast adjustment

  // Generate contrasting text color using apcach (correct API)
  const generateContrastApcach = (bgColor: string, contrast: number = 50) => {
    try {
      // Convert background to OKLCH to get base values
      const bgOklch = oklch(bgColor);
      if (!bgOklch) {
        return {
          dark: "oklch(0.2 0.02 0)",
          light: "oklch(0.9 0.02 0)",
          darkFormatted: "oklch(0.2 0.02 0)",
          lightFormatted: "oklch(0.9 0.02 0)",
        };
      }

      // Use the background's hue for harmonious text colors
      const hue = bgOklch.h || 0;
      const chroma = Math.min((bgOklch.c || 0) * 0.3, 0.05); // Reduce chroma for text

      // Calculate lightness based on contrast level (0-100)
      // 0 = low contrast, 50 = medium contrast, 100 = high contrast
      const contrastMultiplier = contrast / 50; // Convert to 0-2 range
      const darkLightness = Math.max(5, Math.min(30, 20 * contrastMultiplier)); // 5-30 range
      const lightLightness = Math.max(
        70,
        Math.min(95, 85 + 10 * (contrastMultiplier - 1)),
      ); // 70-95 range

      // Generate dark text (for light backgrounds)
      const darkText = apcach(darkLightness, chroma, hue);
      const darkFormatted = apcachToCss(darkText, "oklch");

      // Generate light text (for dark backgrounds)
      const lightText = apcach(lightLightness, chroma, hue);
      const lightFormatted = apcachToCss(lightText, "oklch");

      return {
        dark: darkText,
        light: lightText,
        darkFormatted,
        lightFormatted,
      };
    } catch (error) {
      console.error("APCACH error:", error);
      return {
        dark: "oklch(0.2 0.02 0)",
        light: "oklch(0.9 0.02 0)",
        darkFormatted: "oklch(0.2 0.02 0)",
        lightFormatted: "oklch(0.9 0.02 0)",
      };
    }
  };

  // Generate contrasting text color using culori
  const generateContrastCulori = (bgColor: string, contrast: number = 50) => {
    try {
      // Convert to OKLCH for manipulation
      const bgOklch = oklch(bgColor);
      if (!bgOklch) return { dark: "black", light: "white" };

      // Determine if background is light or dark
      const isLightBg = (bgOklch.l || 0) > 0.5;

      // Calculate lightness based on contrast level (0-100)
      const contrastMultiplier = contrast / 50; // Convert to 0-2 range
      const darkLightness = Math.max(
        0.05,
        Math.min(0.3, 0.15 * contrastMultiplier),
      ); // 0.05-0.3 range
      const lightLightness = Math.max(
        0.7,
        Math.min(0.95, 0.9 + 0.05 * (contrastMultiplier - 1)),
      ); // 0.7-0.95 range

      // Generate high contrast text colors
      const darkText = {
        mode: "oklch" as const,
        l: darkLightness,
        c: 0.02,
        h: bgOklch.h || 0,
      };
      const lightText = {
        mode: "oklch" as const,
        l: lightLightness,
        c: 0.02,
        h: bgOklch.h || 0,
      };

      // Calculate contrast ratios
      const darkContrast = wcagContrast(
        bgColor,
        formatCss(darkText) || "black",
      );
      const lightContrast = wcagContrast(
        bgColor,
        formatCss(lightText) || "white",
      );

      return {
        dark: formatCss(darkText) || "black",
        light: formatCss(lightText) || "white",
        darkContrast: darkContrast || 0,
        lightContrast: lightContrast || 0,
        recommended: isLightBg ? "dark" : "light",
      };
    } catch (error) {
      console.error("Culori error:", error);
      return {
        dark: "black",
        light: "white",
        darkContrast: 0,
        lightContrast: 0,
        recommended: "dark",
      };
    }
  };

  const apcachResult = generateContrastApcach(inputColor, contrastLevel);
  const culoriResult = generateContrastCulori(inputColor, contrastLevel);

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border">
        <h3 className="text-lg font-semibold mb-4">
          🎨 Button Contrast Generator
        </h3>
        <p className="text-gray-600 mb-4">
          Enter any background color and get perfect contrasting text colors.
          Adjust the contrast level to fine-tune for different use cases - low
          for subtle text, high for maximum accessibility.
        </p>

        {/* Input Controls */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium mb-2">
              Background Color
            </label>
            <div className="flex gap-2">
              <input
                type="color"
                value={inputColor}
                onChange={(e) => setInputColor(e.target.value)}
                className="w-12 h-10 rounded border cursor-pointer"
              />
              <input
                type="text"
                value={inputColor}
                onChange={(e) => setInputColor(e.target.value)}
                placeholder="#3b82f6 or blue-500"
                className="flex-1 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Method</label>
            <select
              value={method}
              onChange={(e) => setMethod(e.target.value as "apcach" | "culori")}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="apcach">
                APCACH (Advanced Perceptual Contrast)
              </option>
              <option value="culori">Culori (WCAG Contrast)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Contrast Level: {contrastLevel}%
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={contrastLevel}
              onChange={(e) => setContrastLevel(Number(e.target.value))}
              className="w-full h-10 appearance-none bg-gray-200 rounded-lg outline-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #fbbf24 0%, #10b981 50%, #1e40af 100%)`,
              }}
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>Low</span>
              <span>Medium</span>
              <span>High</span>
            </div>
          </div>
        </div>

        {/* Preview Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* APCACH Results */}
          <div className="space-y-4">
            <h4 className="font-medium text-sm uppercase tracking-wide text-gray-500">
              APCACH Results
            </h4>
            <div className="space-y-3">
              <div className="border rounded-lg overflow-hidden">
                <div
                  className="h-20 flex items-center justify-center text-lg font-medium cursor-pointer"
                  style={{
                    backgroundColor: inputColor,
                    color: apcachResult.darkFormatted,
                  }}
                  onClick={() => copyToClipboard(apcachResult.darkFormatted)}
                  title="Click to copy dark text color"
                >
                  Dark Text Button
                </div>
                <div className="p-3 bg-gray-50 text-xs">
                  <div className="font-mono break-all mb-2">
                    {apcachResult.darkFormatted}
                  </div>
                  <button
                    onClick={() => copyToClipboard(apcachResult.darkFormatted)}
                    className="text-xs bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded"
                  >
                    {copiedText === apcachResult.darkFormatted
                      ? "✓ Copied!"
                      : "Copy Dark Text"}
                  </button>
                </div>
              </div>

              <div className="border rounded-lg overflow-hidden">
                <div
                  className="h-20 flex items-center justify-center text-lg font-medium cursor-pointer"
                  style={{
                    backgroundColor: inputColor,
                    color: apcachResult.lightFormatted,
                  }}
                  onClick={() => copyToClipboard(apcachResult.lightFormatted)}
                  title="Click to copy light text color"
                >
                  Light Text Button
                </div>
                <div className="p-3 bg-gray-50 text-xs">
                  <div className="font-mono break-all mb-2">
                    {apcachResult.lightFormatted}
                  </div>
                  <button
                    onClick={() => copyToClipboard(apcachResult.lightFormatted)}
                    className="text-xs bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded"
                  >
                    {copiedText === apcachResult.lightFormatted
                      ? "✓ Copied!"
                      : "Copy Light Text"}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Culori Results */}
          <div className="space-y-4">
            <h4 className="font-medium text-sm uppercase tracking-wide text-gray-500">
              Culori (WCAG) Results
            </h4>
            <div className="space-y-3">
              <div className="border rounded-lg overflow-hidden">
                <div
                  className="h-20 flex items-center justify-center text-lg font-medium cursor-pointer relative"
                  style={{
                    backgroundColor: inputColor,
                    color: culoriResult.dark,
                  }}
                  onClick={() => copyToClipboard(culoriResult.dark)}
                  title="Click to copy dark text color"
                >
                  Dark Text Button
                  {culoriResult.recommended === "dark" && (
                    <span className="absolute top-2 right-2 text-xs bg-green-500 text-white px-2 py-1 rounded">
                      ✓ Recommended
                    </span>
                  )}
                </div>
                <div className="p-3 bg-gray-50 text-xs">
                  <div className="font-mono break-all mb-1">
                    {culoriResult.dark}
                  </div>
                  <div className="text-gray-600 mb-2">
                    Contrast: {culoriResult.darkContrast?.toFixed(2)}
                  </div>
                  <button
                    onClick={() => copyToClipboard(culoriResult.dark)}
                    className="text-xs bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded"
                  >
                    {copiedText === culoriResult.dark
                      ? "✓ Copied!"
                      : "Copy Dark Text"}
                  </button>
                </div>
              </div>

              <div className="border rounded-lg overflow-hidden">
                <div
                  className="h-20 flex items-center justify-center text-lg font-medium cursor-pointer relative"
                  style={{
                    backgroundColor: inputColor,
                    color: culoriResult.light,
                  }}
                  onClick={() => copyToClipboard(culoriResult.light)}
                  title="Click to copy light text color"
                >
                  Light Text Button
                  {culoriResult.recommended === "light" && (
                    <span className="absolute top-2 right-2 text-xs bg-green-500 text-white px-2 py-1 rounded">
                      ✓ Recommended
                    </span>
                  )}
                </div>
                <div className="p-3 bg-gray-50 text-xs">
                  <div className="font-mono break-all mb-1">
                    {culoriResult.light}
                  </div>
                  <div className="text-gray-600 mb-2">
                    Contrast: {culoriResult.lightContrast?.toFixed(2)}
                  </div>
                  <button
                    onClick={() => copyToClipboard(culoriResult.light)}
                    className="text-xs bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded"
                  >
                    {copiedText === culoriResult.light
                      ? "✓ Copied!"
                      : "Copy Light Text"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Presets */}
        <div className="mt-6 pt-4 border-t">
          <h4 className="font-medium mb-3">Quick Presets</h4>
          <div className="flex flex-wrap gap-2">
            {[
              { name: "Blue", color: "#3b82f6" },
              { name: "Green", color: "#10b981" },
              { name: "Red", color: "#ef4444" },
              { name: "Purple", color: "#8b5cf6" },
              { name: "Orange", color: "#f97316" },
              { name: "Pink", color: "#ec4899" },
              { name: "Dark", color: "#1f2937" },
              { name: "Light", color: "#f3f4f6" },
            ].map((preset) => (
              <button
                key={preset.name}
                onClick={() => setInputColor(preset.color)}
                className="px-3 py-1 text-xs border rounded hover:bg-gray-50 transition-colors"
                style={{
                  backgroundColor: preset.color,
                  color: preset.color === "#f3f4f6" ? "#1f2937" : "white",
                }}
              >
                {preset.name}
              </button>
            ))}
          </div>

          {/* Contrast Level Presets */}
          <div className="mt-4">
            <h5 className="font-medium text-sm mb-2">Contrast Presets</h5>
            <div className="flex flex-wrap gap-2">
              {[
                { name: "Low (25%)", level: 25 },
                { name: "Medium (50%)", level: 50 },
                { name: "High (75%)", level: 75 },
                { name: "Maximum (100%)", level: 100 },
              ].map((preset) => (
                <button
                  key={preset.name}
                  onClick={() => setContrastLevel(preset.level)}
                  className={`px-3 py-1 text-xs border rounded transition-colors ${
                    contrastLevel === preset.level
                      ? "bg-blue-500 text-white border-blue-500"
                      : "bg-gray-50 hover:bg-gray-100"
                  }`}
                >
                  {preset.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Copy Background Color */}
        <div className="mt-4 pt-4 border-t">
          <button
            onClick={() => copyToClipboard(inputColor)}
            className="text-sm bg-blue-100 hover:bg-blue-200 px-3 py-2 rounded transition-colors"
          >
            {copiedText === inputColor
              ? "✓ Background Copied!"
              : `Copy Background: ${inputColor}`}
          </button>
        </div>
      </div>
    </div>
  );
};

// APCACH vs Culori Comparison component
const APCACHvsCuloriComparison: React.FC<{
  copyToClipboard: (text: string) => void;
}> = ({ copyToClipboard }) => {
  const testColors = [
    { name: "Blue Button", hex: "#3b82f6" },
    { name: "Red Button", hex: "#ef4444" },
    { name: "Dark Button", hex: "#1f2937" },
    { name: "Light Button", hex: "#f3f4f6" },
    { name: "Purple Button", hex: "#8b5cf6" },
    { name: "Green Button", hex: "#10b981" },
  ];

  const generateComparison = (bgColor: string) => {
    // APCACH approach (correct API)
    const bgOklch = oklch(bgColor);
    const hue = bgOklch?.h || 0;
    const baseChroma = Math.min((bgOklch?.c || 0) * 0.3, 0.05);

    const apcachDark = apcach(20, baseChroma, hue);
    const apcachLight = apcach(85, baseChroma, hue);

    // Culori approach
    const isLightBg = (bgOklch?.l || 0) > 0.5;

    const culoriDark = {
      mode: "oklch" as const,
      l: 0.15,
      c: 0.02,
      h: bgOklch?.h || 0,
    };
    const culoriLight = {
      mode: "oklch" as const,
      l: 0.9,
      c: 0.02,
      h: bgOklch?.h || 0,
    };

    // Calculate contrast ratios for culori
    const darkContrast = wcagContrast(
      bgColor,
      formatCss(culoriDark) || "black",
    );
    const lightContrast = wcagContrast(
      bgColor,
      formatCss(culoriLight) || "white",
    );

    return {
      apcach: {
        dark: apcachToCss(apcachDark, "oklch"),
        light: apcachToCss(apcachLight, "oklch"),
      },
      culori: {
        dark: formatCss(culoriDark) || "black",
        light: formatCss(culoriLight) || "white",
        darkContrast,
        lightContrast,
        recommended: isLightBg ? "dark" : "light",
      },
    };
  };

  return (
    <div className="space-y-6">
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
        <h3 className="font-medium text-yellow-800 mb-2">
          🔍 Library Comparison
        </h3>
        <p className="text-yellow-700 text-sm">
          Direct comparison between APCACH (Advanced Perceptual Contrast
          Algorithm) and Culori (WCAG-based contrast). APCACH claims to provide
          more perceptually accurate contrast calculations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {testColors.map((color) => {
          const comparison = generateComparison(color.hex);

          return (
            <div key={color.name} className="border rounded-lg overflow-hidden">
              <div className="p-3 bg-gray-50 border-b">
                <h4 className="font-medium text-sm">{color.name}</h4>
                <div className="text-xs text-gray-600 font-mono">
                  {color.hex}
                </div>
              </div>

              {/* APCACH Results */}
              <div className="p-3 border-b">
                <h5 className="text-xs font-medium text-purple-600 mb-2">
                  APCACH
                </h5>
                <div className="space-y-2">
                  <div
                    className="h-12 flex items-center justify-center text-sm font-medium cursor-pointer"
                    style={{
                      backgroundColor: color.hex,
                      color: comparison.apcach.dark,
                    }}
                    onClick={() => copyToClipboard(comparison.apcach.dark)}
                  >
                    Dark Text
                  </div>
                  <div
                    className="h-12 flex items-center justify-center text-sm font-medium cursor-pointer"
                    style={{
                      backgroundColor: color.hex,
                      color: comparison.apcach.light,
                    }}
                    onClick={() => copyToClipboard(comparison.apcach.light)}
                  >
                    Light Text
                  </div>
                </div>
              </div>

              {/* Culori Results */}
              <div className="p-3">
                <h5 className="text-xs font-medium text-blue-600 mb-2">
                  Culori (WCAG)
                </h5>
                <div className="space-y-2">
                  <div
                    className="h-12 flex items-center justify-center text-sm font-medium cursor-pointer relative"
                    style={{
                      backgroundColor: color.hex,
                      color: comparison.culori.dark,
                    }}
                    onClick={() => copyToClipboard(comparison.culori.dark)}
                  >
                    Dark Text
                    {comparison.culori.recommended === "dark" && (
                      <span className="absolute right-1 top-1 text-xs">✓</span>
                    )}
                  </div>
                  <div className="text-xs text-gray-600">
                    Contrast: {comparison.culori.darkContrast?.toFixed(2)}
                  </div>

                  <div
                    className="h-12 flex items-center justify-center text-sm font-medium cursor-pointer relative"
                    style={{
                      backgroundColor: color.hex,
                      color: comparison.culori.light,
                    }}
                    onClick={() => copyToClipboard(comparison.culori.light)}
                  >
                    Light Text
                    {comparison.culori.recommended === "light" && (
                      <span className="absolute right-1 top-1 text-xs">✓</span>
                    )}
                  </div>
                  <div className="text-xs text-gray-600">
                    Contrast: {comparison.culori.lightContrast?.toFixed(2)}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-medium mb-2">Key Differences</h4>
        <div className="text-sm text-gray-700 space-y-1">
          <p>
            <strong>APCACH:</strong> Uses perceptual lightness and advanced
            contrast algorithms
          </p>
          <p>
            <strong>Culori:</strong> Uses WCAG 2.1 contrast ratios (industry
            standard)
          </p>
          <p>
            <strong>✓ Recommended:</strong> Shows which text color has better
            contrast for each background
          </p>
        </div>
      </div>
    </div>
  );
};

// Contrast testing component for detailed APCACH testing
const ContrastTestSwatches: React.FC<{
  copyToClipboard: (text: string) => void;
  copiedText: string;
}> = ({ copyToClipboard, copiedText }) => {
  const testColors = [
    {
      name: "jacko-bean",
      hex: "#2e1c08",
      textClass: "text-jacko-bean",
      bgClass: "bg-jacko-bean",
    },
    {
      name: "gordons-green",
      hex: "#2a322a",
      textClass: "text-gordons-green",
      bgClass: "bg-gordons-green",
    },
    {
      name: "coral-tree",
      hex: "#b66368",
      textClass: "text-coral-tree",
      bgClass: "bg-coral-tree",
    },
    {
      name: "mirage",
      hex: "#14222b",
      textClass: "text-mirage",
      bgClass: "bg-mirage",
    },
    {
      name: "astra",
      hex: "#f0dba4",
      textClass: "text-astra",
      bgClass: "bg-astra",
    },
  ];

  const testScenarios = [
    { lightness: 40, chroma: 0.05, hue: 120, label: "Low Contrast" },
    { lightness: 60, chroma: 0.08, hue: 180, label: "Medium Contrast" },
    { lightness: 80, chroma: 0.12, hue: 240, label: "High Contrast" },
  ];

  return (
    <div className="space-y-8">
      {testScenarios.map((scenario, scenarioIdx) => (
        <div key={scenarioIdx} className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">
            {scenario.label} (L:{scenario.lightness}, C:
            {scenario.chroma.toFixed(2)}, H:{scenario.hue})
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Background Tests */}
            <div>
              <h4 className="font-medium mb-3">Background Tests (APCACH)</h4>
              <div className="grid grid-cols-2 gap-3">
                {testColors.map((color) => {
                  // Use correct APCACH API to generate background variants
                  const bgResult = apcach(
                    scenario.lightness,
                    scenario.chroma,
                    scenario.hue,
                  );

                  // Debug what we're getting
                  console.log(`Debug ${color.name}:`, {
                    original: color.hex,
                    apcachResult: bgResult,
                    lightness: scenario.lightness,
                    chroma: scenario.chroma,
                    hue: scenario.hue,
                  });

                  // Format using apcachToCss
                  let oklchBg = "";
                  try {
                    // Use apcachToCss to convert APCACH color to OKLCH string
                    oklchBg = apcachToCss(bgResult, "oklch");

                    // Fallback if conversion fails
                    if (!oklchBg) {
                      oklchBg = color.hex;
                      console.warn(
                        `APCACH conversion failed for ${color.name}, using original color`,
                      );
                    }
                  } catch (error) {
                    console.error("Error formatting color:", error);
                    oklchBg = color.hex; // Fallback to original hex
                  }

                  return (
                    <div
                      key={`bg-${color.name}`}
                      className="border rounded-lg overflow-hidden"
                    >
                      <div
                        className="h-16 flex items-center justify-center text-white text-sm font-medium cursor-pointer relative"
                        style={{ backgroundColor: oklchBg }}
                        onClick={() => copyToClipboard(oklchBg)}
                        title="Click to copy OKLCH value"
                      >
                        <span className="absolute top-1 left-1 text-xs opacity-75">
                          APCACH
                        </span>
                        {color.name}
                      </div>
                      <div
                        className={`h-12 flex items-center justify-center text-white text-xs font-medium cursor-pointer relative ${color.bgClass}`}
                        onClick={() => copyToClipboard(color.bgClass)}
                        title={`Click to copy ${color.bgClass}`}
                      >
                        <span className="absolute top-1 left-1 text-xs opacity-75">
                          TW
                        </span>
                        {color.name}
                      </div>
                      <div className="p-2 text-xs">
                        <div className="text-gray-600">
                          Original: {color.hex}
                        </div>
                        <div className="text-gray-600 mb-1">
                          Tailwind: {color.bgClass}
                        </div>
                        <div className="font-mono text-xs break-all">
                          APCACH:{" "}
                          {copiedText === oklchBg ? "✓ Copied!" : oklchBg}
                        </div>
                        <div className="flex gap-1 mt-1">
                          <button
                            onClick={() => copyToClipboard(color.bgClass)}
                            className="text-xs bg-blue-100 hover:bg-blue-200 px-2 py-1 rounded"
                          >
                            {copiedText === color.bgClass ? "✓" : "TW Class"}
                          </button>
                          <button
                            onClick={() => copyToClipboard(oklchBg)}
                            className="text-xs bg-purple-100 hover:bg-purple-200 px-2 py-1 rounded"
                          >
                            {copiedText === oklchBg ? "✓" : "OKLCH"}
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Foreground Tests */}
            <div>
              <h4 className="font-medium mb-3">Foreground Tests (APCACH)</h4>
              <div className="grid grid-cols-2 gap-3">
                {testColors.map((color) => {
                  // Use correct APCACH API to generate foreground variants
                  // For foreground, use lower lightness for better contrast
                  const fgLightness = scenario.lightness > 50 ? 20 : 85; // Opposite contrast
                  const fgResult = apcach(
                    fgLightness,
                    scenario.chroma,
                    scenario.hue,
                  );

                  // Debug what we're getting
                  console.log(`Debug FG ${color.name}:`, {
                    original: color.hex,
                    apcachResult: fgResult,
                    lightness: fgLightness,
                    chroma: scenario.chroma,
                    hue: scenario.hue,
                  });

                  // Format using apcachToCss
                  let oklchFg = "";
                  try {
                    // Use apcachToCss to convert APCACH color to OKLCH string
                    oklchFg = apcachToCss(fgResult, "oklch");

                    // Fallback if conversion fails
                    if (!oklchFg) {
                      oklchFg = color.hex;
                      console.warn(
                        `APCACH conversion failed for FG ${color.name}, using original color`,
                      );
                    }
                  } catch (error) {
                    console.error("Error formatting foreground color:", error);
                    oklchFg = color.hex; // Fallback to original hex
                  }

                  return (
                    <div
                      key={`fg-${color.name}`}
                      className="border rounded-lg overflow-hidden"
                    >
                      <div
                        className={`h-16 flex items-center justify-center text-sm font-medium cursor-pointer bg-gray-100 ${color.textClass}`}
                        onClick={() => copyToClipboard(color.textClass)}
                        title={`Click to copy ${color.textClass}`}
                      >
                        {color.name}
                      </div>
                      <div className="p-2 text-xs">
                        <div className="text-gray-600">
                          Original: {color.hex}
                        </div>
                        <div className="text-gray-600 mb-1">
                          Tailwind: {color.textClass}
                        </div>
                        <div className="font-mono text-xs break-all">
                          APCACH:{" "}
                          {copiedText === oklchFg ? "✓ Copied!" : oklchFg}
                        </div>
                        <div className="flex gap-1 mt-1">
                          <button
                            onClick={() => copyToClipboard(color.textClass)}
                            className="text-xs bg-green-100 hover:bg-green-200 px-2 py-1 rounded"
                          >
                            {copiedText === color.textClass ? "✓" : "TW Class"}
                          </button>
                          <button
                            onClick={() => copyToClipboard(oklchFg)}
                            className="text-xs bg-purple-100 hover:bg-purple-200 px-2 py-1 rounded"
                          >
                            {copiedText === oklchFg ? "✓" : "OKLCH"}
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Custom Testing */}
      <div className="bg-blue-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Custom Test Values</h3>
        <p className="text-sm text-gray-600 mb-4">
          Edit the values in _base.ts to test different scenarios
        </p>
        <div className="text-xs font-mono bg-white p-3 rounded border">
          <div>// Example usage:</div>
          <div>const bgColor = apcach(60, 0.042, 66.4);</div>
          <div>const fgColor = apcach(20, 0.042, 66.4);</div>
        </div>
      </div>
    </div>
  );
};

const ContrastPage: React.FC = () => {
  const [copiedText, setCopiedText] = useState<string>("");

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      setTimeout(() => setCopiedText(""), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold font-heading mb-4">
            Contrast & Accessibility Tools
          </h1>
          <p className="text-gray-600 font-body">
            Advanced color contrast generation and testing using APCACH and
            Culori libraries
          </p>
        </div>

        {/* Button Contrast Generator */}
        <section className="border-b pb-8">
          <h2 className="text-2xl font-semibold font-heading mb-6">
            Button Contrast Generator
          </h2>
          <p className="text-gray-600 mb-6">
            Generate perfect contrasting text colors for any button background
            using APCACH and Culori
          </p>
          <ButtonContrastGenerator
            copyToClipboard={copyToClipboard}
            copiedText={copiedText}
          />
        </section>

        {/* APCACH vs Culori Comparison */}
        <section className="border-b pb-8">
          <h2 className="text-2xl font-semibold font-heading mb-6">
            APCACH vs Culori Comparison
          </h2>
          <p className="text-gray-600 mb-6">
            Side-by-side comparison of APCACH and Culori contrast calculations
            to see the differences
          </p>
          <APCACHvsCuloriComparison copyToClipboard={copyToClipboard} />
        </section>

        {/* Detailed Contrast Testing */}
        <section>
          <h2 className="text-2xl font-semibold font-heading mb-6">
            Advanced APCACH Testing
          </h2>
          <p className="text-gray-600 mb-6">
            Detailed contrast testing with custom colors and scenarios using the
            APCACH library
          </p>
          <ContrastTestSwatches
            copyToClipboard={copyToClipboard}
            copiedText={copiedText}
          />
        </section>
      </div>
    </div>
  );
};

export default ContrastPage;
