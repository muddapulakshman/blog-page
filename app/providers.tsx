'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';

type ThemeContextValue = {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const stored = window.localStorage.getItem('prashanth-theme');
    const initial = stored === 'light' ? 'light' : 'dark';
    setTheme(initial);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('light', theme === 'light');
    window.localStorage.setItem('prashanth-theme', theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      toggleTheme: () => setTheme((current) => (current === 'dark' ? 'light' : 'dark')),
    }),
    [theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
