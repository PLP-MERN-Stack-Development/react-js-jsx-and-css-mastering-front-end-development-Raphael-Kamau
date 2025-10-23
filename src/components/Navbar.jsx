import React from 'react';
import { useTheme } from '../utils/ThemeContext';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <nav className="flex justify-between items-center p-4">
      <h1 className="text-xl font-bold">React Task Manager</h1>
      <button
        onClick={toggleDarkMode}
        className="flex items-center gap-2 px-3 py-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:scale-105 transition"
      >
        {isDarkMode ? (
          <>
            <SunIcon className="w-5 h-5 text-yellow-400" />
            Light Mode
          </>
        ) : (
          <>
            <MoonIcon className="w-5 h-5 text-blue-500" />
            Dark Mode
          </>
        )}
      </button>
    </nav>
  );
};

export default Navbar;
