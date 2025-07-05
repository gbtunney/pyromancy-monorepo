import React from "react";

const ColorsPage: React.FC = () => {
  const standardColors = [
    "red",
    "orange",
    "yellow",
    "lime",
    "green",
    "emerald",
    "teal",
    "cyan",
    "sky",
    "blue",
    "indigo",
    "purple",
    "pink",
    "rose",
  ];

  const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

  const customColors = [
    {
      name: "gordons-green",
      bg: "bg-gordons-green",
      text: "text-gordons-green",
    },
    { name: "corn", bg: "bg-corn", text: "text-corn" },
    { name: "oklch-green", bg: "bg-oklch-green", text: "text-oklch-green" },
    { name: "oklch-mint", bg: "bg-oklch-mint", text: "text-oklch-mint" },
  ];

  return (
    <div className="max-w-7xl mx-auto p-8 space-y-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-heading mb-4">
          Color System Testing
        </h1>
        <p className="text-gray-600 font-body">
          OKLCH color palette and custom colors
        </p>
      </div>

      {/* Custom Colors */}
      <section className="border-b pb-8">
        <h2 className="text-2xl font-semibold font-heading mb-6">
          Custom Colors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {customColors.map((color) => (
            <div key={color.name} className="space-y-4">
              <div
                className={`${color.bg} h-32 rounded-lg shadow-md flex items-center justify-center`}
              >
                <span className="text-white font-semibold text-lg drop-shadow">
                  {color.name}
                </span>
              </div>
              <div className="space-y-2">
                <p className={`${color.text} font-medium`}>
                  Text color: {color.name}
                </p>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>
                    <code className="bg-gray-100 px-2 py-1 rounded">
                      {color.bg}
                    </code>
                  </p>
                  <p>
                    <code className="bg-gray-100 px-2 py-1 rounded">
                      {color.text}
                    </code>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Standard Color Palette */}
      <section className="border-b pb-8">
        <h2 className="text-2xl font-semibold font-heading mb-6">
          Standard Colors (OKLCH)
        </h2>
        <div className="space-y-8">
          {standardColors.map((color) => (
            <div key={color} className="space-y-3">
              <h3 className="text-lg font-medium font-heading capitalize">
                {color}
              </h3>
              <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
                {shades.map((shade) => (
                  <div key={shade} className="space-y-2">
                    <div
                      className={`bg-${color}-${shade} h-16 rounded shadow-sm flex items-end justify-center pb-1`}
                    >
                      <span
                        className={`text-xs font-medium ${shade > 400 ? "text-white" : "text-gray-900"}`}
                      >
                        {shade}
                      </span>
                    </div>
                    <div className="text-center">
                      <code className="text-xs text-gray-600">
                        {color}-{shade}
                      </code>
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
        <h2 className="text-2xl font-semibold font-heading mb-6">
          Usage Examples
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Background Colors */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Background Colors</h3>
            <div className="space-y-2">
              <div className="bg-blue-500 text-white p-3 rounded">
                bg-blue-500
              </div>
              <div className="bg-green-400 text-white p-3 rounded">
                bg-green-400
              </div>
              <div className="bg-purple-600 text-white p-3 rounded">
                bg-purple-600
              </div>
              <div className="bg-gordons-green text-white p-3 rounded">
                bg-gordons-green
              </div>
            </div>
          </div>

          {/* Text Colors */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Text Colors</h3>
            <div className="space-y-2">
              <p className="text-red-500 text-lg">text-red-500</p>
              <p className="text-blue-600 text-lg">text-blue-600</p>
              <p className="text-green-500 text-lg">text-green-500</p>
              <p className="text-gordons-green text-lg">text-gordons-green</p>
            </div>
          </div>

          {/* Border Colors */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Border Colors</h3>
            <div className="space-y-2">
              <div className="border-2 border-red-500 p-3 rounded">
                border-red-500
              </div>
              <div className="border-2 border-blue-400 p-3 rounded">
                border-blue-400
              </div>
              <div className="border-2 border-green-500 p-3 rounded">
                border-green-500
              </div>
              <div className="border-2 border-gordons-green p-3 rounded">
                border-gordons-green
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CSS Variables */}
      <section>
        <h2 className="text-2xl font-semibold font-heading mb-6">
          CSS Variable Colors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Direct CSS Variables</h3>
            <div className="space-y-2">
              <div className="bg-[var(--color-test-sky)] text-white p-3 rounded">
                var(--color-test-sky)
              </div>
              <div className="bg-[var(--color-test-indigo)] text-white p-3 rounded">
                var(--color-test-indigo)
              </div>
              <div className="bg-[var(--color-my-mint)] text-white p-3 rounded">
                var(--color-my-mint)
              </div>
              <div className="bg-[var(--color-my-coral)] text-white p-3 rounded">
                var(--color-my-coral)
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">OKLCH Values</h3>
            <div className="space-y-2 text-sm font-mono">
              <div className="bg-gray-100 p-2 rounded">
                --color-test-sky: oklch(74.6% 0.16 232.661)
              </div>
              <div className="bg-gray-100 p-2 rounded">
                --color-test-indigo: oklch(87% 0.065 274.039)
              </div>
              <div className="bg-gray-100 p-2 rounded">
                --color-my-mint: oklch(85% 0.12 160)
              </div>
              <div className="bg-gray-100 p-2 rounded">
                --color-my-coral: oklch(70% 0.15 30)
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ColorsPage;
