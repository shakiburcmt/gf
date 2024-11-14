import React, { useEffect, useState } from "react";

const layout: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState<boolean>(true);

  // Toggle dark mode and save preference in localStorage
  const toggleDarkMode = (): void => {
    setIsDarkMode((prevMode) => !prevMode);
    localStorage.setItem("theme", !isDarkMode ? "dark" : "light");
  };

  // Load theme from localStorage on initial render
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
    }
  }, []);

  // Toggle sidebar expansion
  const toggleSidebar = (): void => {
    setIsSidebarExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <div className={`${isDarkMode ? "dark" : ""} min-h-screen`}>
      <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 transition-all duration-300">
        {/* Sidebar */}
        <div
          className={`${
            isSidebarExpanded ? "w-64" : "w-20"
          } bg-white dark:bg-gray-800 shadow-md p-6 flex flex-col`}
        >
          {/* Logo and Toggle Button */}
          <div className="flex items-center justify-between mb-8">
            <div className="font-bold text-2xl text-blue-600 dark:text-blue-400 tracking-wider">
              {isSidebarExpanded ? "WebTech" : "W"}
            </div>
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-md focus:outline-none"
            >
              <span className={isDarkMode ? "text-white" : "text-black"}>
                ☰
              </span>
            </button>
          </div>

          {/* Navigation */}
          <nav className="space-y-6">
            <div
              className={`flex items-center ${
                isSidebarExpanded ? "text-lg font-semibold" : "justify-center"
              } text-blue-600 dark:text-blue-400`}
            >
              <span className="bg-blue-100 dark:bg-blue-600 text-blue-600 dark:text-white rounded-md w-8 h-8 flex items-center justify-center transition-colors duration-300">
                A
              </span>
              {isSidebarExpanded && <span className="ml-3">Installation</span>}
            </div>
            <div
              className={`flex items-center ${
                isSidebarExpanded ? "text-lg font-medium" : "justify-center"
              } text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300`}
            >
              <span className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md w-8 h-8 flex items-center justify-center">
                B
              </span>
              {isSidebarExpanded && <span className="ml-3">Customization</span>}
            </div>
            <div
              className={`flex items-center ${
                isSidebarExpanded ? "text-lg font-medium" : "justify-center"
              } text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300`}
            >
              <span className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md w-8 h-8 flex items-center justify-center">
                C
              </span>
              {isSidebarExpanded && <span className="ml-3">Changelog</span>}
            </div>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-grow p-8 transition duration-300 ease-in-out">
          {/* Header */}
          <header className="flex justify-between items-center mb-6">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Web Tech &gt; Documentation &gt; Installation
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                Version 1.0
              </div>
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="relative w-12 h-6 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center transition-colors duration-300"
                aria-label="Toggle dark mode"
              >
                <span
                  className={`${
                    isDarkMode
                      ? "translate-x-6 bg-blue-600"
                      : "translate-x-1 bg-yellow-400"
                  } w-5 h-5 rounded-full transform transition-transform duration-300`}
                />
              </button>
            </div>
          </header>

          {/* Content Section */}
          <section>
            <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Setup
            </h2>

            <div className="bg-white dark:bg-gray-800 shadow-lg p-6 rounded-lg transition duration-300 ease-in-out">
              {/* Getting Started */}
              <h3 className="text-xl font-medium mb-4 text-gray-900 dark:text-gray-100">
                Getting Started
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Web Tech BD is a dynamic startup software company dedicated to
                providing innovative and customized digital solutions for a wide
                range of clients. With expertise in modern technologies, Web
                Tech BD develops high-quality, scalable, and efficient software
                products tailored to meet the unique needs of businesses. The
                company focuses on delivering exceptional value, fostering
                innovation, and maintaining high standards in software
                development, making it a trusted partner for enterprises seeking
                technology-driven growth and transformation.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default layout;
