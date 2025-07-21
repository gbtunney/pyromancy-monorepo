import React, { useState } from 'react'
import ButtonTester from '../components/ButtonTester'
import ButtonExamples from '../components/ButtonExamples'
import ButtonValidationTest from '../components/ButtonValidationTest'

const ButtonsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    'tester' | 'examples' | 'validation'
  >('tester')

  // Dark mode toggle logic
  const [isDark, setIsDark] = useState(() =>
    typeof window !== 'undefined'
      ? document.documentElement.classList.contains('dark')
      : false
  )

  const toggleDarkMode = () => {
    const html = document.documentElement
    if (html.classList.contains('dark')) {
      html.classList.remove('dark')
      setIsDark(false)
    } else {
      html.classList.add('dark')
      setIsDark(true)
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* Tab Navigation + Header */}
      <div className="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-2 md:px-0">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('tester')}
              className={`border-b-2 px-2 py-4 text-sm font-medium transition-colors ${
                activeTab === 'tester'
                  ? 'border-blue-500 text-blue-600 dark:border-blue-400 dark:text-blue-300'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:border-gray-500 dark:hover:text-gray-200'
              }`}
            >
              Button Tester
            </button>
            <button
              onClick={() => setActiveTab('examples')}
              className={`border-b-2 px-2 py-4 text-sm font-medium transition-colors ${
                activeTab === 'examples'
                  ? 'border-blue-500 text-blue-600 dark:border-blue-400 dark:text-blue-300'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:border-gray-500 dark:hover:text-gray-200'
              }`}
            >
              Custom Button Examples
            </button>
            <button
              onClick={() => setActiveTab('validation')}
              className={`border-b-2 px-2 py-4 text-sm font-medium transition-colors ${
                activeTab === 'validation'
                  ? 'border-blue-500 text-blue-600 dark:border-blue-400 dark:text-blue-300'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:border-gray-500 dark:hover:text-gray-200'
              }`}
            >
              Validation Test
            </button>
          </nav>
          {/* Cute Dark Mode Toggle in Header */}
          <button
            onClick={toggleDarkMode}
            className="flex items-center gap-2 rounded-full px-3 py-1.5 text-base font-semibold border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors shadow-sm ml-4"
            aria-label="Toggle dark mode"
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? (
              <span className="i-twemoji-moon text-xl" aria-hidden="true" />
            ) : (
              <span className="i-twemoji-sun text-xl" aria-hidden="true" />
            )}
            <span className="sr-only">Toggle dark mode</span>
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="min-h-screen text-gray-900 dark:text-gray-100 transition-colors">
        {activeTab === 'tester' && <ButtonTester />}
        {activeTab === 'examples' && <ButtonExamples />}
        {activeTab === 'validation' && <ButtonValidationTest />}
      </div>
    </div>
  )
}

export default ButtonsPage
