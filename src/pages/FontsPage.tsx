import React, { useState } from 'react'
import FontTester from '../components/FontTester'
import TypographySample from '../TypographySample'

const FontsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'fonts' | 'typography'>('fonts')

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Tab Navigation */}
      <div className="border-b bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-8">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('fonts')}
              className={`border-b-2 px-2 py-4 text-sm font-medium transition-colors ${
                activeTab === 'fonts'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
              }`}
            >
              Font Testing Lab
            </button>
            <button
              onClick={() => setActiveTab('typography')}
              className={`border-b-2 px-2 py-4 text-sm font-medium transition-colors ${
                activeTab === 'typography'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
              }`}
            >
              Typography Showcase
            </button>
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      <div className="min-h-screen">
        {activeTab === 'fonts' && <FontTester />}
        {activeTab === 'typography' && <TypographySample />}
      </div>
    </div>
  )
}

export default FontsPage
