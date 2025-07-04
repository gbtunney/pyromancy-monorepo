import React from "react";

const GradientExamples: React.FC = () => {
  return (
    <div>
      <h2
        style={{
          background:
            "linear-gradient(to right, rgb(202, 138, 4), rgb(220, 38, 38))",
        }}
      >
        GRADIENTS DEBUG
      </h2>

      <button className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
        fancy gradient
      </button>

      {/* Simple test with basic colors */}
      <div className="h-20 bg-red-500 rounded flex items-center justify-center text-white mb-2">
        Basic red background (should work)
      </div>

      <div className="h-20 bg-gradient-to-r rounded flex items-center justify-center text-white mb-2">
        Just bg-gradient-to-r (no colors)
      </div>

      <div className="h-20 from-red-500 to-blue-500 rounded flex items-center justify-center text-white mb-2">
        Just from/to colors (no gradient direction)
      </div>

      {/* Debug: Simple inline style gradient to compare */}
      <div
        className="h-20 rounded flex items-center justify-center text-white mb-4"
        style={{ background: "linear-gradient(to right, #3b82f6, #8b5cf6)" }}
      >
        Inline Style Gradient (for comparison)
      </div>

      {/* More gradient examples */}
      <div className="space-y-4 p-4">
        <div className="h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded flex items-center justify-center text-white">
          Left to Right Gradient
        </div>
        <div className="h-20 bg-gradient-to-t from-green-400 to-blue-500 rounded flex items-center justify-center text-white">
          Bottom to Top Gradient
        </div>
        <div className="h-20 bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 rounded flex items-center justify-center text-white">
          3-Color Diagonal Gradient
        </div>
        <div className="h-20 bg-gradient-to-r from-gordons-green to-white rounded flex items-center justify-center text-white">
          Gordons green Custom Colors Gradient
        </div>

        {/* Try with arbitrary value syntax - different formats */}
        <div className="h-20 bg-gradient-to-r from-[#2a322a] to-white rounded flex items-center justify-center text-white">
          UnoCSS arbitrary value: from-[#2a322a] to-white
        </div>

        {/* Try with RGB format */}
        <div className="h-20 bg-gradient-to-r from-[rgb(42,50,42)] to-white rounded flex items-center justify-center text-white">
          UnoCSS arbitrary RGB: from-[rgb(42,50,42)] to-white
        </div>

        {/* Custom OKLCH colors from preset */}
        <div className="h-20 bg-oklch-green rounded flex items-center justify-center text-white">
          Preset OKLCH Green (bg-oklch-green)
        </div>

        <div className="h-20 bg-gradient-to-r from-oklch-green to-oklch-mint rounded flex items-center justify-center text-white">
          OKLCH Preset Gradient: oklch-green to oklch-mint
        </div>

        <div className="h-20 bg-gradient-to-r from-oklch-coral to-oklch-gold rounded flex items-center justify-center text-white">
          OKLCH Preset Gradient: oklch-coral to oklch-gold
        </div>

        {/* OKLCH color examples */}
        <div className="h-20 bg-gradient-to-r from-[oklch(0.3_0.1_150)] to-[oklch(0.9_0.05_60)] rounded flex items-center justify-center text-white">
          OKLCH gradient: dark green to light yellow
        </div>

        <div className="h-20 bg-[oklch(0.25_0.08_160)] rounded flex items-center justify-center text-white">
          Solid OKLCH background (dark green)
        </div>

        <div className="h-20 bg-gradient-to-r from-[oklch(0.6_0.2_340)] to-[oklch(0.8_0.15_200)] rounded flex items-center justify-center text-white">
          OKLCH gradient: pink to cyan
        </div>

        {/* Try direct CSS custom property */}
        <div
          className="h-20 bg-gradient-to-r rounded flex items-center justify-center text-white"
          style={
            {
              "--un-gradient-from": "#2a322a",
              "--un-gradient-to": "white",
              backgroundImage:
                "linear-gradient(to right, var(--un-gradient-from), var(--un-gradient-to))",
            } as React.CSSProperties
          }
        >
          Direct CSS variables approach
        </div>

        {/* Debug custom colors */}
        <div className="h-20 bg-gordons-green rounded flex items-center justify-center text-white">
          Just bg-gordons-green (should be dark green #2a322a)
        </div>

        <div className="h-20 bg-oklch-green rounded flex items-center justify-center text-white">
          OKLCH version: bg-oklch-green (same color in OKLCH)
        </div>

        {/* Compare different color formats for the same color */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="h-20 bg-[#2a322a] rounded flex items-center justify-center text-white text-sm">
            Arbitrary Hex: bg-[#2a322a]
          </div>
          <div className="h-20 bg-[rgb(42,50,42)] rounded flex items-center justify-center text-white text-sm">
            Arbitrary RGB: bg-[rgb(42,50,42)]
          </div>
          <div className="h-20 bg-[oklch(0.19_0.02_120)] rounded flex items-center justify-center text-white text-sm">
            Arbitrary OKLCH: bg-[oklch(0.19_0.02_120)]
          </div>
        </div>

        {/* Try with explicit hex value */}
        <div
          className="h-20 rounded flex items-center justify-center text-white"
          style={{ background: "linear-gradient(to right, #2a322a, white)" }}
        >
          Inline gordons-green hex (#2a322a) to white
        </div>
      </div>

      <hr />

      {/* DEMONSTRATION: Standard Tailwind colors are already OKLCH! */}
      <div className="p-4 space-y-4">
        <h2 className="text-2xl font-bold">
          🎉 Standard Tailwind Colors are Already OKLCH!
        </h2>
        <p className="text-sm text-gray-600">
          When using presetWind4, all these colors are already in OKLCH format:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="h-20 bg-lime-500 rounded flex items-center justify-center text-white font-semibold">
            bg-lime-500 (Already OKLCH!)
          </div>
          <div className="h-20 bg-gradient-to-r from-lime-600 to-lime-300 rounded flex items-center justify-center text-white font-semibold">
            from-lime-600 to-lime-300 (OKLCH Gradient!)
          </div>
          <div className="h-20 bg-red-500 rounded flex items-center justify-center text-white font-semibold">
            bg-red-500 (Already OKLCH!)
          </div>
          <div className="h-20 bg-gradient-to-r from-red-500 to-orange-400 rounded flex items-center justify-center text-white font-semibold">
            from-red-500 to-orange-400 (OKLCH!)
          </div>
          <div className="h-20 bg-blue-500 rounded flex items-center justify-center text-white font-semibold">
            bg-blue-500 (Already OKLCH!)
          </div>
          <div className="h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded flex items-center justify-center text-white font-semibold">
            from-blue-500 to-purple-500 (OKLCH!)
          </div>
        </div>

        <div className="bg-gray-100 p-4 rounded">
          <p className="text-sm">
            <strong>Summary:</strong> All standard Tailwind colors like{" "}
            <code className="bg-gray-200 px-1 rounded">lime</code>,{" "}
            <code className="bg-gray-200 px-1 rounded">red</code>,{" "}
            <code className="bg-gray-200 px-1 rounded">blue</code>,{" "}
            <code className="bg-gray-200 px-1 rounded">green</code>,{" "}
            <code className="bg-gray-200 px-1 rounded">purple</code>, etc. are
            already OKLCH when using presetWind4! No conversion needed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GradientExamples;
