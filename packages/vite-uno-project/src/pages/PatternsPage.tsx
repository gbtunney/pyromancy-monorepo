import React from 'react'

const PatternsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8">Background Patterns Showcase</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {/* Example pattern backgrounds using UnoCSS heropatterns preset */}
        <div className="rounded-lg shadow-lg p-6  bg-mask-hero-rain border border-gray-200">
          <h2 className="text-xl font-semibold mb-2">Topography</h2>
          <p className="text-gray-700">bg-hero-topography-sky-200/40</p>
        </div>
        <div className="rounded-lg shadow-lg p-6 color-red-500 text-red-500 bg-hero-jigsaw-emerald-200/40 border border-gray-200">
          <h2 className="text-xl font-semibold mb-2">Jigsaw</h2>
          <p className="text-gray-700">bg-heropattern-jigsaw-emerald-200/40</p>
        </div>
        <div className="rounded-lg shadow-lg p-6 bg-heropattern-overcast-indigo-200/40 border border-gray-200">
          <h2 className="text-xl font-semibold mb-2">Overcast</h2>
          <p className="text-gray-700">bg-heropattern-overcast-indigo-200/40</p>
        </div>
        <div className="rounded-lg shadow-lg p-6 bg-heropattern-bubbles-pink-200/40 border border-gray-200">
          <h2 className="text-xl font-semibold mb-2">Bubbles</h2>
          <p className="text-gray-700">bg-heropattern-bubbles-pink-200/40</p>
        </div>
        <div className="rounded-lg shadow-lg p-6 bg-heropattern-diagonal-stripes-yellow-200/40 border border-gray-200">
          <h2 className="text-xl font-semibold mb-2">Diagonal Stripes</h2>
          <p className="text-gray-700">bg-heropattern-diagonal-stripes-yellow-200/40</p>
        </div>
        <div className="rounded-lg shadow-lg p-6 bg-heropattern-graph-paper-gray-200/40 border border-gray-200">
          <h2 className="text-xl font-semibold mb-2">Graph Paper</h2>
          <p className="text-gray-700">bg-heropattern-graph-paper-gray-200/40</p>
        </div>
      </div>
      <p className="mt-12 text-gray-500 text-sm text-center max-w-xl">
        These backgrounds use the <code>heropatterns</code> UnoCSS preset. You can apply any pattern and color by changing the <code>bg-heropattern-*</code> class.
      </p>
    </div>
  )
}

export default PatternsPage
