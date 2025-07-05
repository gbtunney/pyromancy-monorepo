import React, { useState } from "react";

const TypographyPage: React.FC = () => {
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
    <div className="min-h-screen bg-gray-50 py-8 relative">
      {/* Copy Success Toast */}
      {copiedText && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-bounce">
          ✓ Copied: {copiedText}
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12 bg-white shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5 rounded-lg">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-heading mb-4 text-gray-800">
            Typography Showcase
          </h1>
          <p className="text-lg text-gray-600 font-body">
            Exploring our custom typography system with OKLCH colors and CSS
            variables - Click buttons to copy CSS classes
          </p>
        </div>

        {/* Typography Examples */}
        <div className="prose prose-slate max-w-none">
          <h1>Custom Typography with CSS Variables</h1>
          <p className="lead">
            This content demonstrates our custom typography configuration with
            OKLCH colors and CSS font variables, creating a beautiful and
            consistent reading experience.
          </p>

          <h2>Heading Level 2 with Custom Font</h2>
          <p>
            This paragraph demonstrates the <strong>custom body font</strong>{" "}
            and{" "}
            <a
              href="#"
              className="text-gordons-green hover:text-gordons-green/80"
            >
              green link styling
            </a>{" "}
            that we configured in the UnoCSS theme. The typography system
            ensures proper hierarchy and readability.
          </p>

          <h3>Code Examples and Technical Content</h3>
          <p>
            Here's some inline <code>code styling</code> that uses our custom
            colors and proper typography spacing.
          </p>

          <pre>
            <code>{`const example = {
  typography: 'custom',
  colors: 'oklch',
  framework: 'UnoCSS'
};`}</code>
          </pre>

          <blockquote>
            <p>
              This is a blockquote that showcases our custom styling with OKLCH
              colors and proper typography hierarchy. It demonstrates how the
              system handles different content types elegantly.
            </p>
          </blockquote>

          <h3>Lists and Structure</h3>
          <ul>
            <li>Custom list styling with proper spacing</li>
            <li>Consistent font inheritance throughout</li>
            <li>Balanced typography hierarchy</li>
            <li>OKLCH color integration for better color fidelity</li>
          </ul>

          <ol>
            <li>First ordered item with proper numbering</li>
            <li>Second item showing consistent styling</li>
            <li>Third item demonstrating list hierarchy</li>
          </ol>

          <h2>Typography Variations</h2>

          <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
            {/* Font Family Examples */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 font-heading">
                Font Families
              </h3>

              <div className="space-y-3">
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-heading text-lg">Heading Font Family</p>
                    <button
                      onClick={() => copyToClipboard("font-heading")}
                      className="text-xs bg-blue-100 hover:bg-blue-200 px-2 py-1 rounded transition-colors"
                    >
                      {copiedText === "font-heading" ? "✓" : "📋"}
                    </button>
                  </div>
                  <code className="text-sm text-gray-600">font-heading</code>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-heading-alt text-lg">
                      Heading Alt Font Family
                    </p>
                    <button
                      onClick={() => copyToClipboard("font-heading-alt")}
                      className="text-xs bg-blue-100 hover:bg-blue-200 px-2 py-1 rounded transition-colors"
                    >
                      {copiedText === "font-heading-alt" ? "✓" : "📋"}
                    </button>
                  </div>
                  <code className="text-sm text-gray-600">
                    font-heading-alt
                  </code>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-display text-lg">Display Font Family</p>
                    <button
                      onClick={() => copyToClipboard("font-display")}
                      className="text-xs bg-blue-100 hover:bg-blue-200 px-2 py-1 rounded transition-colors"
                    >
                      {copiedText === "font-display" ? "✓" : "📋"}
                    </button>
                  </div>
                  <code className="text-sm text-gray-600">font-display</code>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-body text-lg">Body Font Family</p>
                    <button
                      onClick={() => copyToClipboard("font-body")}
                      className="text-xs bg-blue-100 hover:bg-blue-200 px-2 py-1 rounded transition-colors"
                    >
                      {copiedText === "font-body" ? "✓" : "📋"}
                    </button>
                  </div>
                  <code className="text-sm text-gray-600">font-body</code>
                </div>
              </div>
            </div>

            {/* Size Examples */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 font-heading">
                Text Sizes
              </h3>

              <div className="space-y-3">
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between">
                    <p className="text-xs">Extra Small Text</p>
                    <button
                      onClick={() => copyToClipboard("text-xs")}
                      className="text-xs bg-blue-100 hover:bg-blue-200 px-2 py-1 rounded transition-colors"
                    >
                      {copiedText === "text-xs" ? "✓" : "📋"}
                    </button>
                  </div>
                  <code className="text-xs text-gray-600">text-xs</code>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between">
                    <p className="text-sm">Small Text</p>
                    <button
                      onClick={() => copyToClipboard("text-sm")}
                      className="text-xs bg-blue-100 hover:bg-blue-200 px-2 py-1 rounded transition-colors"
                    >
                      {copiedText === "text-sm" ? "✓" : "📋"}
                    </button>
                  </div>
                  <code className="text-xs text-gray-600">text-sm</code>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between">
                    <p className="text-base">Base Text</p>
                    <button
                      onClick={() => copyToClipboard("text-base")}
                      className="text-xs bg-blue-100 hover:bg-blue-200 px-2 py-1 rounded transition-colors"
                    >
                      {copiedText === "text-base" ? "✓" : "📋"}
                    </button>
                  </div>
                  <code className="text-xs text-gray-600">text-base</code>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between">
                    <p className="text-lg">Large Text</p>
                    <button
                      onClick={() => copyToClipboard("text-lg")}
                      className="text-xs bg-blue-100 hover:bg-blue-200 px-2 py-1 rounded transition-colors"
                    >
                      {copiedText === "text-lg" ? "✓" : "📋"}
                    </button>
                  </div>
                  <code className="text-xs text-gray-600">text-lg</code>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between">
                    <p className="text-xl">Extra Large Text</p>
                    <button
                      onClick={() => copyToClipboard("text-xl")}
                      className="text-xs bg-blue-100 hover:bg-blue-200 px-2 py-1 rounded transition-colors"
                    >
                      {copiedText === "text-xl" ? "✓" : "📋"}
                    </button>
                  </div>
                  <code className="text-xs text-gray-600">text-xl</code>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between">
                    <p className="text-2xl">2XL Text</p>
                    <button
                      onClick={() => copyToClipboard("text-2xl")}
                      className="text-xs bg-blue-100 hover:bg-blue-200 px-2 py-1 rounded transition-colors"
                    >
                      {copiedText === "text-2xl" ? "✓" : "📋"}
                    </button>
                  </div>
                  <code className="text-xs text-gray-600">text-2xl</code>
                </div>
              </div>
            </div>
          </div>

          <h2>Interactive Elements</h2>
          <p>
            Typography should work well with interactive elements and maintain
            consistency across different states.
          </p>

          <div className="not-prose space-y-4 my-6">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Primary Button
            </button>

            <button className="bg-gordons-green text-white px-6 py-3 rounded-lg font-medium hover:bg-gordons-green/90 transition-colors ml-4">
              Custom Color Button
            </button>
          </div>

          <h2>Color Integration</h2>
          <p>
            Our typography system integrates seamlessly with our OKLCH color
            palette, providing consistent and accessible color combinations.
          </p>

          <div className="not-prose grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
            <div className="p-4 bg-blue-100 text-blue-900 rounded-lg text-center">
              <p className="font-semibold">Blue Accent</p>
              <p className="text-sm">OKLCH Color</p>
            </div>

            <div className="p-4 bg-green-100 text-green-900 rounded-lg text-center">
              <p className="font-semibold">Green Accent</p>
              <p className="text-sm">OKLCH Color</p>
            </div>

            <div className="p-4 bg-purple-100 text-purple-900 rounded-lg text-center">
              <p className="font-semibold">Purple Accent</p>
              <p className="text-sm">OKLCH Color</p>
            </div>

            <div className="p-4 bg-orange-100 text-orange-900 rounded-lg text-center">
              <p className="font-semibold">Orange Accent</p>
              <p className="text-sm">OKLCH Color</p>
            </div>
          </div>

          <h2>Responsive Typography</h2>
          <p>
            The typography system is designed to be responsive and work well
            across different screen sizes and devices.
          </p>

          <p className="text-lg leading-relaxed">
            This larger paragraph demonstrates how our typography scales
            beautifully across different viewports while maintaining readability
            and visual hierarchy.
          </p>

          <h2>Accessibility Considerations</h2>
          <p>
            Our typography system prioritizes accessibility with proper contrast
            ratios, readable font sizes, and clear hierarchy markers. The OKLCH
            color space provides better perceptual uniformity and accessibility
            compliance.
          </p>

          <div className="not-prose bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-6">
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">
              Accessibility Note
            </h3>
            <p className="text-yellow-700">
              All typography combinations in this system meet WCAG 2.1 AA
              standards for color contrast and readability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypographyPage;
