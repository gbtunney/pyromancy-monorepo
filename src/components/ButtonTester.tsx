import React from 'react'

const ButtonTester: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto p-8 space-y-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-heading mb-4">
          Button Testing Lab
        </h1>
        <p className="text-gray-600 font-body">
          Comprehensive button styles and interactions testing
        </p>
      </div>

      {/* Basic Button Styles */}
      <section className="border-b pb-8">
        <h2 className="text-2xl font-semibold font-heading mb-6">
          Basic Button Styles
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors">
            Primary
          </button>
          <button className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded transition-colors">
            Secondary
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-colors">
            Success
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition-colors">
            Danger
          </button>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-4 py-2 rounded transition-colors">
            Warning
          </button>
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded transition-colors">
            Info
          </button>
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-4 py-2 rounded transition-colors">
            Light
          </button>
          <button className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded transition-colors">
            Dark
          </button>
        </div>
      </section>

      {/* Button Sizes */}
      <section className="border-b pb-8">
        <h2 className="text-2xl font-semibold font-heading mb-6">
          Button Sizes
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 text-xs rounded">
            Extra Small
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 text-sm rounded">
            Small
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            Medium (Default)
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 text-lg rounded">
            Large
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-xl rounded">
            Extra Large
          </button>
        </div>
      </section>

      {/* Button Variants */}
      <section className="border-b pb-8">
        <h2 className="text-2xl font-semibold font-heading mb-6">
          Button Variants
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Solid Buttons */}
          <div>
            <h3 className="text-lg font-medium mb-4">Solid</h3>
            <div className="space-y-2">
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                Solid Blue
              </button>
              <button className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
                Solid Green
              </button>
              <button className="w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
                Solid Red
              </button>
            </div>
          </div>

          {/* Outline Buttons */}
          <div>
            <h3 className="text-lg font-medium mb-4">Outline</h3>
            <div className="space-y-2">
              <button className="w-full border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-4 py-2 rounded transition-colors">
                Outline Blue
              </button>
              <button className="w-full border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-4 py-2 rounded transition-colors">
                Outline Green
              </button>
              <button className="w-full border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-4 py-2 rounded transition-colors">
                Outline Red
              </button>
            </div>
          </div>

          {/* Ghost Buttons */}
          <div>
            <h3 className="text-lg font-medium mb-4">Ghost</h3>
            <div className="space-y-2">
              <button className="w-full text-blue-500 hover:bg-blue-100 px-4 py-2 rounded transition-colors">
                Ghost Blue
              </button>
              <button className="w-full text-green-500 hover:bg-green-100 px-4 py-2 rounded transition-colors">
                Ghost Green
              </button>
              <button className="w-full text-red-500 hover:bg-red-100 px-4 py-2 rounded transition-colors">
                Ghost Red
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Button States */}
      <section className="border-b pb-8">
        <h2 className="text-2xl font-semibold font-heading mb-6">
          Button States
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            Normal
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Hovered
          </button>
          <button className="bg-blue-700 text-white px-4 py-2 rounded">
            Active
          </button>
          <button
            className="bg-blue-300 text-white px-4 py-2 rounded cursor-not-allowed"
            disabled
          >
            Disabled
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded ring-2 ring-blue-300 ring-offset-2">
            Focused
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded opacity-50">
            Loading...
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded">
            ✓ Success
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded animate-pulse">
            Error
          </button>
        </div>
      </section>

      {/* Advanced Button Effects */}
      <section className="border-b pb-8">
        <h2 className="text-2xl font-semibold font-heading mb-6">
          Advanced Effects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Gradient Button */}
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg transition-all duration-300">
            Gradient Button
          </button>

          {/* Shadow Button */}
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            Shadow Effect
          </button>

          {/* Scale Button */}
          <button className="bg-green-500 hover:bg-green-600 hover:scale-105 text-white px-6 py-3 rounded-lg transition-all duration-300">
            Scale on Hover
          </button>

          {/* Glow Button */}
          <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg hover:ring-4 hover:ring-purple-300 hover:ring-opacity-50 transition-all duration-300">
            Glow Effect
          </button>

          {/* Slide Button */}
          <button className="group relative bg-indigo-500 text-white px-6 py-3 rounded-lg overflow-hidden transition-all duration-300">
            <span className="relative z-10">Slide Effect</span>
            <div className="absolute inset-0 bg-indigo-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>

          {/* Shine Button */}
          <button className="group relative bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg overflow-hidden transition-colors duration-300">
            <span className="relative">Shine Effect</span>
            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
              <div className="relative h-full w-8 bg-white/20"></div>
            </div>
          </button>
        </div>
      </section>

      {/* Icon Buttons */}
      <section className="border-b pb-8">
        <h2 className="text-2xl font-semibold font-heading mb-6">
          Icon Buttons
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full transition-colors">
            ♥
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full transition-colors">
            ✓
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full transition-colors">
            ✕
          </button>
          <button className="bg-purple-500 hover:bg-purple-600 text-white p-3 rounded-full transition-colors">
            ★
          </button>
          <button className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full transition-colors">
            ⚙
          </button>
          <button className="bg-gray-500 hover:bg-gray-600 text-white p-3 rounded-full transition-colors">
            ?
          </button>
        </div>
      </section>

      {/* Button Groups */}
      <section className="border-b pb-8">
        <h2 className="text-2xl font-semibold font-heading mb-6">
          Button Groups
        </h2>
        <div className="space-y-6">
          {/* Horizontal Group */}
          <div>
            <h3 className="text-lg font-medium mb-3">Horizontal Group</h3>
            <div className="inline-flex rounded-lg overflow-hidden">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 border-r border-blue-400">
                Left
              </button>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 border-r border-blue-400">
                Center
              </button>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2">
                Right
              </button>
            </div>
          </div>

          {/* Toggle Group */}
          <div>
            <h3 className="text-lg font-medium mb-3">Toggle Group</h3>
            <div className="inline-flex rounded-lg border border-gray-300 overflow-hidden">
              <button className="bg-blue-500 text-white px-4 py-2">
                Active
              </button>
              <button className="bg-white hover:bg-gray-50 text-gray-700 px-4 py-2 border-l border-gray-300">
                Inactive
              </button>
              <button className="bg-white hover:bg-gray-50 text-gray-700 px-4 py-2 border-l border-gray-300">
                Inactive
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Reset Test Buttons */}
      <section>
        <h2 className="text-2xl font-semibold font-heading mb-6">
          Reset Testing
        </h2>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-medium mb-3">
              Unstyled Buttons (Testing Preflight Reset)
            </h3>
            <div className="space-x-4">
              <button>Default Button</button>
              <button className="text-blue-500">With Color</button>
              <button className="font-bold">With Font Weight</button>
              <button style={{ all: 'unset', cursor: 'pointer' }}>
                Manual Reset
              </button>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              These buttons should have no default browser styling if preflight
              is working correctly.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ButtonTester
