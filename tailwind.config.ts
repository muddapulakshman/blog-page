import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 40px rgba(99,102,241,0.18)',
        soft: '0 24px 80px rgba(0,0,0,0.18)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top, rgba(99,102,241,0.24), transparent 40%), radial-gradient(circle at 20% 40%, rgba(168,85,247,0.18), transparent 25%), linear-gradient(180deg, #0f172a 0%, #020617 100%)',
      },
      colors: {
        surface: '#111827',
        panel: 'rgba(15, 23, 42, 0.72)',
        glow: '#7c3aed',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
