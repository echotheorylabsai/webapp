'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../lib/ThemeContext';

export const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="hover:bg-background-secondary rounded-full p-2 transition-colors duration-200"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="h-5 w-5" /> // Render the Sun icon
      ) : (
        <Moon className="h-5 w-5" /> // Render the Moon icon
      )}
    </button>
  );
};
