'use client';

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { themes, type ThemeName } from './themes';

interface ThemeContextType {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeName>('dark'); // Default dark

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as ThemeName;
    if (storedTheme && themes[storedTheme]) {
      setThemeState(storedTheme);
    }
  }, []);

  const setTheme = (newTheme: ThemeName) => {
    setThemeState(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const root = document.documentElement;
    const themeVars = themes[theme];

    // Apply CSS custom properties
    Object.entries(themeVars).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });

    // Apply theme class for Tailwind compatibility
    root.className = root.className.replace(/theme-\w+/g, '');
    root.classList.add(`theme-${theme}`);

    // Legacy dark mode support
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
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
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};
