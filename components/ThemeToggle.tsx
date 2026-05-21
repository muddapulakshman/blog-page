'use client';

import { useTheme } from '../app/providers';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white transition hover:border-white/20 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? 'Light' : 'Dark'}
    </button>
  );
}
