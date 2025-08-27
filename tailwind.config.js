/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Sistema de cores clean e minimalista
        'brand': {
          'bg-primary': '#E2E8E9',    // Off-white principal com leve toque roxo
          'bg-secondary': '#F8F9F9',  // Off-white claro para contraste
          'bg-tertiary': '#FDFDFD',   // Branco quase puro para cards
          'text': '#222539',          // Deep Blue para texto principal
          'text-secondary': '#4A5568', // Texto secundário mais suave
          'text-muted': '#718096',    // Texto com baixo contraste
          'accent': '#439172',        // Forest Green para CTAs e destaques
          'accent-light': '#52A085',  // Verde mais claro para hover
          'highlight': '#A899BC',     // Lavender para detalhes e bordas
          'highlight-light': '#C4B5DB', // Lavender mais claro
        },
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      fontSize: {
        // Typography system clean com 5 níveis hierárquicos
        'display': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'hero': ['4rem', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
        'mega': ['4.5rem', { lineHeight: '1.0', letterSpacing: '-0.03em', fontWeight: '200' }],
        'h1': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.015em' }],
        'h2': ['2rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'h3': ['1.5rem', { lineHeight: '1.4', letterSpacing: '-0.005em' }],
        'mission-card': ['1.125rem', { lineHeight: '1.4', letterSpacing: '-0.005em' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
      },
      spacing: {
        // Sistema de espaçamento baseado em 8px
        '18': '4.5rem',   // 72px
        '22': '5.5rem',   // 88px
        '26': '6.5rem',   // 104px
        '30': '7.5rem',   // 120px
        '34': '8.5rem',   // 136px
        '38': '9.5rem',   // 152px
        '42': '10.5rem',  // 168px
      },
      boxShadow: {
        // Sombras minimalistas e sutis
        'subtle': '0 1px 3px rgba(34, 37, 57, 0.03)',
        'soft': '0 2px 8px rgba(34, 37, 57, 0.04)',
        'medium': '0 4px 16px rgba(34, 37, 57, 0.06)',
        'focus': '0 0 0 3px rgba(168, 153, 188, 0.15)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        // Animações sutis e elegantes
        'fade-in': 'fadeIn 0.4s ease-out',
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'fade-in-stagger': 'fadeInStagger 0.6s ease-out both',
        'scale-in': 'scaleIn 0.3s ease-out',
        'lift': 'lift 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        'breathing': 'breathing 3s ease-in-out infinite',
        'rotate-subtle': 'rotateSubtle 0.3s ease-out',
        'ambient-glow': 'ambientGlow 4s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'reveal': 'reveal 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        'pulse-subtle': 'pulseSubtle 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(1rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        breathing: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
        },
        fadeInStagger: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        lift: {
          '0%': { transform: 'translateY(0) scale(1)', boxShadow: '0 2px 8px rgba(34, 37, 57, 0.04)' },
          '100%': { transform: 'translateY(-8px) scale(1.02)', boxShadow: '0 8px 32px rgba(34, 37, 57, 0.12)' },
        },
        rotateSubtle: {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '100%': { transform: 'rotate(10deg) scale(1.1)' },
        },
        ambientGlow: {
          '0%, 100%': { boxShadow: '0 0 40px rgba(168, 153, 188, 0.2)' },
          '50%': { boxShadow: '0 0 60px rgba(168, 153, 188, 0.4)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.9' },
        },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'gentle': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      backgroundImage: {
        // Gradientes lavender pré-definidos
        'gradient-lavender-subtle': 'linear-gradient(to bottom right, rgb(168, 153, 188, 0.05), #E2E8E9)',
        'gradient-lavender-medium': 'linear-gradient(to bottom right, rgb(168, 153, 188, 0.15), #F8F9F9)',
        'gradient-lavender-strong': 'linear-gradient(to bottom right, rgb(168, 153, 188, 0.8), #E2E8E9)',
        'gradient-lavender-footer': 'linear-gradient(135deg, rgb(168, 153, 188, 0.85), rgb(226, 232, 233, 0.95))',
        // Gradientes complementares
        'gradient-accent-subtle': 'linear-gradient(to right, rgb(67, 145, 114, 0.1), transparent)',
        'gradient-hero-bg': 'linear-gradient(135deg, rgb(168, 153, 188, 0.08), rgb(226, 232, 233, 0.95), rgb(248, 249, 249, 1))',
        // Gradientes para cards "Como Funciona"
        'gradient-step-1': 'linear-gradient(135deg, rgb(168, 153, 188, 0.12), rgb(67, 145, 114, 0.08))',
        'gradient-step-2': 'linear-gradient(135deg, rgb(67, 145, 114, 0.12), rgb(168, 153, 188, 0.08))',
        'gradient-step-hover-1': 'linear-gradient(135deg, rgb(168, 153, 188, 0.20), rgb(67, 145, 114, 0.15))',
        'gradient-step-hover-2': 'linear-gradient(135deg, rgb(67, 145, 114, 0.20), rgb(168, 153, 188, 0.15))',
        'gradient-step-number': 'linear-gradient(135deg, rgb(168, 153, 188, 0.9), rgb(67, 145, 114, 0.9))',
        'gradient-step-arrow': 'linear-gradient(135deg, rgb(168, 153, 188, 0.08), rgb(67, 145, 114, 0.08))',
      },
    },
  },
  plugins: [],
};