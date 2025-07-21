import React from 'react'

/**
 * Test component to validate all button shortcut patterns work correctly
 * and don't generate invalid UnoCSS utilities
 */
const ButtonValidationTest: React.FC = () => {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold mb-6">Button Validation Test</h1>

      <section>
        <h2 className="text-xl font-semibold mb-4">
          Custom fg/bg combinations
        </h2>
        <div className="flex flex-wrap gap-4">
          <button className="btn btn-custom-fg-sandstone-bg-corn">
            Sandstone on Corn
          </button>
          <button className="btn btn-custom-fg-white-bg-coral-tree">
            White on Coral Tree
          </button>
          <button className="btn btn-custom-fg-mirage-bg-astra">
            Mirage on Astra
          </button>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Solid with custom hover</h2>
        <div className="flex flex-wrap gap-4">
          <button className="btn btn-solid-custom-fg-white-bg-coral-tree-hover-pohutukawa">
            White on Coral Tree (hover: Pohutukawa)
          </button>
          <button className="btn btn-solid-custom-fg-sandstone-bg-astra-hover-gordons-green">
            Sandstone on Astra (hover: Gordons Green)
          </button>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">
          Outline with custom colors
        </h2>
        <div className="flex flex-wrap gap-4">
          <button className="btn btn-outline-custom-fg-coral-tree-bg-transparent">
            Coral Tree Outline
          </button>
          <button className="btn btn-outline-custom-fg-gordons-green-bg-white">
            Gordons Green Outline on White
          </button>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Soft variants</h2>
        <div className="flex flex-wrap gap-4">
          <button className="btn btn-soft-custom-fg-pohutukawa-bg-coral-tree">
            Pohutukawa on Coral Tree (soft)
          </button>
          <button className="btn btn-soft-custom-fg-mirage-bg-astra">
            Mirage on Astra (soft)
          </button>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Ghost variants</h2>
        <div className="flex flex-wrap gap-4">
          <button className="btn btn-ghost-custom-fg-coral-tree-hover-pohutukawa">
            Coral Tree Ghost (hover: Pohutukawa)
          </button>
          <button className="btn btn-ghost-custom-fg-gordons-green-hover-astra">
            Gordons Green Ghost (hover: Astra)
          </button>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Gradient variants</h2>
        <div className="flex flex-wrap gap-4">
          <button className="btn btn-gradient-from-coral-tree-to-pohutukawa">
            Coral Tree to Pohutukawa
          </button>
          <button className="btn btn-gradient-from-gordons-green-to-astra">
            Gordons Green to Astra
          </button>
          <button className="btn btn-gradient-from-blue-500-to-purple-600">
            Blue to Purple
          </button>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">
          Standard variants (should work without issues)
        </h2>
        <div className="flex flex-wrap gap-4">
          <button className="btn btn-solid-primary">Solid Primary</button>
          <button className="btn btn-outline-blue">Outline Blue</button>
          <button className="btn btn-ghost-green">Ghost Green</button>
          <button className="btn btn-soft-red">Soft Red</button>
          <button className="btn btn-text-purple">Text Purple</button>
          <button className="btn btn-link-orange">Link Orange</button>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Static button variants</h2>
        <div className="flex flex-wrap gap-4">
          <button className="btn btn-solid-white">Solid White</button>
          <button className="btn btn-solid-gray">Solid Gray</button>
          <button className="btn btn-solid-black">Solid Black</button>
          <button className="btn btn-ghost-gray">Ghost Gray</button>
          <button className="btn btn-outline-gray">Outline Gray</button>
        </div>
      </section>
    </div>
  )
}

export default ButtonValidationTest
