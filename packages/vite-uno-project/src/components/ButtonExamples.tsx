import React, { useState } from 'react'

const ButtonExamples: React.FC = () => {
  const [copiedText, setCopiedText] = useState<string>('')

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedText(text)
    setTimeout(() => setCopiedText(''), 2000)
  }

  const ButtonExample = ({
    className,
    children,
    title,
  }: {
    className: string
    children: React.ReactNode
    title: string
  }) => (
    <div className="space-y-2">
      <button className={className}>{children}</button>
      <div className="flex items-center gap-2">
        <code className="text-xs bg-gray-100 px-2 py-1 rounded">
          {className}
        </code>
        <button
          onClick={() => copyToClipboard(className)}
          className="text-xs bg-blue-100 hover:bg-blue-200 px-2 py-1 rounded transition-colors"
        >
          {copiedText === className ? '✓' : '📋'}
        </button>
      </div>
      {title && <p className="text-xs text-gray-600">{title}</p>}
    </div>
  )

  return (
    <div className="max-w-6xl mx-auto p-8 space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Custom Button Examples</h1>
        <p className="text-lg text-gray-600">
          Dynamic button combinations using your custom color palette
        </p>
      </div>

      {/* Basic Custom Combinations */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2">
          Basic Custom Combinations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ButtonExample
            className="btn btn-custom-fg-sandstone-bg-corn"
            title="Earth tone combination"
          >
            Sandstone on Gold
          </ButtonExample>

          <ButtonExample
            className="btn btn-custom-fg-crowshead-bg-gumleaf"
            title="Dark on mint contrast"
          >
            Dark on Mint
          </ButtonExample>

          <ButtonExample
            className="btn btn-custom-fg-white-bg-west-coast"
            title="High contrast combination"
          >
            White on Olive
          </ButtonExample>

          <ButtonExample
            className="btn btn-custom-fg-sepia-black-bg-astra"
            title="Sophisticated pairing"
          >
            Dark on Cream
          </ButtonExample>

          <ButtonExample
            className="btn btn-custom-fg-jacko-bean-bg-schooner"
            title="Neutral brown tones"
          >
            Brown on Gray
          </ButtonExample>

          <ButtonExample
            className="btn btn-custom-fg-schooner-bg-madras"
            title="Monochromatic browns"
          >
            Dark Brown Combo
          </ButtonExample>
        </div>
      </section>

      {/* Outline Buttons with Background */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2">
          Outline Buttons with Background
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ButtonExample
            className="btn btn-outline-custom-fg-sandstone-bg-astra"
            title="Sandstone border on cream"
          >
            Sandstone Border
          </ButtonExample>

          <ButtonExample
            className="btn btn-outline-custom-fg-coral-tree-bg-gumleaf"
            title="Red border on mint"
          >
            Coral Border
          </ButtonExample>

          <ButtonExample
            className="btn btn-outline-custom-fg-pohutukawa-bg-corn"
            title="Burgundy border on gold"
          >
            Burgundy Border
          </ButtonExample>

          <ButtonExample
            className="btn btn-outline-custom-fg-gordons-green-bg-schooner"
            title="Green border on gray"
          >
            Green Border
          </ButtonExample>

          <ButtonExample
            className="btn btn-outline-custom-fg-mirage-bg-highball"
            title="Navy border on blue"
          >
            Navy Border
          </ButtonExample>

          <ButtonExample
            className="btn btn-outline-custom-fg-tana-bg-spice"
            title="Teal border on orange"
          >
            Teal Border
          </ButtonExample>
        </div>
      </section>

      {/* Solid with Custom Hover */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2">
          Solid with Custom Hover
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ButtonExample
            className="btn btn-solid-custom-fg-white-bg-coral-tree-hover-pohutukawa"
            title="Red to burgundy transition"
          >
            Red to Burgundy
          </ButtonExample>

          <ButtonExample
            className="btn btn-solid-custom-fg-white-bg-gordons-green-hover-tana"
            title="Green to teal transition"
          >
            Green to Teal
          </ButtonExample>

          <ButtonExample
            className="btn btn-solid-custom-fg-white-bg-mirage-hover-spice"
            title="Navy to orange transition"
          >
            Navy to Orange
          </ButtonExample>

          <ButtonExample
            className="btn btn-solid-custom-fg-astra-bg-sandstone-hover-west-coast"
            title="Earth tone transitions"
          >
            Earth Tones
          </ButtonExample>

          <ButtonExample
            className="btn btn-solid-custom-fg-corn-bg-crowshead-hover-jacko-bean"
            title="Gold text dark theme"
          >
            Gold on Dark
          </ButtonExample>
        </div>
      </section>

      {/* Soft Buttons */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2">
          Soft Buttons
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ButtonExample
            className="btn btn-soft-custom-fg-crowshead-bg-gumleaf"
            title="Dark text on mint soft background"
          >
            Dark Mint Soft
          </ButtonExample>

          <ButtonExample
            className="btn btn-soft-custom-fg-sepia-black-bg-astra"
            title="Dark text on cream soft background"
          >
            Dark Cream Soft
          </ButtonExample>

          <ButtonExample
            className="btn btn-soft-custom-fg-pohutukawa-bg-coral-tree"
            title="Burgundy theme soft button"
          >
            Burgundy Soft
          </ButtonExample>

          <ButtonExample
            className="btn btn-soft-custom-fg-mirage-bg-tana"
            title="Navy text on teal soft background"
          >
            Navy Teal Soft
          </ButtonExample>

          <ButtonExample
            className="btn btn-soft-custom-fg-west-coast-bg-corn"
            title="Olive text on gold soft background"
          >
            Olive Gold Soft
          </ButtonExample>

          <ButtonExample
            className="btn btn-soft-custom-fg-jacko-bean-bg-highball"
            title="Brown text on blue soft background"
          >
            Brown Blue Soft
          </ButtonExample>
        </div>
      </section>

      {/* Ghost Buttons */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2">
          Ghost Buttons
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ButtonExample
            className="btn btn-ghost-custom-fg-sandstone-hover-astra"
            title="Sandstone text with cream hover"
          >
            Sandstone Ghost
          </ButtonExample>

          <ButtonExample
            className="btn btn-ghost-custom-fg-coral-tree-hover-gumleaf"
            title="Red text with mint hover"
          >
            Coral Ghost
          </ButtonExample>

          <ButtonExample
            className="btn btn-ghost-custom-fg-gordons-green-hover-corn"
            title="Green text with gold hover"
          >
            Green Ghost
          </ButtonExample>

          <ButtonExample
            className="btn btn-ghost-custom-fg-mirage-hover-spice"
            title="Navy text with orange hover"
          >
            Navy Ghost
          </ButtonExample>

          <ButtonExample
            className="btn btn-ghost-custom-fg-pohutukawa-hover-schooner"
            title="Burgundy text with gray hover"
          >
            Burgundy Ghost
          </ButtonExample>
        </div>
      </section>

      {/* Gradient Buttons */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2">
          Gradient Buttons
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ButtonExample
            className="btn btn-gradient-from-coral-tree-to-pohutukawa"
            title="Red gradient transition"
          >
            Red Gradient
          </ButtonExample>

          <ButtonExample
            className="btn btn-gradient-from-gordons-green-to-tana"
            title="Green to teal gradient"
          >
            Green Gradient
          </ButtonExample>

          <ButtonExample
            className="btn btn-gradient-from-mirage-to-spice"
            title="Navy to orange gradient"
          >
            Navy Orange
          </ButtonExample>

          <ButtonExample
            className="btn btn-gradient-from-astra-to-corn"
            title="Cream to gold gradient"
          >
            Cream Gold
          </ButtonExample>

          <ButtonExample
            className="btn btn-gradient-from-sandstone-to-west-coast"
            title="Earth tone gradient"
          >
            Earth Gradient
          </ButtonExample>

          <ButtonExample
            className="btn btn-gradient-from-crowshead-to-jacko-bean"
            title="Dark brown gradient"
          >
            Brown Gradient
          </ButtonExample>
        </div>
      </section>

      {/* Theme-Based Combinations */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2">
          Theme-Based Combinations
        </h2>

        <div className="space-y-8">
          {/* Autumn Theme */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-orange-700">
              🍂 Autumn Theme
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <ButtonExample
                className="btn btn-custom-fg-crowshead-bg-corn"
                title="Dark text on gold"
              >
                Autumn Gold
              </ButtonExample>

              <ButtonExample
                className="btn btn-outline-custom-fg-west-coast-bg-astra"
                title="Olive outline on cream"
              >
                Autumn Outline
              </ButtonExample>

              <ButtonExample
                className="btn btn-gradient-from-madras-to-spice"
                title="Bronze to orange gradient"
              >
                Autumn Gradient
              </ButtonExample>
            </div>
          </div>

          {/* Ocean Theme */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-blue-700">
              🌊 Ocean Theme
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <ButtonExample
                className="btn btn-custom-fg-white-bg-mirage"
                title="White text on navy"
              >
                Ocean Deep
              </ButtonExample>

              <ButtonExample
                className="btn btn-soft-custom-fg-tana-bg-highball"
                title="Teal text on blue soft"
              >
                Ocean Soft
              </ButtonExample>

              <ButtonExample
                className="btn btn-ghost-custom-fg-mirage-hover-tana"
                title="Navy ghost with teal hover"
              >
                Ocean Ghost
              </ButtonExample>
            </div>
          </div>

          {/* Forest Theme */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-green-700">
              🌲 Forest Theme
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <ButtonExample
                className="btn btn-custom-fg-astra-bg-gordons-green"
                title="Cream text on green"
              >
                Forest Light
              </ButtonExample>

              <ButtonExample
                className="btn btn-outline-custom-fg-gordons-green-bg-gumleaf"
                title="Green outline on mint"
              >
                Forest Outline
              </ButtonExample>

              <ButtonExample
                className="btn btn-gradient-from-gordons-green-to-gumleaf"
                title="Green to mint gradient"
              >
                Forest Gradient
              </ButtonExample>
            </div>
          </div>

          {/* Sunset Theme */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-red-700">
              🌅 Sunset Theme
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <ButtonExample
                className="btn btn-gradient-from-coral-tree-to-spice"
                title="Coral to orange gradient"
              >
                Sunset Gradient
              </ButtonExample>

              <ButtonExample
                className="btn btn-solid-custom-fg-white-bg-coral-tree-hover-spice"
                title="Coral with orange hover"
              >
                Sunset Hover
              </ButtonExample>

              <ButtonExample
                className="btn btn-soft-custom-fg-pohutukawa-bg-corn"
                title="Burgundy text on gold"
              >
                Sunset Soft
              </ButtonExample>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Notes */}
      <section className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Usage Notes</h2>
        <div className="space-y-2 text-sm text-gray-700">
          <p>
            <strong>Basic Custom:</strong>{' '}
            <code>
              btn-custom-fg-{`{color}`}-bg-{`{color}`}
            </code>
          </p>
          <p>
            <strong>Outline:</strong>{' '}
            <code>
              btn-outline-custom-fg-{`{color}`}-bg-{`{color}`}
            </code>
          </p>
          <p>
            <strong>Solid with Hover:</strong>{' '}
            <code>
              btn-solid-custom-fg-{`{color}`}-bg-{`{color}`}-hover-{`{color}`}
            </code>
          </p>
          <p>
            <strong>Soft:</strong>{' '}
            <code>
              btn-soft-custom-fg-{`{color}`}-bg-{`{color}`}
            </code>
          </p>
          <p>
            <strong>Ghost:</strong>{' '}
            <code>
              btn-ghost-custom-fg-{`{color}`}-hover-{`{color}`}
            </code>
          </p>
          <p>
            <strong>Gradient:</strong>{' '}
            <code>
              btn-gradient-from-{`{color}`}-to-{`{color}`}
            </code>
          </p>
        </div>
        <div className="mt-4 p-3 bg-blue-50 rounded">
          <p className="text-sm text-blue-800">
            💡 All buttons include the base <code>btn</code> class for proper
            styling and dimensions.
          </p>
        </div>
      </section>
    </div>
  )
}

export default ButtonExamples
