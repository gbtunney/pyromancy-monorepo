import React from 'react'

const HomePage: React.FC = () => {
  return (
    <div className="mx-auto max-w-4xl px-6">
      <div className="mb-12 text-center">
        <h1 className="font-display mb-4 text-5xl font-bold text-gray-900">
          Welcome to UnoCSS Testing Lab
        </h1>
        <p className="font-body mx-auto max-w-2xl text-xl text-gray-600">
          A comprehensive testing environment for UnoCSS utilities, custom
          colors, typography, and components.
        </p>
      </div>

      <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
          <div className="mb-4 text-4xl">🔤</div>
          <h3 className="font-heading mb-2 text-xl font-semibold">
            Font Testing
          </h3>
          <p className="font-body text-gray-600">
            Test all custom font families, weights, and CSS variable
            integration.
          </p>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
          <div className="mb-4 text-4xl">🔘</div>
          <h3 className="font-heading mb-2 text-xl font-semibold">
            Button Components
          </h3>
          <p className="font-body font-serif text-gray-600">
            Comprehensive button styles, states, and interaction testing.
          </p>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
          <div className="mb-4 text-4xl">🎨</div>
          <h3 className="font-heading mb-2 text-xl font-semibold">
            Color System
          </h3>
          <p className="font-body text-gray-600">
            OKLCH color palette and custom color variable testing.
          </p>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
          <div className="mb-4 text-4xl">🌈</div>
          <h3 className="font-heading mb-2 text-xl font-semibold">Gradients</h3>
          <p className="font-body text-gray-600">
            Beautiful OKLCH gradient combinations and effects.
          </p>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
          <div className="mb-4 text-4xl">📝</div>
          <h3 className="font-heading mb-2 text-xl font-semibold">
            Typography
          </h3>
          <p className="font-body text-gray-600">
            Prose styling and text formatting examples.
          </p>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
          <div className="mb-4 text-4xl">⚙️</div>
          <h3 className="font-heading mb-2 text-xl font-semibold">
            Configuration
          </h3>
          <p className="font-body text-gray-600">
            UnoCSS configuration and preset testing.
          </p>
        </div>
      </div>

      <div className="rounded-lg bg-blue-50 p-8">
        <h2 className="font-heading mb-4 text-2xl font-semibold">Quick Test</h2>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-4">
            <button className="rounded bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600">
              Primary Button
            </button>
            <button className="rounded bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 text-white">
              Gradient Button
            </button>
            <span className="rounded-full bg-lime-500 px-3 py-1 text-sm text-white">
              Custom Color
            </span>
          </div>
          <div className="space-y-2">
            <h3 className="font-heading text-xl">Custom Heading Font</h3>
            <p className="font-body text-gray-600">
              This is body text using the custom font variables.
            </p>
            <p className="font-display text-lg text-purple-600">
              Display font with custom styling.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
