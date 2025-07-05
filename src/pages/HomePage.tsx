import React from "react";

const HomePage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold font-display mb-4 text-gray-900">
          Welcome to UnoCSS Testing Lab
        </h1>
        <p className="text-xl text-gray-600 font-body max-w-2xl mx-auto">
          A comprehensive testing environment for UnoCSS utilities, custom
          colors, typography, and components.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="text-4xl mb-4">🔤</div>
          <h3 className="text-xl font-semibold font-heading mb-2">
            Font Testing
          </h3>
          <p className="text-gray-600 font-body">
            Test all custom font families, weights, and CSS variable
            integration.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="text-4xl mb-4">🔘</div>
          <h3 className="text-xl font-semibold font-heading mb-2">
            Button Components
          </h3>
          <p className="text-gray-600 font-serif font-body">
            Comprehensive button styles, states, and interaction testing.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="text-4xl mb-4">🎨</div>
          <h3 className="text-xl font-semibold font-heading mb-2">
            Color System
          </h3>
          <p className="text-gray-600 font-body">
            OKLCH color palette and custom color variable testing.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="text-4xl mb-4">🌈</div>
          <h3 className="text-xl font-semibold font-heading mb-2">Gradients</h3>
          <p className="text-gray-600 font-body">
            Beautiful OKLCH gradient combinations and effects.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="text-4xl mb-4">📝</div>
          <h3 className="text-xl font-semibold font-heading mb-2">
            Typography
          </h3>
          <p className="text-gray-600 font-body">
            Prose styling and text formatting examples.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="text-4xl mb-4">⚙️</div>
          <h3 className="text-xl font-semibold font-heading mb-2">
            Configuration
          </h3>
          <p className="text-gray-600 font-body">
            UnoCSS configuration and preset testing.
          </p>
        </div>
      </div>

      <div className="bg-blue-50 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold font-heading mb-4">Quick Test</h2>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors">
              Primary Button
            </button>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded">
              Gradient Button
            </button>
            <span className="bg-lime-500 text-white px-3 py-1 rounded-full text-sm">
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
  );
};

export default HomePage;
