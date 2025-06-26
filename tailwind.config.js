/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'deep-dark-blue': '#0a0c1f',
        'light-cream': '#f8f1e9',
        'royal-blue': '#004aad',
        'forest-green': '#1a8754',
        'soft-lilac': '#a68bba',
        'golden-beige': '#d4a373',
        'dark-bluish-gray': '#3a3f5a',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};