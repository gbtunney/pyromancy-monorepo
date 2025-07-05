import React from "react";
import { Link, useLocation } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: "🏠" },
    { path: "/fonts", label: "Fonts", icon: "🔤" },
    { path: "/buttons", label: "Buttons", icon: "🔘" },
    { path: "/icons", label: "Icons", icon: "⭐" },
    { path: "/colors", label: "Colors", icon: "🎨" },
    { path: "/gradients", label: "Gradients", icon: "🌈" },
    { path: "/typography", label: "Typography", icon: "📝" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-xl font-bold font-heading text-gray-900">
                  UnoCSS Testing Lab
                </h1>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors ${
                      isActive(item.path)
                        ? "border-blue-500 text-gray-900"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
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
                Current:{" "}
                <span className="font-medium">{location.pathname}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition-colors ${
                  isActive(item.path)
                    ? "bg-blue-50 border-blue-500 text-blue-700"
                    : "border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300"
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
        <div className="max-w-7xl mx-auto">
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
              {location.pathname !== "/" && (
                <li>
                  <div className="flex items-center">
                    <span className="text-gray-400 mx-2">/</span>
                    <span className="text-sm font-medium text-gray-500 capitalize">
                      {location.pathname.slice(1) || "Home"}
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
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto py-6 px-4 text-center">
          <p className="text-gray-500 text-sm font-body">
            UnoCSS Testing Lab - Built with Vite + React + TypeScript
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
