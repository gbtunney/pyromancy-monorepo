import React, { useState } from 'react'

// Import contrast functions
// @ts-expect-error no types available for apcach package
import { apcach, apcachToCss } from 'apcach'
// Import culori for color formatting and manipulation
import { formatCss, oklch, wcagContrast } from 'culori'

// Button Contrast Generator component
const ButtonContrastGenerator: React.FC<{
  copyToClipboard: (text: string) => void
  copiedText: string
}> = ({ copyToClipboard, copiedText }) => {
  const [inputColor, setInputColor] = useState('#3b82f6') // Default blue
  const [method, setMethod] = useState<'apcach' | 'culori'>('apcach')
  const [contrastLevel, setContrastLevel] = useState(50) // 0-100 contrast adjustment

  // Generate contrasting text color using apcach (correct API)
  const generateContrastApcach = (bgColor: string, contrast: number = 50) => {
    try {
      // Convert background to OKLCH to get base values
      const bgOklch = oklch(bgColor)
      if (!bgOklch) {
        return {
          dark: 'oklch(0.2 0.02 0)',
          light: 'oklch(0.9 0.02 0)',
          darkFormatted: 'oklch(0.2 0.02 0)',
          lightFormatted: 'oklch(0.9 0.02 0)',
        }
      }

      // Use the background's hue for harmonious text colors
      const hue = bgOklch.h || 0
      const chroma = Math.min((bgOklch.c || 0) * 0.3, 0.05) // Reduce chroma for text

      // Calculate lightness based on contrast level (0-100)
      // 0 = low contrast, 50 = medium contrast, 100 = high contrast
      const contrastMultiplier = contrast / 50 // Convert to 0-2 range
      const darkLightness = Math.max(5, Math.min(30, 20 * contrastMultiplier)) // 5-30 range
      const lightLightness = Math.max(
        70,
        Math.min(95, 85 + 10 * (contrastMultiplier - 1))
      ) // 70-95 range

      // Generate dark text (for light backgrounds)
      const darkText = apcach(darkLightness, chroma, hue)
      const darkFormatted = apcachToCss(darkText, 'oklch')

      // Generate light text (for dark backgrounds)
      const lightText = apcach(lightLightness, chroma, hue)
      const lightFormatted = apcachToCss(lightText, 'oklch')

      return {
        dark: darkText,
        light: lightText,
        darkFormatted,
        lightFormatted,
      }
    } catch (error) {
      console.error('APCACH error:', error)
      return {
        dark: 'oklch(0.2 0.02 0)',
        light: 'oklch(0.9 0.02 0)',
        darkFormatted: 'oklch(0.2 0.02 0)',
        lightFormatted: 'oklch(0.9 0.02 0)',
      }
    }
  }

  // Generate contrasting text color using culori
  const generateContrastCulori = (bgColor: string, contrast: number = 50) => {
    try {
      // Convert to OKLCH for manipulation
      const bgOklch = oklch(bgColor)
      if (!bgOklch) return { dark: 'black', light: 'white' }

      // Determine if background is light or dark
      const isLightBg = (bgOklch.l || 0) > 0.5

      // Calculate lightness based on contrast level (0-100)
      const contrastMultiplier = contrast / 50 // Convert to 0-2 range
      const darkLightness = Math.max(
        0.05,
        Math.min(0.3, 0.15 * contrastMultiplier)
      ) // 0.05-0.3 range
      const lightLightness = Math.max(
        0.7,
        Math.min(0.95, 0.9 + 0.05 * (contrastMultiplier - 1))
      ) // 0.7-0.95 range

      // Generate high contrast text colors
      const darkText = {
        mode: 'oklch' as const,
        l: darkLightness,
        c: 0.02,
        h: bgOklch.h || 0,
      }
      const lightText = {
        mode: 'oklch' as const,
        l: lightLightness,
        c: 0.02,
        h: bgOklch.h || 0,
      }

      // Calculate contrast ratios
      const darkContrast = wcagContrast(bgColor, formatCss(darkText) || 'black')
      const lightContrast = wcagContrast(
        bgColor,
        formatCss(lightText) || 'white'
      )

      return {
        dark: formatCss(darkText) || 'black',
        light: formatCss(lightText) || 'white',
        darkContrast: darkContrast || 0,
        lightContrast: lightContrast || 0,
        recommended: isLightBg ? 'dark' : 'light',
      }
    } catch (error) {
      console.error('Culori error:', error)
      return {
        dark: 'black',
        light: 'white',
        darkContrast: 0,
        lightContrast: 0,
        recommended: 'dark',
      }
    }
  }

  const apcachResult = generateContrastApcach(inputColor, contrastLevel)
  const culoriResult = generateContrastCulori(inputColor, contrastLevel)

  return (
    <div className="space-y-6">
      <div className="rounded-lg border bg-gradient-to-r from-blue-50 to-purple-50 p-6">
        <h3 className="mb-4 text-lg font-semibold">
          🎨 Button Contrast Generator
        </h3>
        <p className="mb-4 text-gray-600">
          Enter any background color and get perfect contrasting text colors.
          Adjust the contrast level to fine-tune for different use cases - low
          for subtle text, high for maximum accessibility.
        </p>

        {/* Input Controls */}
        <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div>
            <label className="mb-2 block text-sm font-medium">
              Background Color
            </label>
            <div className="flex gap-2">
              <input
                type="color"
                value={inputColor}
                onChange={(e) => setInputColor(e.target.value)}
                className="h-10 w-12 cursor-pointer rounded border"
              />
              <input
                type="text"
                value={inputColor}
                onChange={(e) => setInputColor(e.target.value)}
                placeholder="#3b82f6 or blue-500"
                className="flex-1 rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">Method</label>
            <select
              value={method}
              onChange={(e) => setMethod(e.target.value as 'apcach' | 'culori')}
              className="w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="apcach">
                APCACH (Advanced Perceptual Contrast)
              </option>
              <option value="culori">Culori (WCAG Contrast)</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Contrast Level: {contrastLevel}%
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={contrastLevel}
              onChange={(e) => setContrastLevel(Number(e.target.value))}
              className="h-10 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 outline-none"
              style={{
                background: `linear-gradient(to right, #fbbf24 0%, #10b981 50%, #1e40af 100%)`,
              }}
            />
            <div className="mt-1 flex justify-between text-xs text-gray-500">
              <span>Low</span>
              <span>Medium</span>
              <span>High</span>
            </div>
          </div>
        </div>

        {/* Preview Section */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* APCACH Results */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium uppercase tracking-wide text-gray-500">
              APCACH Results
            </h4>
            <div className="space-y-3">
              <div className="overflow-hidden rounded-lg border">
                <div
                  className="flex h-20 cursor-pointer items-center justify-center text-lg font-medium"
                  style={{
                    backgroundColor: inputColor,
                    color: apcachResult.darkFormatted,
                  }}
                  onClick={() => copyToClipboard(apcachResult.darkFormatted)}
                  title="Click to copy dark text color"
                >
                  Dark Text Button
                </div>
                <div className="bg-gray-50 p-3 text-xs">
                  <div className="mb-2 break-all font-mono">
                    {apcachResult.darkFormatted}
                  </div>
                  <button
                    onClick={() => copyToClipboard(apcachResult.darkFormatted)}
                    className="rounded bg-gray-200 px-2 py-1 text-xs hover:bg-gray-300"
                  >
                    {copiedText === apcachResult.darkFormatted
                      ? '✓ Copied!'
                      : 'Copy Dark Text'}
                  </button>
                </div>
              </div>

              <div className="overflow-hidden rounded-lg border">
                <div
                  className="flex h-20 cursor-pointer items-center justify-center text-lg font-medium"
                  style={{
                    backgroundColor: inputColor,
                    color: apcachResult.lightFormatted,
                  }}
                  onClick={() => copyToClipboard(apcachResult.lightFormatted)}
                  title="Click to copy light text color"
                >
                  Light Text Button
                </div>
                <div className="bg-gray-50 p-3 text-xs">
                  <div className="mb-2 break-all font-mono">
                    {apcachResult.lightFormatted}
                  </div>
                  <button
                    onClick={() => copyToClipboard(apcachResult.lightFormatted)}
                    className="rounded bg-gray-200 px-2 py-1 text-xs hover:bg-gray-300"
                  >
                    {copiedText === apcachResult.lightFormatted
                      ? '✓ Copied!'
                      : 'Copy Light Text'}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Culori Results */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium uppercase tracking-wide text-gray-500">
              Culori (WCAG) Results
            </h4>
            <div className="space-y-3">
              <div className="overflow-hidden rounded-lg border">
                <div
                  className="relative flex h-20 cursor-pointer items-center justify-center text-lg font-medium"
                  style={{
                    backgroundColor: inputColor,
                    color: culoriResult.dark,
                  }}
                  onClick={() => copyToClipboard(culoriResult.dark)}
                  title="Click to copy dark text color"
                >
                  Dark Text Button
                  {culoriResult.recommended === 'dark' && (
                    <span className="absolute right-2 top-2 rounded bg-green-500 px-2 py-1 text-xs text-white">
                      ✓ Recommended
                    </span>
                  )}
                </div>
                <div className="bg-gray-50 p-3 text-xs">
                  <div className="mb-1 break-all font-mono">
                    {culoriResult.dark}
                  </div>
                  <div className="mb-2 text-gray-600">
                    Contrast: {culoriResult.darkContrast?.toFixed(2)}
                  </div>
                  <button
                    onClick={() => copyToClipboard(culoriResult.dark)}
                    className="rounded bg-gray-200 px-2 py-1 text-xs hover:bg-gray-300"
                  >
                    {copiedText === culoriResult.dark
                      ? '✓ Copied!'
                      : 'Copy Dark Text'}
                  </button>
                </div>
              </div>

              <div className="overflow-hidden rounded-lg border">
                <div
                  className="relative flex h-20 cursor-pointer items-center justify-center text-lg font-medium"
                  style={{
                    backgroundColor: inputColor,
                    color: culoriResult.light,
                  }}
                  onClick={() => copyToClipboard(culoriResult.light)}
                  title="Click to copy light text color"
                >
                  Light Text Button
                  {culoriResult.recommended === 'light' && (
                    <span className="absolute right-2 top-2 rounded bg-green-500 px-2 py-1 text-xs text-white">
                      ✓ Recommended
                    </span>
                  )}
                </div>
                <div className="bg-gray-50 p-3 text-xs">
                  <div className="mb-1 break-all font-mono">
                    {culoriResult.light}
                  </div>
                  <div className="mb-2 text-gray-600">
                    Contrast: {culoriResult.lightContrast?.toFixed(2)}
                  </div>
                  <button
                    onClick={() => copyToClipboard(culoriResult.light)}
                    className="rounded bg-gray-200 px-2 py-1 text-xs hover:bg-gray-300"
                  >
                    {copiedText === culoriResult.light
                      ? '✓ Copied!'
                      : 'Copy Light Text'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Presets */}
        <div className="mt-6 border-t pt-4">
          <h4 className="mb-3 font-medium">Quick Presets</h4>
          <div className="flex flex-wrap gap-2">
            {[
              { name: 'Blue', color: '#3b82f6' },
              { name: 'Green', color: '#10b981' },
              { name: 'Red', color: '#ef4444' },
              { name: 'Purple', color: '#8b5cf6' },
              { name: 'Orange', color: '#f97316' },
              { name: 'Pink', color: '#ec4899' },
              { name: 'Dark', color: '#1f2937' },
              { name: 'Light', color: '#f3f4f6' },
            ].map((preset) => (
              <button
                key={preset.name}
                onClick={() => setInputColor(preset.color)}
                className="rounded border px-3 py-1 text-xs transition-colors hover:bg-gray-50"
                style={{
                  backgroundColor: preset.color,
                  color: preset.color === '#f3f4f6' ? '#1f2937' : 'white',
                }}
              >
                {preset.name}
              </button>
            ))}
          </div>

          {/* Contrast Level Presets */}
          <div className="mt-4">
            <h5 className="mb-2 text-sm font-medium">Contrast Presets</h5>
            <div className="flex flex-wrap gap-2">
              {[
                { name: 'Low (25%)', level: 25 },
                { name: 'Medium (50%)', level: 50 },
                { name: 'High (75%)', level: 75 },
                { name: 'Maximum (100%)', level: 100 },
              ].map((preset) => (
                <button
                  key={preset.name}
                  onClick={() => setContrastLevel(preset.level)}
                  className={`rounded border px-3 py-1 text-xs transition-colors ${
                    contrastLevel === preset.level
                      ? 'border-blue-500 bg-blue-500 text-white'
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  {preset.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Copy Background Color */}
        <div className="mt-4 border-t pt-4">
          <button
            onClick={() => copyToClipboard(inputColor)}
            className="rounded bg-blue-100 px-3 py-2 text-sm transition-colors hover:bg-blue-200"
          >
            {copiedText === inputColor
              ? '✓ Background Copied!'
              : `Copy Background: ${inputColor}`}
          </button>
        </div>
      </div>
    </div>
  )
}

// APCACH vs Culori Comparison component
const APCACHvsCuloriComparison: React.FC<{
  copyToClipboard: (text: string) => void
}> = ({ copyToClipboard }) => {
  const testColors = [
    { name: 'Blue Button', hex: '#3b82f6' },
    { name: 'Red Button', hex: '#ef4444' },
    { name: 'Dark Button', hex: '#1f2937' },
    { name: 'Light Button', hex: '#f3f4f6' },
    { name: 'Purple Button', hex: '#8b5cf6' },
    { name: 'Green Button', hex: '#10b981' },
  ]

  const generateComparison = (bgColor: string) => {
    // APCACH approach (correct API)
    const bgOklch = oklch(bgColor)
    const hue = bgOklch?.h || 0
    const baseChroma = Math.min((bgOklch?.c || 0) * 0.3, 0.05)

    const apcachDark = apcach(20, baseChroma, hue)
    const apcachLight = apcach(85, baseChroma, hue)

    // Culori approach
    const isLightBg = (bgOklch?.l || 0) > 0.5

    const culoriDark = {
      mode: 'oklch' as const,
      l: 0.15,
      c: 0.02,
      h: bgOklch?.h || 0,
    }
    const culoriLight = {
      mode: 'oklch' as const,
      l: 0.9,
      c: 0.02,
      h: bgOklch?.h || 0,
    }

    // Calculate contrast ratios for culori
    const darkContrast = wcagContrast(bgColor, formatCss(culoriDark) || 'black')
    const lightContrast = wcagContrast(
      bgColor,
      formatCss(culoriLight) || 'white'
    )

    return {
      apcach: {
        dark: apcachToCss(apcachDark, 'oklch'),
        light: apcachToCss(apcachLight, 'oklch'),
      },
      culori: {
        dark: formatCss(culoriDark) || 'black',
        light: formatCss(culoriLight) || 'white',
        darkContrast,
        lightContrast,
        recommended: isLightBg ? 'dark' : 'light',
      },
    }
  }

  return (
    <div className="space-y-6">
      <div className="border-l-4 border-yellow-400 bg-yellow-50 p-4">
        <h3 className="mb-2 font-medium text-yellow-800">
          🔍 Library Comparison
        </h3>
        <p className="text-sm text-yellow-700">
          Direct comparison between APCACH (Advanced Perceptual Contrast
          Algorithm) and Culori (WCAG-based contrast). APCACH claims to provide
          more perceptually accurate contrast calculations.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {testColors.map((color) => {
          const comparison = generateComparison(color.hex)

          return (
            <div key={color.name} className="overflow-hidden rounded-lg border">
              <div className="border-b bg-gray-50 p-3">
                <h4 className="text-sm font-medium">{color.name}</h4>
                <div className="font-mono text-xs text-gray-600">
                  {color.hex}
                </div>
              </div>

              {/* APCACH Results */}
              <div className="border-b p-3">
                <h5 className="mb-2 text-xs font-medium text-purple-600">
                  APCACH
                </h5>
                <div className="space-y-2">
                  <div
                    className="flex h-12 cursor-pointer items-center justify-center text-sm font-medium"
                    style={{
                      backgroundColor: color.hex,
                      color: comparison.apcach.dark,
                    }}
                    onClick={() => copyToClipboard(comparison.apcach.dark)}
                  >
                    Dark Text
                  </div>
                  <div
                    className="flex h-12 cursor-pointer items-center justify-center text-sm font-medium"
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
                <h5 className="mb-2 text-xs font-medium text-blue-600">
                  Culori (WCAG)
                </h5>
                <div className="space-y-2">
                  <div
                    className="relative flex h-12 cursor-pointer items-center justify-center text-sm font-medium"
                    style={{
                      backgroundColor: color.hex,
                      color: comparison.culori.dark,
                    }}
                    onClick={() => copyToClipboard(comparison.culori.dark)}
                  >
                    Dark Text
                    {comparison.culori.recommended === 'dark' && (
                      <span className="absolute right-1 top-1 text-xs">✓</span>
                    )}
                  </div>
                  <div className="text-xs text-gray-600">
                    Contrast: {comparison.culori.darkContrast?.toFixed(2)}
                  </div>

                  <div
                    className="relative flex h-12 cursor-pointer items-center justify-center text-sm font-medium"
                    style={{
                      backgroundColor: color.hex,
                      color: comparison.culori.light,
                    }}
                    onClick={() => copyToClipboard(comparison.culori.light)}
                  >
                    Light Text
                    {comparison.culori.recommended === 'light' && (
                      <span className="absolute right-1 top-1 text-xs">✓</span>
                    )}
                  </div>
                  <div className="text-xs text-gray-600">
                    Contrast: {comparison.culori.lightContrast?.toFixed(2)}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="rounded-lg bg-blue-50 p-4">
        <h4 className="mb-2 font-medium">Key Differences</h4>
        <div className="space-y-1 text-sm text-gray-700">
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

      {/* Best Practices Summary */}
      <div className="rounded-lg border bg-gradient-to-r from-green-50 to-blue-50 p-6">
        <h4 className="mb-4 font-medium text-green-800">
          📚 Best Practices & Recommendations
        </h4>
        <div className="grid grid-cols-1 gap-6 text-sm md:grid-cols-2">
          <div>
            <h5 className="mb-2 font-medium text-purple-700">
              Use APCACH when:
            </h5>
            <ul className="space-y-1 text-gray-700">
              <li>• You want cutting-edge perceptual accuracy</li>
              <li>• Working with complex color harmonies</li>
              <li>• Building design systems with fine-tuned contrast</li>
              <li>• Experimenting with new color science</li>
            </ul>
          </div>
          <div>
            <h5 className="mb-2 font-medium text-blue-700">Use Culori when:</h5>
            <ul className="space-y-1 text-gray-700">
              <li>• You need WCAG compliance (required for accessibility)</li>
              <li>• Building production applications</li>
              <li>• Working with accessibility audits</li>
              <li>• Industry-standard contrast ratios are needed</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 rounded border-l-4 border-orange-400 bg-white p-3">
          <p className="text-sm text-orange-800">
            <strong>💡 Pro Tip:</strong> Use the Button Contrast Generator above
            for quick, practical results. For production apps, validate with
            Culori's WCAG ratios to ensure accessibility compliance.
          </p>
        </div>
      </div>
    </div>
  )
}

// Contrast testing component
const ContrastTestSwatches: React.FC<{
  copyToClipboard: (text: string) => void
  copiedText: string
}> = ({ copyToClipboard, copiedText }) => {
  const testColors = [
    {
      name: 'jacko-bean',
      hex: '#2e1c08',
      textClass: 'text-jacko-bean',
      bgClass: 'bg-jacko-bean',
    },
    {
      name: 'gordons-green',
      hex: '#2a322a',
      textClass: 'text-gordons-green',
      bgClass: 'bg-gordons-green',
    },
    {
      name: 'coral-tree',
      hex: '#b66368',
      textClass: 'text-coral-tree',
      bgClass: 'bg-coral-tree',
    },
    {
      name: 'mirage',
      hex: '#14222b',
      textClass: 'text-mirage',
      bgClass: 'bg-mirage',
    },
    {
      name: 'astra',
      hex: '#f0dba4',
      textClass: 'text-astra',
      bgClass: 'bg-astra',
    },
  ]

  const testScenarios = [
    { lightness: 40, chroma: 0.05, hue: 120, label: 'Low Contrast' },
    { lightness: 60, chroma: 0.08, hue: 180, label: 'Medium Contrast' },
    { lightness: 80, chroma: 0.12, hue: 240, label: 'High Contrast' },
  ]

  return (
    <div className="space-y-8">
      {testScenarios.map((scenario, scenarioIdx) => (
        <div key={scenarioIdx} className="rounded-lg bg-gray-50 p-6">
          <h3 className="mb-4 text-lg font-semibold">
            {scenario.label} (L:{scenario.lightness}, C:
            {scenario.chroma.toFixed(2)}, H:{scenario.hue})
          </h3>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Background Tests */}
            <div>
              <h4 className="mb-3 font-medium">Background Tests (APCACH)</h4>
              <div className="grid grid-cols-2 gap-3">
                {testColors.map((color) => {
                  // Use correct APCACH API to generate background variants
                  const bgResult = apcach(
                    scenario.lightness,
                    scenario.chroma,
                    scenario.hue
                  )

                  // Debug what we're getting
                  console.log(`Debug ${color.name}:`, {
                    original: color.hex,
                    apcachResult: bgResult,
                    lightness: scenario.lightness,
                    chroma: scenario.chroma,
                    hue: scenario.hue,
                  })

                  // Format using apcachToCss
                  let oklchBg = ''
                  try {
                    // Use apcachToCss to convert APCACH color to OKLCH string
                    oklchBg = apcachToCss(bgResult, 'oklch')

                    // Fallback if conversion fails
                    if (!oklchBg) {
                      oklchBg = color.hex
                      console.warn(
                        `APCACH conversion failed for ${color.name}, using original color`
                      )
                    }
                  } catch (error) {
                    console.error('Error formatting color:', error)
                    oklchBg = color.hex // Fallback to original hex
                  }

                  return (
                    <div
                      key={`bg-${color.name}`}
                      className="overflow-hidden rounded-lg border"
                    >
                      <div
                        className="relative flex h-16 cursor-pointer items-center justify-center text-sm font-medium text-white"
                        style={{ backgroundColor: oklchBg }}
                        onClick={() => copyToClipboard(oklchBg)}
                        title="Click to copy OKLCH value"
                      >
                        <span className="absolute left-1 top-1 text-xs opacity-75">
                          APCACH
                        </span>
                        {color.name}
                      </div>
                      <div
                        className={`relative flex h-12 cursor-pointer items-center justify-center text-xs font-medium text-white ${color.bgClass}`}
                        onClick={() => copyToClipboard(color.bgClass)}
                        title={`Click to copy ${color.bgClass}`}
                      >
                        <span className="absolute left-1 top-1 text-xs opacity-75">
                          TW
                        </span>
                        {color.name}
                      </div>
                      <div className="p-2 text-xs">
                        <div className="text-gray-600">
                          Original: {color.hex}
                        </div>
                        <div className="mb-1 text-gray-600">
                          Tailwind: {color.bgClass}
                        </div>
                        <div className="break-all font-mono text-xs">
                          APCACH:{' '}
                          {copiedText === oklchBg ? '✓ Copied!' : oklchBg}
                        </div>
                        <div className="mt-1 flex gap-1">
                          <button
                            onClick={() => copyToClipboard(color.bgClass)}
                            className="rounded bg-blue-100 px-2 py-1 text-xs hover:bg-blue-200"
                          >
                            {copiedText === color.bgClass ? '✓' : 'TW Class'}
                          </button>
                          <button
                            onClick={() => copyToClipboard(oklchBg)}
                            className="rounded bg-purple-100 px-2 py-1 text-xs hover:bg-purple-200"
                          >
                            {copiedText === oklchBg ? '✓' : 'OKLCH'}
                          </button>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Foreground Tests */}
            <div>
              <h4 className="mb-3 font-medium">Foreground Tests (APCACH)</h4>
              <div className="grid grid-cols-2 gap-3">
                {testColors.map((color) => {
                  // Use correct APCACH API to generate foreground variants
                  // For foreground, use lower lightness for better contrast
                  const fgLightness = scenario.lightness > 50 ? 20 : 85 // Opposite contrast
                  const fgResult = apcach(
                    fgLightness,
                    scenario.chroma,
                    scenario.hue
                  )

                  // Debug what we're getting
                  console.log(`Debug FG ${color.name}:`, {
                    original: color.hex,
                    apcachResult: fgResult,
                    lightness: fgLightness,
                    chroma: scenario.chroma,
                    hue: scenario.hue,
                  })

                  // Format using apcachToCss
                  let oklchFg = ''
                  try {
                    // Use apcachToCss to convert APCACH color to OKLCH string
                    oklchFg = apcachToCss(fgResult, 'oklch')

                    // Fallback if conversion fails
                    if (!oklchFg) {
                      oklchFg = color.hex
                      console.warn(
                        `APCACH conversion failed for FG ${color.name}, using original color`
                      )
                    }
                  } catch (error) {
                    console.error('Error formatting foreground color:', error)
                    oklchFg = color.hex // Fallback to original hex
                  }

                  return (
                    <div
                      key={`fg-${color.name}`}
                      className="overflow-hidden rounded-lg border"
                    >
                      <div
                        className={`flex h-16 cursor-pointer items-center justify-center bg-gray-100 text-sm font-medium ${color.textClass}`}
                        onClick={() => copyToClipboard(color.textClass)}
                        title={`Click to copy ${color.textClass}`}
                      >
                        {color.name}
                      </div>
                      <div className="p-2 text-xs">
                        <div className="text-gray-600">
                          Original: {color.hex}
                        </div>
                        <div className="mb-1 text-gray-600">
                          Tailwind: {color.textClass}
                        </div>
                        <div className="break-all font-mono text-xs">
                          APCACH:{' '}
                          {copiedText === oklchFg ? '✓ Copied!' : oklchFg}
                        </div>
                        <div className="mt-1 flex gap-1">
                          <button
                            onClick={() => copyToClipboard(color.textClass)}
                            className="rounded bg-green-100 px-2 py-1 text-xs hover:bg-green-200"
                          >
                            {copiedText === color.textClass ? '✓' : 'TW Class'}
                          </button>
                          <button
                            onClick={() => copyToClipboard(oklchFg)}
                            className="rounded bg-purple-100 px-2 py-1 text-xs hover:bg-purple-200"
                          >
                            {copiedText === oklchFg ? '✓' : 'OKLCH'}
                          </button>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Custom Testing */}
      <div className="rounded-lg bg-blue-50 p-6">
        <h3 className="mb-4 text-lg font-semibold">Custom Test Values</h3>
        <p className="mb-4 text-sm text-gray-600">
          Edit the values in _base.ts to test different scenarios
        </p>
        <div className="rounded border bg-white p-3 font-mono text-xs">
          <div>// Example usage:</div>
          <div>const bgColor = apcach(crToBg("#2e1c08", 60), 0.042, 66.4);</div>
          <div>const fgColor = apcach(crToFg("#2e1c08", 60), 0.042, 66.4);</div>
        </div>
      </div>
    </div>
  )
}

const ColorsPage: React.FC = () => {
  const [copiedText, setCopiedText] = useState<string>('')

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedText(text)
      setTimeout(() => setCopiedText(''), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }
  const standardColors = [
    'red',
    'orange',
    'yellow',
    'lime',
    'green',
    'emerald',
    'teal',
    'cyan',
    'sky',
    'blue',
    'indigo',
    'purple',
    'pink',
    'rose',
  ]

  const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]

  const customColors = [
    // Nature/Earth Colors
    {
      name: 'gordons-green',
      bg: 'bg-gordons-green',
      text: 'text-gordons-green',
      description: 'Dark green',
    },
    {
      name: 'gumleaf',
      bg: 'bg-gumleaf',
      text: 'text-gumleaf',
      description: 'Mint green',
    },
    {
      name: 'mirage',
      bg: 'bg-mirage',
      text: 'text-mirage',
      description: 'Dark blue',
    },
    {
      name: 'coral-tree',
      bg: 'bg-coral-tree',
      text: 'text-coral-tree',
      description: 'Coral pink',
    },

    // Warm/Gold Colors
    {
      name: 'astra',
      bg: 'bg-astra',
      text: 'text-astra',
      description: 'Light gold',
    },
    {
      name: 'tana',
      bg: 'bg-tana',
      text: 'text-tana',
      description: 'Light gold',
    },
    {
      name: 'corn',
      bg: 'bg-corn',
      text: 'text-corn',
      description: 'Bright yellow',
    },
    {
      name: 'highball',
      bg: 'bg-highball',
      text: 'text-highball',
      description: 'Olive',
    },

    // Brown/Earth Tones
    {
      name: 'spice',
      bg: 'bg-spice',
      text: 'text-spice',
      description: 'Brown',
    },
    {
      name: 'west-coast',
      bg: 'bg-west-coast',
      text: 'text-west-coast',
      description: 'Dark olive',
    },
    {
      name: 'jacko-bean',
      bg: 'bg-jacko-bean',
      text: 'text-jacko-bean',
      description: 'Dark brown',
    },
    {
      name: 'madras',
      bg: 'bg-madras',
      text: 'text-madras',
      description: 'Metallic bronze',
    },

    // Muted Colors
    {
      name: 'sandstone',
      bg: 'bg-sandstone',
      text: 'text-sandstone',
      description: 'Medium brown',
    },
    {
      name: 'schooner',
      bg: 'bg-schooner',
      text: 'text-schooner',
      description: 'Gray brown',
    },
    {
      name: 'ironside-gray',
      bg: 'bg-ironside-gray',
      text: 'text-ironside-gray',
      description: 'Medium gray',
    },
    {
      name: 'crowshead',
      bg: 'bg-crowshead',
      text: 'text-crowshead',
      description: 'Very dark brown',
    },

    // Dark Colors
    {
      name: 'onion',
      bg: 'bg-onion',
      text: 'text-onion',
      description: 'Dark brown',
    },
    {
      name: 'sepia-black',
      bg: 'bg-sepia-black',
      text: 'text-sepia-black',
      description: 'Dark red',
    },
    {
      name: 'pohutukawa',
      bg: 'bg-pohutukawa',
      text: 'text-pohutukawa',
      description: 'Dark burgundy',
    },
  ]

  // Helper function to get the color class
  const getColorClass = (color: string, shade: number) => {
    // List of all possible color classes to ensure they're generated
    const colorClasses = {
      red: {
        50: 'bg-red-50',
        100: 'bg-red-100',
        200: 'bg-red-200',
        300: 'bg-red-300',
        400: 'bg-red-400',
        500: 'bg-red-500',
        600: 'bg-red-600',
        700: 'bg-red-700',
        800: 'bg-red-800',
        900: 'bg-red-900',
      },
      orange: {
        50: 'bg-orange-50',
        100: 'bg-orange-100',
        200: 'bg-orange-200',
        300: 'bg-orange-300',
        400: 'bg-orange-400',
        500: 'bg-orange-500',
        600: 'bg-orange-600',
        700: 'bg-orange-700',
        800: 'bg-orange-800',
        900: 'bg-orange-900',
      },
      yellow: {
        50: 'bg-yellow-50',
        100: 'bg-yellow-100',
        200: 'bg-yellow-200',
        300: 'bg-yellow-300',
        400: 'bg-yellow-400',
        500: 'bg-yellow-500',
        600: 'bg-yellow-600',
        700: 'bg-yellow-700',
        800: 'bg-yellow-800',
        900: 'bg-yellow-900',
      },
      lime: {
        50: 'bg-lime-50',
        100: 'bg-lime-100',
        200: 'bg-lime-200',
        300: 'bg-lime-300',
        400: 'bg-lime-400',
        500: 'bg-lime-500',
        600: 'bg-lime-600',
        700: 'bg-lime-700',
        800: 'bg-lime-800',
        900: 'bg-lime-900',
      },
      green: {
        50: 'bg-green-50',
        100: 'bg-green-100',
        200: 'bg-green-200',
        300: 'bg-green-300',
        400: 'bg-green-400',
        500: 'bg-green-500',
        600: 'bg-green-600',
        700: 'bg-green-700',
        800: 'bg-green-800',
        900: 'bg-green-900',
      },
      emerald: {
        50: 'bg-emerald-50',
        100: 'bg-emerald-100',
        200: 'bg-emerald-200',
        300: 'bg-emerald-300',
        400: 'bg-emerald-400',
        500: 'bg-emerald-500',
        600: 'bg-emerald-600',
        700: 'bg-emerald-700',
        800: 'bg-emerald-800',
        900: 'bg-emerald-900',
      },
      teal: {
        50: 'bg-teal-50',
        100: 'bg-teal-100',
        200: 'bg-teal-200',
        300: 'bg-teal-300',
        400: 'bg-teal-400',
        500: 'bg-teal-500',
        600: 'bg-teal-600',
        700: 'bg-teal-700',
        800: 'bg-teal-800',
        900: 'bg-teal-900',
      },
      cyan: {
        50: 'bg-cyan-50',
        100: 'bg-cyan-100',
        200: 'bg-cyan-200',
        300: 'bg-cyan-300',
        400: 'bg-cyan-400',
        500: 'bg-cyan-500',
        600: 'bg-cyan-600',
        700: 'bg-cyan-700',
        800: 'bg-cyan-800',
        900: 'bg-cyan-900',
      },
      sky: {
        50: 'bg-sky-50',
        100: 'bg-sky-100',
        200: 'bg-sky-200',
        300: 'bg-sky-300',
        400: 'bg-sky-400',
        500: 'bg-sky-500',
        600: 'bg-sky-600',
        700: 'bg-sky-700',
        800: 'bg-sky-800',
        900: 'bg-sky-900',
      },
      blue: {
        50: 'bg-blue-50',
        100: 'bg-blue-100',
        200: 'bg-blue-200',
        300: 'bg-blue-300',
        400: 'bg-blue-400',
        500: 'bg-blue-500',
        600: 'bg-blue-600',
        700: 'bg-blue-700',
        800: 'bg-blue-800',
        900: 'bg-blue-900',
      },
      indigo: {
        50: 'bg-indigo-50',
        100: 'bg-indigo-100',
        200: 'bg-indigo-200',
        300: 'bg-indigo-300',
        400: 'bg-indigo-400',
        500: 'bg-indigo-500',
        600: 'bg-indigo-600',
        700: 'bg-indigo-700',
        800: 'bg-indigo-800',
        900: 'bg-indigo-900',
      },
      purple: {
        50: 'bg-purple-50',
        100: 'bg-purple-100',
        200: 'bg-purple-200',
        300: 'bg-purple-300',
        400: 'bg-purple-400',
        500: 'bg-purple-500',
        600: 'bg-purple-600',
        700: 'bg-purple-700',
        800: 'bg-purple-800',
        900: 'bg-purple-900',
      },
      pink: {
        50: 'bg-pink-50',
        100: 'bg-pink-100',
        200: 'bg-pink-200',
        300: 'bg-pink-300',
        400: 'bg-pink-400',
        500: 'bg-pink-500',
        600: 'bg-pink-600',
        700: 'bg-pink-700',
        800: 'bg-pink-800',
        900: 'bg-pink-900',
      },
      rose: {
        50: 'bg-rose-50',
        100: 'bg-rose-100',
        200: 'bg-rose-200',
        300: 'bg-rose-300',
        400: 'bg-rose-400',
        500: 'bg-rose-500',
        600: 'bg-rose-600',
        700: 'bg-rose-700',
        800: 'bg-rose-800',
        900: 'bg-rose-900',
      },
    }

    return (
      colorClasses[color as keyof typeof colorClasses]?.[
        shade as keyof (typeof colorClasses)[keyof typeof colorClasses]
      ] || `bg-${color}-${shade}`
    )
  }

  return (
    <div className="relative mx-auto max-w-7xl space-y-12 p-8">
      {/* Copy Success Toast */}
      {copiedText && (
        <div className="fixed right-4 top-4 z-50 animate-bounce rounded-lg bg-green-500 px-4 py-2 text-white shadow-lg">
          ✓ Copied: {copiedText}
        </div>
      )}

      <div className="mb-12 text-center">
        <h1 className="font-heading mb-4 text-4xl font-bold">
          Color System Testing
        </h1>
        <p className="font-body text-gray-600">
          OKLCH color palette and custom colors - Click any color or button to
          copy CSS classes
        </p>
      </div>

      {/* Button Contrast Generator */}
      <section className="border-b pb-8">
        <h2 className="font-heading mb-6 text-2xl font-semibold">
          Button Contrast Generator
        </h2>
        <p className="mb-6 text-gray-600">
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
        <h2 className="font-heading mb-6 text-2xl font-semibold">
          APCACH vs Culori Comparison
        </h2>
        <p className="mb-6 text-gray-600">
          Side-by-side comparison of APCACH and Culori contrast calculations to
          see the differences
        </p>
        <APCACHvsCuloriComparison copyToClipboard={copyToClipboard} />
      </section>

      {/* Contrast Testing Section */}
      <section className="border-b pb-8">
        <h2 className="font-heading mb-6 text-2xl font-semibold">
          APCACH Contrast Testing
        </h2>
        <p className="mb-6 text-gray-600">
          Testing contrast calculations with apcach library - background and
          foreground functions
        </p>
        <ContrastTestSwatches
          copyToClipboard={copyToClipboard}
          copiedText={copiedText}
        />
      </section>

      {/* Custom Colors */}
      <section className="border-b pb-8">
        <h2 className="font-heading mb-6 text-2xl font-semibold">
          Custom OKLCH Colors
        </h2>
        <p className="mb-6 text-gray-600">
          Custom color palette converted to OKLCH for better color accuracy and
          consistency
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {customColors.map((color) => (
            <div key={color.name} className="space-y-3">
              <div
                className={`${color.bg} flex h-24 cursor-pointer items-center justify-center rounded-lg shadow-md transition-all hover:ring-2 hover:ring-blue-300`}
                onClick={() => copyToClipboard(color.bg)}
                title={`Click to copy ${color.bg}`}
              >
                <span className="px-2 text-center text-sm font-semibold text-white drop-shadow">
                  {color.name}
                </span>
              </div>
              <div className="space-y-2">
                <div className="text-center">
                  <p className="text-sm font-medium capitalize">
                    {color.name.replace(/-/g, ' ')}
                  </p>
                  <p className="text-xs text-gray-500">{color.description}</p>
                </div>
                <div className="space-y-1 text-xs text-gray-600">
                  <div className="flex items-center justify-between">
                    <code className="flex-1 rounded bg-gray-100 px-2 py-1 text-xs">
                      {color.bg}
                    </code>
                    <button
                      onClick={() => copyToClipboard(color.bg)}
                      className="ml-2 rounded bg-blue-100 px-2 py-1 text-xs transition-colors hover:bg-blue-200"
                    >
                      {copiedText === color.bg ? '✓' : '📋'}
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <code className="flex-1 rounded bg-gray-100 px-2 py-1 text-xs">
                      {color.text}
                    </code>
                    <button
                      onClick={() => copyToClipboard(color.text)}
                      className="ml-2 rounded bg-blue-100 px-2 py-1 text-xs transition-colors hover:bg-blue-200"
                    >
                      {copiedText === color.text ? '✓' : '📋'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Color Harmony Examples */}
      <section className="border-b pb-8">
        <h2 className="font-heading mb-6 text-2xl font-semibold">
          Color Harmony & Usage Examples
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Nature Theme */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Nature Theme</h3>
            <div className="space-y-2">
              <div className="bg-gordons-green flex items-center justify-between rounded p-3 text-white">
                <span>Gordons Green</span>
                <button
                  onClick={() => copyToClipboard('bg-gordons-green')}
                  className="rounded bg-white/20 px-2 py-1 text-xs"
                >
                  📋
                </button>
              </div>
              <div className="bg-gumleaf flex items-center justify-between rounded p-3 text-gray-900">
                <span>Gumleaf</span>
                <button
                  onClick={() => copyToClipboard('bg-gumleaf')}
                  className="rounded bg-white/20 px-2 py-1 text-xs"
                >
                  📋
                </button>
              </div>
              <div className="bg-spice flex items-center justify-between rounded p-3 text-white">
                <span>Spice</span>
                <button
                  onClick={() => copyToClipboard('bg-spice')}
                  className="rounded bg-white/20 px-2 py-1 text-xs"
                >
                  📋
                </button>
              </div>
            </div>
          </div>

          {/* Warm Tones */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Warm Tones</h3>
            <div className="space-y-2">
              <div className="bg-corn flex items-center justify-between rounded p-3 text-gray-900">
                <span>Corn</span>
                <button
                  onClick={() => copyToClipboard('bg-corn')}
                  className="rounded bg-white/20 px-2 py-1 text-xs"
                >
                  📋
                </button>
              </div>
              <div className="bg-astra flex items-center justify-between rounded p-3 text-gray-900">
                <span>Astra</span>
                <button
                  onClick={() => copyToClipboard('bg-astra')}
                  className="rounded bg-white/20 px-2 py-1 text-xs"
                >
                  📋
                </button>
              </div>
              <div className="bg-coral-tree flex items-center justify-between rounded p-3 text-white">
                <span>Coral Tree</span>
                <button
                  onClick={() => copyToClipboard('bg-coral-tree')}
                  className="rounded bg-white/20 px-2 py-1 text-xs"
                >
                  📋
                </button>
              </div>
            </div>
          </div>

          {/* Dark & Muted */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Dark & Muted</h3>
            <div className="space-y-2">
              <div className="bg-mirage flex items-center justify-between rounded p-3 text-white">
                <span>Mirage</span>
                <button
                  onClick={() => copyToClipboard('bg-mirage')}
                  className="rounded bg-white/20 px-2 py-1 text-xs"
                >
                  📋
                </button>
              </div>
              <div className="bg-sandstone flex items-center justify-between rounded p-3 text-white">
                <span>Sandstone</span>
                <button
                  onClick={() => copyToClipboard('bg-sandstone')}
                  className="rounded bg-white/20 px-2 py-1 text-xs"
                >
                  📋
                </button>
              </div>
              <div className="bg-crowshead flex items-center justify-between rounded p-3 text-white">
                <span>Crowshead</span>
                <button
                  onClick={() => copyToClipboard('bg-crowshead')}
                  className="rounded bg-white/20 px-2 py-1 text-xs"
                >
                  📋
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Working Color Examples */}
      <section className="border-b pb-8">
        <h2 className="font-heading mb-6 text-2xl font-semibold">
          Verified Working Colors
        </h2>
        <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
          {/* These should definitely work */}
          <div className="space-y-2">
            <div className="flex h-16 items-center justify-center rounded bg-red-500 shadow-sm">
              <span className="text-sm font-medium text-white">red-500</span>
            </div>
            <div className="text-center">
              <p className="mb-1 text-xs font-medium text-gray-700">Red 500</p>
              <button
                onClick={() => copyToClipboard('bg-red-500')}
                className="rounded bg-gray-100 px-2 py-1 text-xs transition-colors hover:bg-gray-200"
              >
                {copiedText === 'bg-red-500' ? '✓ Copied!' : 'Copy CSS'}
              </button>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex h-16 items-center justify-center rounded bg-blue-600 shadow-sm">
              <span className="text-sm font-medium text-white">blue-600</span>
            </div>
            <div className="text-center">
              <p className="mb-1 text-xs font-medium text-gray-700">Blue 600</p>
              <button
                onClick={() => copyToClipboard('bg-blue-600')}
                className="rounded bg-gray-100 px-2 py-1 text-xs transition-colors hover:bg-gray-200"
              >
                {copiedText === 'bg-blue-600' ? '✓ Copied!' : 'Copy CSS'}
              </button>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex h-16 items-center justify-center rounded bg-green-500 shadow-sm">
              <span className="text-sm font-medium text-white">green-500</span>
            </div>
            <div className="text-center">
              <p className="mb-1 text-xs font-medium text-gray-700">
                Green 500
              </p>
              <button
                onClick={() => copyToClipboard('bg-green-500')}
                className="rounded bg-gray-100 px-2 py-1 text-xs transition-colors hover:bg-gray-200"
              >
                {copiedText === 'bg-green-500' ? '✓ Copied!' : 'Copy CSS'}
              </button>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex h-16 items-center justify-center rounded bg-purple-600 shadow-sm">
              <span className="text-sm font-medium text-white">purple-600</span>
            </div>
            <div className="text-center">
              <p className="mb-1 text-xs font-medium text-gray-700">
                Purple 600
              </p>
              <button
                onClick={() => copyToClipboard('bg-purple-600')}
                className="rounded bg-gray-100 px-2 py-1 text-xs transition-colors hover:bg-gray-200"
              >
                {copiedText === 'bg-purple-600' ? '✓ Copied!' : 'Copy CSS'}
              </button>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex h-16 items-center justify-center rounded bg-yellow-400 shadow-sm">
              <span className="text-sm font-medium text-gray-900">
                yellow-400
              </span>
            </div>
            <div className="text-center">
              <p className="mb-1 text-xs font-medium text-gray-700">
                Yellow 400
              </p>
              <button
                onClick={() => copyToClipboard('bg-yellow-400')}
                className="rounded bg-gray-100 px-2 py-1 text-xs transition-colors hover:bg-gray-200"
              >
                {copiedText === 'bg-yellow-400' ? '✓ Copied!' : 'Copy CSS'}
              </button>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex h-16 items-center justify-center rounded bg-orange-500 shadow-sm">
              <span className="text-sm font-medium text-white">orange-500</span>
            </div>
            <div className="text-center">
              <p className="mb-1 text-xs font-medium text-gray-700">
                Orange 500
              </p>
              <button
                onClick={() => copyToClipboard('bg-orange-500')}
                className="rounded bg-gray-100 px-2 py-1 text-xs transition-colors hover:bg-gray-200"
              >
                {copiedText === 'bg-orange-500' ? '✓ Copied!' : 'Copy CSS'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Standard Color Palette */}
      <section className="border-b pb-8">
        <h2 className="font-heading mb-6 text-2xl font-semibold">
          Standard Colors (OKLCH)
        </h2>
        <div className="space-y-8">
          {standardColors.map((color) => (
            <div key={color} className="space-y-3">
              <h3 className="font-heading text-lg font-medium capitalize">
                {color}
              </h3>
              <div className="grid grid-cols-5 gap-2 md:grid-cols-10">
                {shades.map((shade) => (
                  <div key={shade} className="space-y-2">
                    <div
                      className={`${getColorClass(color, shade)} flex h-16 cursor-pointer items-end justify-center rounded border border-gray-200 pb-1 shadow-sm transition-all hover:ring-2 hover:ring-blue-300`}
                      onClick={() => copyToClipboard(`bg-${color}-${shade}`)}
                      title={`Click to copy bg-${color}-${shade}`}
                    >
                      <span
                        className={`text-xs font-medium ${shade > 400 ? 'text-white' : 'text-gray-900'}`}
                      >
                        {shade}
                      </span>
                    </div>
                    <div className="text-center">
                      <p className="mb-1 text-xs font-medium capitalize text-gray-700">
                        {color} {shade}
                      </p>
                      <button
                        onClick={() => copyToClipboard(`bg-${color}-${shade}`)}
                        className="rounded bg-gray-100 px-1 py-0.5 text-xs transition-colors hover:bg-gray-200"
                      >
                        {copiedText === `bg-${color}-${shade}` ? '✓' : '📋'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Color Usage Examples */}
      <section className="border-b pb-8">
        <h2 className="font-heading mb-6 text-2xl font-semibold">
          Usage Examples
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Background Colors */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Background Colors</h3>
            <div className="space-y-2">
              <div className="rounded bg-blue-500 p-3 text-white">
                bg-blue-500
              </div>
              <div className="rounded bg-green-400 p-3 text-white">
                bg-green-400
              </div>
              <div className="bg-gordons-green rounded p-3 text-white">
                bg-gordons-green
              </div>
              <div className="bg-coral-tree rounded p-3 text-white">
                bg-coral-tree
              </div>
            </div>
          </div>

          {/* Text Colors */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Text Colors</h3>
            <div className="space-y-2">
              <p className="text-lg text-red-500">text-red-500</p>
              <p className="text-lg text-blue-600">text-blue-600</p>
              <p className="text-gordons-green text-lg">text-gordons-green</p>
              <p className="text-mirage text-lg">text-mirage</p>
              <p className="text-spice text-lg">text-spice</p>
            </div>
          </div>

          {/* Border Colors */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Border Colors</h3>
            <div className="space-y-2">
              <div className="rounded border-2 border-red-500 p-3">
                border-red-500
              </div>
              <div className="border-gordons-green rounded border-2 p-3">
                border-gordons-green
              </div>
              <div className="border-coral-tree rounded border-2 p-3">
                border-coral-tree
              </div>
              <div className="border-sandstone rounded border-2 p-3">
                border-sandstone
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CSS Variables */}
      <section>
        <h2 className="font-heading mb-6 text-2xl font-semibold">
          CSS Variable Colors
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Direct CSS Variables</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="flex-1 rounded bg-[var(--color-test-sky)] p-3 text-white">
                  var(--color-test-sky)
                </div>
                <button
                  onClick={() => copyToClipboard('bg-[var(--color-test-sky)]')}
                  className="rounded bg-blue-100 px-2 py-1 text-xs transition-colors hover:bg-blue-200"
                >
                  {copiedText === 'bg-[var(--color-test-sky)]' ? '✓' : '📋'}
                </button>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 rounded bg-[var(--color-test-indigo)] p-3 text-white">
                  var(--color-test-indigo)
                </div>
                <button
                  onClick={() =>
                    copyToClipboard('bg-[var(--color-test-indigo)]')
                  }
                  className="rounded bg-blue-100 px-2 py-1 text-xs transition-colors hover:bg-blue-200"
                >
                  {copiedText === 'bg-[var(--color-test-indigo)]' ? '✓' : '📋'}
                </button>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 rounded bg-[var(--color-my-mint)] p-3 text-white">
                  var(--color-my-mint)
                </div>
                <button
                  onClick={() => copyToClipboard('bg-[var(--color-my-mint)]')}
                  className="rounded bg-blue-100 px-2 py-1 text-xs transition-colors hover:bg-blue-200"
                >
                  {copiedText === 'bg-[var(--color-my-mint)]' ? '✓' : '📋'}
                </button>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 rounded bg-[var(--color-my-coral)] p-3 text-white">
                  var(--color-my-coral)
                </div>
                <button
                  onClick={() => copyToClipboard('bg-[var(--color-my-coral)]')}
                  className="rounded bg-blue-100 px-2 py-1 text-xs transition-colors hover:bg-blue-200"
                >
                  {copiedText === 'bg-[var(--color-my-coral)]' ? '✓' : '📋'}
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">OKLCH Values</h3>
            <div className="space-y-2 font-mono text-sm">
              <div className="flex items-center gap-2">
                <div className="flex-1 rounded bg-gray-100 p-2">
                  --color-test-sky: oklch(74.6% 0.16 232.661)
                </div>
                <button
                  onClick={() => copyToClipboard('oklch(74.6% 0.16 232.661)')}
                  className="rounded bg-blue-100 px-2 py-1 text-xs transition-colors hover:bg-blue-200"
                >
                  {copiedText === 'oklch(74.6% 0.16 232.661)' ? '✓' : '📋'}
                </button>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 rounded bg-gray-100 p-2">
                  --color-test-indigo: oklch(87% 0.065 274.039)
                </div>
                <button
                  onClick={() => copyToClipboard('oklch(87% 0.065 274.039)')}
                  className="rounded bg-blue-100 px-2 py-1 text-xs transition-colors hover:bg-blue-200"
                >
                  {copiedText === 'oklch(87% 0.065 274.039)' ? '✓' : '📋'}
                </button>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 rounded bg-gray-100 p-2">
                  --color-my-mint: oklch(85% 0.12 160)
                </div>
                <button
                  onClick={() => copyToClipboard('oklch(85% 0.12 160)')}
                  className="rounded bg-blue-100 px-2 py-1 text-xs transition-colors hover:bg-blue-200"
                >
                  {copiedText === 'oklch(85% 0.12 160)' ? '✓' : '📋'}
                </button>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 rounded bg-gray-100 p-2">
                  --color-my-coral: oklch(70% 0.15 30)
                </div>
                <button
                  onClick={() => copyToClipboard('oklch(70% 0.15 30)')}
                  className="rounded bg-blue-100 px-2 py-1 text-xs transition-colors hover:bg-blue-200"
                >
                  {copiedText === 'oklch(70% 0.15 30)' ? '✓' : '📋'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ColorsPage
