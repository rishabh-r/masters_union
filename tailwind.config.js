/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f4ff',
          100: '#e0eaff',
          500: '#4f6ef7',
          600: '#3b5bdb',
          700: '#2f4ac4',
          900: '#1a2a6c',
        },
        dark: '#0f1117',
        card: '#1a1d27',
        surface: '#22263a',
        border: '#2a2d3a',
      },
    },
  },
  plugins: [],
}

