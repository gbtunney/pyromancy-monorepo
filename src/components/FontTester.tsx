import React, { useState } from 'react'

const FontTester: React.FC = () => {
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
  return (
    <div className="relative mx-auto max-w-4xl space-y-12 p-8">
      {/* Copy Success Toast */}
      {copiedText && (
        <div className="fixed right-4 top-4 z-50 animate-bounce rounded-lg bg-green-500 px-4 py-2 text-white shadow-lg">
          ✓ Copied: {copiedText}
        </div>
      )}

      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold">Font Testing Lab</h1>
        <p className="text-gray-600">
          Testing all custom font families with dummy content - Click buttons to
          copy CSS classes
        </p>
      </div>

      {/* Font Heading */}
      <section className="border-b pb-8">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
              font-heading
            </span>
            <span className="ml-2 text-sm text-gray-500">
              var(--font-heading)
            </span>
          </div>
          <div className="space-x-2">
            <button
              onClick={() => copyToClipboard('font-heading')}
              className="rounded bg-blue-100 px-3 py-1 text-xs transition-colors hover:bg-blue-200"
            >
              {copiedText === 'font-heading' ? '✓ Copied!' : 'Copy CSS Class'}
            </button>
            <button
              onClick={() => copyToClipboard('var(--font-heading)')}
              className="rounded bg-gray-100 px-3 py-1 text-xs transition-colors hover:bg-gray-200"
            >
              {copiedText === 'var(--font-heading)'
                ? '✓ Copied!'
                : 'Copy CSS Variable'}
            </button>
          </div>
        </div>
        <div className="mb-4 text-sm text-gray-600">
          <p>
            <strong>Font Stack:</strong> mrs-eaves, ui-serif, Georgia, Cambria,
            serif
          </p>
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
          <blockquote className="border-l-4 border-blue-500 pl-4 text-2xl italic">
            "So we beat on, boats against the current, borne back ceaselessly
            into the past."
          </blockquote>
        </div>
      </section>

      {/* Font Heading Alt */}
      <section className="border-b pb-8">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
              font-heading-alt
            </span>
            <span className="ml-2 text-sm text-gray-500">
              var(--font-heading-alt)
            </span>
          </div>
          <div className="space-x-2">
            <button
              onClick={() => copyToClipboard('font-heading-alt')}
              className="rounded bg-green-100 px-3 py-1 text-xs transition-colors hover:bg-green-200"
            >
              {copiedText === 'font-heading-alt'
                ? '✓ Copied!'
                : 'Copy CSS Class'}
            </button>
            <button
              onClick={() => copyToClipboard('var(--font-heading-alt)')}
              className="rounded bg-gray-100 px-3 py-1 text-xs transition-colors hover:bg-gray-200"
            >
              {copiedText === 'var(--font-heading-alt)'
                ? '✓ Copied!'
                : 'Copy CSS Variable'}
            </button>
          </div>
        </div>
        <div className="mb-4 text-sm text-gray-600">
          <p>
            <strong>Font Stack:</strong> mr-eaves-xl-sans-narrow, ui-sans-serif,
            system-ui, sans-serif
          </p>
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
          <div className="space-y-2 text-lg">
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
        <div className="mb-4 flex items-center justify-between">
          <div>
            <span className="inline-block rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800">
              font-display
            </span>
            <span className="ml-2 text-sm text-gray-500">
              var(--font-display)
            </span>
          </div>
          <div className="space-x-2">
            <button
              onClick={() => copyToClipboard('font-display')}
              className="rounded bg-purple-100 px-3 py-1 text-xs transition-colors hover:bg-purple-200"
            >
              {copiedText === 'font-display' ? '✓ Copied!' : 'Copy CSS Class'}
            </button>
            <button
              onClick={() => copyToClipboard('var(--font-display)')}
              className="rounded bg-gray-100 px-3 py-1 text-xs transition-colors hover:bg-gray-200"
            >
              {copiedText === 'var(--font-display)'
                ? '✓ Copied!'
                : 'Copy CSS Variable'}
            </button>
          </div>
        </div>
        <div className="mb-4 text-sm text-gray-600">
          <p>
            <strong>Font Stack:</strong> adorn-smooth-engraved, ui-sans-serif,
            system-ui, sans-serif
          </p>
        </div>
        <div className="font-display space-y-4">
          <h1 className="text-6xl font-black">LOREM IPSUM</h1>
          <h2 className="text-5xl font-bold">DOLOR SIT AMET</h2>
          <h3 className="text-4xl font-semibold">Consectetur Adipiscing</h3>
          <p className="text-2xl font-medium leading-tight">
            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG
          </p>
          <div className="space-y-2 text-3xl">
            <p>Numbers: 0123456789</p>
            <p>Special: !@#$%^&*()</p>
            <p className="uppercase">Uppercase Display Text</p>
            <p className="lowercase">lowercase display text</p>
          </div>
        </div>
      </section>

      {/* Font Body */}
      <section className="border-b pb-8">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <span className="inline-block rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-800">
              font-body
            </span>
            <span className="ml-2 text-sm text-gray-500">var(--font-body)</span>
          </div>
          <div className="space-x-2">
            <button
              onClick={() => copyToClipboard('font-body')}
              className="rounded bg-orange-100 px-3 py-1 text-xs transition-colors hover:bg-orange-200"
            >
              {copiedText === 'font-body' ? '✓ Copied!' : 'Copy CSS Class'}
            </button>
            <button
              onClick={() => copyToClipboard('var(--font-body)')}
              className="rounded bg-gray-100 px-3 py-1 text-xs transition-colors hover:bg-gray-200"
            >
              {copiedText === 'var(--font-body)'
                ? '✓ Copied!'
                : 'Copy CSS Variable'}
            </button>
          </div>
        </div>
        <div className="mb-4 text-sm text-gray-600">
          <p>
            <strong>Font Stack:</strong> mrs-eaves, ui-serif, Georgia, Cambria,
            serif
          </p>
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
          <ul className="list-inside list-disc space-y-1">
            <li>First list item with body font</li>
            <li>Second item showing readability</li>
            <li>
              Third item with <strong>bold text</strong> and{' '}
              <em>italic emphasis</em>
            </li>
            <li>
              Fourth item with{' '}
              <a href="#" className="text-blue-600 underline">
                a link example
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Font Display Alt */}
      <section className="border-b pb-8">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <span className="inline-block rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-800">
              font-display-alt
            </span>
            <span className="ml-2 text-sm text-gray-500">
              var(--font-display-alt)
            </span>
          </div>
          <div className="space-x-2">
            <button
              onClick={() => copyToClipboard('font-display-alt')}
              className="rounded bg-indigo-100 px-3 py-1 text-xs transition-colors hover:bg-indigo-200"
            >
              {copiedText === 'font-display-alt'
                ? '✓ Copied!'
                : 'Copy CSS Class'}
            </button>
            <button
              onClick={() => copyToClipboard('var(--font-display-alt)')}
              className="rounded bg-gray-100 px-3 py-1 text-xs transition-colors hover:bg-gray-200"
            >
              {copiedText === 'var(--font-display-alt)'
                ? '✓ Copied!'
                : 'Copy CSS Variable'}
            </button>
          </div>
        </div>
        <div className="mb-4 text-sm text-gray-600">
          <p>
            <strong>Font Stack:</strong> kopius-condensed, ui-sans-serif,
            system-ui, sans-serif
          </p>
        </div>
        <div className="font-display-alt space-y-4">
          <h1 className="text-6xl font-black">MODERN DISPLAY</h1>
          <h2 className="text-5xl font-bold">ALTERNATIVE STYLE</h2>
          <h3 className="text-4xl font-semibold">Condensed Typography</h3>
          <p className="text-2xl font-medium leading-tight">
            CLEAN CONDENSED LETTERFORMS FOR HEADLINES
          </p>
          <div className="space-y-2 text-3xl">
            <p>Numbers: 0123456789</p>
            <p>Special: !@#$%^&*()</p>
            <p className="uppercase">CONDENSED DISPLAY TEXT</p>
            <p className="lowercase">condensed display text</p>
          </div>
        </div>
      </section>

      {/* Font Small Caps */}
      <section className="border-b pb-8">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <span className="inline-block rounded-full bg-rose-100 px-3 py-1 text-sm font-medium text-rose-800">
              font-small-caps
            </span>
            <span className="ml-2 text-sm text-gray-500">
              var(--font-small-caps)
            </span>
          </div>
          <div className="space-x-2">
            <button
              onClick={() => copyToClipboard('font-small-caps')}
              className="rounded bg-rose-100 px-3 py-1 text-xs transition-colors hover:bg-rose-200"
            >
              {copiedText === 'font-small-caps'
                ? '✓ Copied!'
                : 'Copy CSS Class'}
            </button>
            <button
              onClick={() => copyToClipboard('var(--font-small-caps)')}
              className="rounded bg-gray-100 px-3 py-1 text-xs transition-colors hover:bg-gray-200"
            >
              {copiedText === 'var(--font-small-caps)'
                ? '✓ Copied!'
                : 'Copy CSS Variable'}
            </button>
          </div>
        </div>
        <div className="mb-4 text-sm text-gray-600">
          <p>
            <strong>Font Stack:</strong> mrs-eaves-roman-all-small-ca, ui-serif,
            Georgia, Cambria, serif
          </p>
        </div>
        <div className="font-small-caps space-y-4">
          <h1 className="text-5xl font-bold">Small Caps Typography</h1>
          <h2 className="text-4xl font-semibold">
            Chapter One: The Art of Small Capitals
          </h2>
          <h3 className="text-3xl font-medium">
            Traditional Elegance in Modern Design
          </h3>
          <p className="text-xl leading-relaxed">
            Small caps provide a refined typographic treatment that maintains
            readability while adding sophistication to headlines and emphasis
            text. This font variant is perfect for luxury brands and editorial
            design.
          </p>
          <blockquote className="border-l-4 border-rose-500 pl-4 text-2xl italic">
            "Typography is the craft of endowing human language with a durable
            visual form."
          </blockquote>
        </div>
      </section>

      {/* Additional Custom Fonts */}
      <section className="border-b pb-8">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <span className="inline-block rounded-full bg-teal-100 px-3 py-1 text-sm font-medium text-teal-800">
              font-adorn-engraved
            </span>
            <span className="ml-2 text-sm text-gray-500">
              Adorn Smooth Engraved
            </span>
          </div>
          <div className="space-x-2">
            <button
              onClick={() => copyToClipboard('font-adorn-engraved')}
              className="rounded bg-teal-100 px-3 py-1 text-xs transition-colors hover:bg-teal-200"
            >
              {copiedText === 'font-adorn-engraved'
                ? '✓ Copied!'
                : 'Copy CSS Class'}
            </button>
          </div>
        </div>
        <div className="mb-4 text-sm text-gray-600">
          <p>
            <strong>Font Stack:</strong> adorn-smooth-engraved,
            mr-eaves-xl-sans-narrow, ui-sans-serif, system-ui, sans-serif
          </p>
        </div>
        <div className="font-adorn-engraved space-y-4">
          <h1 className="text-5xl font-bold">DECORATIVE DISPLAY</h1>
          <h2 className="text-4xl font-semibold">Elegant Typography</h2>
          <h3 className="text-3xl font-medium">Art Nouveau Inspired</h3>
          <p className="text-xl leading-relaxed">
            This is the decorative Adorn Smooth Engraved font, perfect for
            headlines, logos, and artistic applications where you need something
            more distinctive than standard typography.
          </p>
        </div>
      </section>

      {/* Mrs Eaves Font */}
      <section className="border-b pb-8">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800">
              font-mrs-eaves
            </span>
            <span className="ml-2 text-sm text-gray-500">Mrs Eaves</span>
          </div>
          <div className="space-x-2">
            <button
              onClick={() => copyToClipboard('font-mrs-eaves')}
              className="rounded bg-amber-100 px-3 py-1 text-xs transition-colors hover:bg-amber-200"
            >
              {copiedText === 'font-mrs-eaves' ? '✓ Copied!' : 'Copy CSS Class'}
            </button>
          </div>
        </div>
        <div className="mb-4 text-sm text-gray-600">
          <p>
            <strong>Font Stack:</strong> mrs-eaves, ui-serif, Georgia, Cambria,
            serif
          </p>
        </div>
        <div className="font-mrs-eaves space-y-4">
          <h1 className="text-5xl font-bold">Transitional Serif</h1>
          <h2 className="text-4xl font-semibold">Based on Baskerville</h2>
          <h3 className="text-3xl font-medium">Warm & Inviting</h3>
          <p className="text-xl leading-relaxed">
            Mrs Eaves is a revival of Baskerville with a warmer, more friendly
            character. It features generous proportions and a comfortable
            reading experience.
          </p>
        </div>
      </section>

      {/* Kopius Font */}
      <section className="border-b pb-8">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <span className="inline-block rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-800">
              font-kopius
            </span>
            <span className="ml-2 text-sm text-gray-500">Kopius</span>
          </div>
          <div className="space-x-2">
            <button
              onClick={() => copyToClipboard('font-kopius')}
              className="rounded bg-indigo-100 px-3 py-1 text-xs transition-colors hover:bg-indigo-200"
            >
              {copiedText === 'font-kopius' ? '✓ Copied!' : 'Copy CSS Class'}
            </button>
          </div>
        </div>
        <div className="mb-4 text-sm text-gray-600">
          <p>
            <strong>Font Stack:</strong> kopius, mrs-eaves, ui-serif, Georgia,
            Cambria, serif
          </p>
        </div>
        <div className="font-kopius space-y-4">
          <h1 className="text-5xl font-bold">Contemporary Serif</h1>
          <h2 className="text-4xl font-semibold">Modern Editorial Style</h2>
          <h3 className="text-3xl font-medium">Sophisticated Typography</h3>
          <p className="text-xl leading-relaxed">
            Kopius brings a contemporary edge to serif typography with refined
            proportions and modern sensibilities. Perfect for editorial design.
          </p>
        </div>
      </section>

      {/* CSS Variable Direct Usage */}
      <section className="border-b pb-8">
        <div className="mb-4">
          <span className="inline-block rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-800">
            Direct CSS Variables
          </span>
          <span className="ml-2 text-sm text-gray-500">
            font-[var(--font-*)]
          </span>
        </div>
        <div className="space-y-6">
          <div className="font-[var(--font-heading)]">
            <h3 className="mb-2 text-2xl font-bold">Direct Heading Variable</h3>
            <p className="text-lg">
              This text uses font-[var(--font-heading)] directly with arbitrary
              values.
            </p>
          </div>
          <div className="font-[var(--font-display)]">
            <h3 className="mb-2 text-2xl font-bold">Direct Display Variable</h3>
            <p className="text-lg">
              This text uses font-[var(--font-display)] for testing the display
              font.
            </p>
          </div>
          <div className="font-[var(--font-body)]">
            <h3 className="mb-2 text-2xl font-bold">Direct Body Variable</h3>
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
          <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800">
            Weight & Style Tests
          </span>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="font-heading space-y-2">
            <h4 className="mb-3 text-lg font-bold">
              Heading Font Weights{' '}
              <span className="text-sm font-normal text-gray-500">
                (mrs-eaves)
              </span>
            </h4>
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
            <h4 className="mb-3 text-lg font-bold">
              Body Font Weights{' '}
              <span className="text-sm font-normal text-gray-500">
                (mrs-eaves)
              </span>
            </h4>
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
          <span className="inline-block rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-800">
            Side-by-Side Comparison
          </span>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          <div className="rounded-lg border p-4">
            <h4 className="font-heading mb-3 text-xl font-bold">
              Heading Font
            </h4>
            <p className="font-heading text-sm">
              The quick brown fox jumps over the lazy dog. Pack my box with five
              dozen liquor jugs.
            </p>
            <span className="mt-2 block text-xs text-gray-500">mrs-eaves</span>
          </div>
          <div className="rounded-lg border p-4">
            <h4 className="font-heading-alt mb-3 text-xl font-bold">
              Heading Alt
            </h4>
            <p className="font-heading-alt text-sm">
              The quick brown fox jumps over the lazy dog. Pack my box with five
              dozen liquor jugs.
            </p>
            <span className="mt-2 block text-xs text-gray-500">
              mr-eaves-xl-sans-narrow
            </span>
          </div>
          <div className="rounded-lg border p-4">
            <h4 className="font-display mb-3 text-xl font-bold">
              Display Font
            </h4>
            <p className="font-display text-sm">
              The quick brown fox jumps over the lazy dog. Pack my box with five
              dozen liquor jugs.
            </p>
            <span className="mt-2 block text-xs text-gray-500">
              adorn-smooth-engraved
            </span>
          </div>
          <div className="rounded-lg border p-4">
            <h4 className="font-display-alt mb-3 text-xl font-bold">
              Display Alt
            </h4>
            <p className="font-display-alt text-sm">
              The quick brown fox jumps over the lazy dog. Pack my box with five
              dozen liquor jugs.
            </p>
            <span className="mt-2 block text-xs text-gray-500">
              kopius-condensed
            </span>
          </div>
          <div className="rounded-lg border p-4">
            <h4 className="font-small-caps mb-3 text-xl font-bold">
              Small Caps
            </h4>
            <p className="font-small-caps text-sm">
              The quick brown fox jumps over the lazy dog. Pack my box with five
              dozen liquor jugs.
            </p>
            <span className="mt-2 block text-xs text-gray-500">
              mrs-eaves-roman-all-small-ca
            </span>
          </div>
          <div className="rounded-lg border p-4">
            <h4 className="font-body mb-3 text-xl font-bold">Body Font</h4>
            <p className="font-body text-sm">
              The quick brown fox jumps over the lazy dog. Pack my box with five
              dozen liquor jugs.
            </p>
            <span className="mt-2 block text-xs text-gray-500">mrs-eaves</span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FontTester
