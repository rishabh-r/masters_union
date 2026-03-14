/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#4f6ef7',
          600: '#3b5bdb',
          700: '#2f4ac4',
          800: '#1e3a8a',
          900: '#1a2a6c',
        },
        surface: '#ffffff',
        card: '#ffffff',
        muted: '#f8faff',
        border: '#e0e7ff',
        ink: '#0f172a',
        sub: '#64748b',
      },
    },
  },
  plugins: [],
}
