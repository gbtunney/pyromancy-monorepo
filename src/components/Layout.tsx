import React from 'react'
import { Link, useLocation } from 'react-router-dom'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/fonts', label: 'Fonts', icon: '🔤' },
    { path: '/buttons', label: 'Buttons', icon: '🔘' },
    { path: '/icons', label: 'Icons', icon: '⭐' },
    { path: '/colors', label: 'Colors', icon: '🎨' },
    { path: '/gradients', label: 'Gradients', icon: '🌈' },
    { path: '/typography', label: 'Typography', icon: '📝' },
  ]

  const isActive = (path: string) => {
    return location.pathname === path
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <nav className="border-b bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex">
              <div className="flex flex-shrink-0 items-center">
                <h1 className="font-heading text-xl font-bold text-gray-900">
                  UnoCSS Testing Lab
                </h1>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium transition-colors ${
                      isActive(item.path)
                        ? 'border-blue-500 text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    }`}
                  >
                    <span className="mr-2">{item.icon}</span>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex items-center">
              <div className="text-sm text-gray-500">
                Current:{' '}
                <span className="font-medium">{location.pathname}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="sm:hidden">
          <div className="space-y-1 pb-3 pt-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block border-l-4 py-2 pl-3 pr-4 text-base font-medium transition-colors ${
                  isActive(item.path)
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800'
                }`}
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="bg-gray-100 px-4 py-2">
        <div className="mx-auto max-w-7xl">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link
                  to="/"
                  className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600"
                >
                  Testing Lab
                </Link>
              </li>
              {location.pathname !== '/' && (
                <li>
                  <div className="flex items-center">
                    <span className="mx-2 text-gray-400">/</span>
                    <span className="text-sm font-medium capitalize text-gray-500">
                      {location.pathname.slice(1) || 'Home'}
                    </span>
                  </div>
                </li>
              )}
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="py-8">{children}</main>

      {/* Footer */}
      <footer className="mt-12 border-t bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 text-center">
          <p className="font-body text-sm text-gray-500">
            UnoCSS Testing Lab - Built with Vite + React + TypeScript
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
