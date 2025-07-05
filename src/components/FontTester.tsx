import React from "react";

const FontTester: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 space-y-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Font Testing Lab</h1>
        <p className="text-gray-600">
          Testing all custom font families with dummy content
        </p>
      </div>

      {/* Font Heading */}
      <section className="border-b pb-8">
        <div className="mb-4">
          <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            font-heading
          </span>
          <span className="ml-2 text-sm text-gray-500">
            var(--font-heading)
          </span>
        </div>
        <div className="font-heading space-y-4">
          <h1 className="text-5xl font-bold">The Great Gatsby</h1>
          <h2 className="text-4xl font-semibold">Chapter One: The Beginning</h2>
          <h3 className="text-3xl font-medium">
            In my younger and more vulnerable years
          </h3>
          <p className="text-xl leading-relaxed">
            My father gave me some advice that I've carried with me ever since.
            "Whenever you feel like criticizing anyone," he told me, "just
            remember that all the people in this world haven't had the
            advantages that you've had."
          </p>
          <blockquote className="text-2xl italic border-l-4 border-blue-500 pl-4">
            "So we beat on, boats against the current, borne back ceaselessly
            into the past."
          </blockquote>
        </div>
      </section>

      {/* Font Heading Alt */}
      <section className="border-b pb-8">
        <div className="mb-4">
          <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
            font-heading-alt
          </span>
          <span className="ml-2 text-sm text-gray-500">
            var(--font-heading-alt)
          </span>
        </div>
        <div className="font-heading-alt space-y-4">
          <h1 className="text-5xl font-bold">Pride and Prejudice</h1>
          <h2 className="text-4xl font-semibold">
            Chapter 1: First Impressions
          </h2>
          <h3 className="text-3xl font-medium">
            It is a truth universally acknowledged
          </h3>
          <p className="text-xl leading-relaxed">
            That a single man in possession of a good fortune, must be in want
            of a wife. However little known the feelings or views of such a man
            may be on his first entering a neighbourhood, this truth is so well
            fixed in the minds of the surrounding families.
          </p>
          <div className="text-lg space-y-2">
            <p>
              <strong>Character Names:</strong> Elizabeth Bennet, Mr. Darcy,
              Jane Bennet
            </p>
            <p>
              <em>Setting:</em> Longbourn Estate, Hertfordshire, England
            </p>
          </div>
        </div>
      </section>

      {/* Font Display */}
      <section className="border-b pb-8">
        <div className="mb-4">
          <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
            font-display
          </span>
          <span className="ml-2 text-sm text-gray-500">
            var(--font-display)
          </span>
        </div>
        <div className="font-display space-y-4">
          <h1 className="text-6xl font-black">LOREM IPSUM</h1>
          <h2 className="text-5xl font-bold">DOLOR SIT AMET</h2>
          <h3 className="text-4xl font-semibold">Consectetur Adipiscing</h3>
          <p className="text-2xl font-medium leading-tight">
            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG
          </p>
          <div className="text-3xl space-y-2">
            <p>Numbers: 0123456789</p>
            <p>Special: !@#$%^&*()</p>
            <p className="uppercase">Uppercase Display Text</p>
            <p className="lowercase">lowercase display text</p>
          </div>
        </div>
      </section>

      {/* Font Body */}
      <section className="border-b pb-8">
        <div className="mb-4">
          <span className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
            font-body
          </span>
          <span className="ml-2 text-sm text-gray-500">var(--font-body)</span>
        </div>
        <div className="font-body space-y-4">
          <h1 className="text-3xl font-bold">The Art of Typography</h1>
          <p className="text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="text-base leading-relaxed">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <div className="space-y-2">
            <p className="text-sm">
              Small body text for captions and fine print details.
            </p>
            <p className="text-xs">
              Extra small text for legal disclaimers and micro-copy.
            </p>
          </div>
          <ul className="list-disc list-inside space-y-1">
            <li>First list item with body font</li>
            <li>Second item showing readability</li>
            <li>
              Third item with <strong>bold text</strong> and{" "}
              <em>italic emphasis</em>
            </li>
            <li>
              Fourth item with{" "}
              <a href="#" className="text-blue-600 underline">
                a link example
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* CSS Variable Direct Usage */}
      <section className="border-b pb-8">
        <div className="mb-4">
          <span className="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
            Direct CSS Variables
          </span>
          <span className="ml-2 text-sm text-gray-500">
            font-[var(--font-*)]
          </span>
        </div>
        <div className="space-y-6">
          <div className="font-[var(--font-heading)]">
            <h3 className="text-2xl font-bold mb-2">Direct Heading Variable</h3>
            <p className="text-lg">
              This text uses font-[var(--font-heading)] directly with arbitrary
              values.
            </p>
          </div>
          <div className="font-[var(--font-display)]">
            <h3 className="text-2xl font-bold mb-2">Direct Display Variable</h3>
            <p className="text-lg">
              This text uses font-[var(--font-display)] for testing the display
              font.
            </p>
          </div>
          <div className="font-[var(--font-body)]">
            <h3 className="text-2xl font-bold mb-2">Direct Body Variable</h3>
            <p className="text-lg">
              This text uses font-[var(--font-body)] to test the body font
              variable.
            </p>
          </div>
        </div>
      </section>

      {/* Font Weight and Style Variations */}
      <section className="border-b pb-8">
        <div className="mb-4">
          <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
            Weight & Style Tests
          </span>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="font-heading space-y-2">
            <h4 className="text-lg font-bold mb-3">Heading Font Weights</h4>
            <p className="font-thin">Thin (100) - The quick brown fox</p>
            <p className="font-extralight">
              Extra Light (200) - jumps over the lazy dog
            </p>
            <p className="font-light">Light (300) - Pack my box with</p>
            <p className="font-normal">Normal (400) - five dozen liquor jugs</p>
            <p className="font-medium">Medium (500) - Bright vixens jump</p>
            <p className="font-semibold">Semi Bold (600) - dozy fowl quack</p>
            <p className="font-bold">Bold (700) - Waltz, bad nymph</p>
            <p className="font-extrabold">
              Extra Bold (800) - for quick jigs vex
            </p>
            <p className="font-black">Black (900) - TYPOGRAPHY TEST</p>
          </div>
          <div className="font-body space-y-2">
            <h4 className="text-lg font-bold mb-3">Body Font Weights</h4>
            <p className="font-thin">Thin (100) - The five boxing wizards</p>
            <p className="font-extralight">Extra Light (200) - jump quickly</p>
            <p className="font-light">Light (300) - How vexingly quick</p>
            <p className="font-normal">Normal (400) - daft zebras jump!</p>
            <p className="font-medium">Medium (500) - Sphinx of black quartz</p>
            <p className="font-semibold">Semi Bold (600) - judge my vow</p>
            <p className="font-bold">Bold (700) - Jackdaws love my</p>
            <p className="font-extrabold">
              Extra Bold (800) - big sphinx of quartz
            </p>
            <p className="font-black">Black (900) - BODY FONT TEST</p>
          </div>
        </div>
      </section>

      {/* Mixed Font Comparison */}
      <section>
        <div className="mb-4">
          <span className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
            Side-by-Side Comparison
          </span>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-4 border rounded-lg">
            <h4 className="font-heading text-xl font-bold mb-3">
              Heading Font
            </h4>
            <p className="font-heading text-sm">
              The quick brown fox jumps over the lazy dog. Pack my box with five
              dozen liquor jugs.
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <h4 className="font-heading-alt text-xl font-bold mb-3">
              Heading Alt
            </h4>
            <p className="font-heading-alt text-sm">
              The quick brown fox jumps over the lazy dog. Pack my box with five
              dozen liquor jugs.
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <h4 className="font-display text-xl font-bold mb-3">
              Display Font
            </h4>
            <p className="font-display text-sm">
              The quick brown fox jumps over the lazy dog. Pack my box with five
              dozen liquor jugs.
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <h4 className="font-body text-xl font-bold mb-3">Body Font</h4>
            <p className="font-body text-sm">
              The quick brown fox jumps over the lazy dog. Pack my box with five
              dozen liquor jugs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FontTester;
