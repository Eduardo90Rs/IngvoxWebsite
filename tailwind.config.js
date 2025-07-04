/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Nova identidade visual IngVox
        'brand': {
          'bg-primary': '#E2E8E9',    // Off-white principal com leve toque roxo
          'bg-secondary': '#F8F9F9',  // Off-white claro para contraste
          'text': '#222539',          // Deep Blue para texto principal
          'accent': '#439172',        // Forest Green para CTAs e destaques
          'highlight': '#A899BC',     // Lavender para detalhes e bordas
        },
        // Cores antigas - manter temporariamente para transição
        'light-cream': '#f9f6f0',
        'dark-bluish-gray': '#3a4750',
        'deep-dark-blue': '#22223b',
        'royal-blue': '#4361ee',
        'soft-lilac': '#9d8fb3',
        'golden-beige': '#e6b980',
        'forest-green': '#1a8754',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 10px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};