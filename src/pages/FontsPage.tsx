import React, { useState } from "react";
import FontTester from "../components/FontTester";
import TypographySample from "../TypographySample";

const FontsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"fonts" | "typography">("fonts");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Tab Navigation */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-8">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab("fonts")}
              className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                activeTab === "fonts"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Font Testing Lab
            </button>
            <button
              onClick={() => setActiveTab("typography")}
              className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                activeTab === "typography"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Typography Showcase
            </button>
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      <div className="min-h-screen">
        {activeTab === "fonts" && <FontTester />}
        {activeTab === "typography" && <TypographySample />}
      </div>
    </div>
  );
};

export default FontsPage;
