// lib/ThemeContext.tsx

'use client';

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { THEME_NAMES, type ThemeName } from './themes';

interface ThemeContextType {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  // 'dark' is the default theme if nothing is in localStorage.
  const [theme, setThemeState] = useState<ThemeName>('dark');

  // This effect runs once on mount to get the stored theme.
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as ThemeName;
    // Check if the stored theme is one of our valid themes.
    if (storedTheme && THEME_NAMES.includes(storedTheme)) {
      setThemeState(storedTheme);
    }
  }, []);

  // This is the function exposed to the app to change the theme.
  const setTheme = (newTheme: ThemeName) => {
    setThemeState(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // This effect's only job is to sync the theme state to the <html> class.
  useEffect(() => {
    const root = document.documentElement;

    // Safely remove all possible theme classes.
    root.classList.remove(...THEME_NAMES.map(name => `theme-${name}`));

    // Add the current theme class.
    root.classList.add(`theme-${theme}`);
  }, [theme]);

  const isDark = theme === 'dark';
  const toggleTheme = () => setTheme(isDark ? 'light' : 'dark');

  return (
    <ThemeContext.Provider value={{ theme, setTheme, isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
