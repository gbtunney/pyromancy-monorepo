import React, { useState } from 'react'
import ButtonTester from '../components/ButtonTester'
import ButtonExamples from '../components/ButtonExamples'
import ButtonValidationTest from '../components/ButtonValidationTest'

const ButtonsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    'tester' | 'examples' | 'validation'
  >('tester')

  return (
    <div className="min-h-screen bg-white">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('tester')}
              className={`border-b-2 px-2 py-4 text-sm font-medium transition-colors ${
                activeTab === 'tester'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
              }`}
            >
              Button Tester
            </button>
            <button
              onClick={() => setActiveTab('examples')}
              className={`border-b-2 px-2 py-4 text-sm font-medium transition-colors ${
                activeTab === 'examples'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
              }`}
            >
              Custom Button Examples
            </button>
            <button
              onClick={() => setActiveTab('validation')}
              className={`border-b-2 px-2 py-4 text-sm font-medium transition-colors ${
                activeTab === 'validation'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
              }`}
            >
              Validation Test
            </button>
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      <div className="min-h-screen">
        {activeTab === 'tester' && <ButtonTester />}
        {activeTab === 'examples' && <ButtonExamples />}
        {activeTab === 'validation' && <ButtonValidationTest />}
      </div>
    </div>
  )
}

export default ButtonsPage
