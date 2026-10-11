/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50:  '#fdfcf7',
          100: '#faf8ef',
          200: '#f5f0dc',
          300: '#ede4c4',
          400: '#e2d3a6',
          500: '#d4be83',
        },
        cream: {
          50:  '#fefef9',
          100: '#fdfcf0',
          200: '#faf6dc',
          300: '#f5efc0',
          400: '#ede49e',
          500: '#e0d475',
        },
        sage: {
          50:  '#f4f7f4',
          100: '#e6ede6',
          200: '#ccdacc',
          300: '#a8c0a8',
          400: '#7ea07e',
          500: '#5c845c',
          600: '#456445',
          700: '#374e37',
          800: '#2d3f2d',
          900: '#263426',
        },
        gold: {
          50:  '#fdf9ed',
          100: '#faf0cc',
          200: '#f4df95',
          300: '#ecc95a',
          400: '#e5b332',
          500: '#c9941a',
          600: '#a67514',
          700: '#855a13',
          800: '#6e4816',
          900: '#5c3b18',
        },
        warmWhite: '#fefefe',
        brandPrimary: '#5c845c',
        brandAccent:  '#c9941a',
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      boxShadow: {
        'header':     '0 1px 0 0 rgba(0,0,0,0.06), 0 4px 24px -2px rgba(0,0,0,0.07)',
        'header-scrolled': '0 2px 32px -4px rgba(0,0,0,0.13)',
        'dropdown':   '0 8px 40px -4px rgba(0,0,0,0.13), 0 2px 8px -2px rgba(0,0,0,0.07)',
        'btn-gold':   '0 2px 12px 0 rgba(201,148,26,0.28)',
        'btn-gold-hover': '0 4px 20px 0 rgba(201,148,26,0.40)',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        'fade-in-down': {
          '0%':   { opacity: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in': {
          '0%':   { opacity: '0', transform: 'translateX(100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'shimmer': {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.22s ease-out both',
        'slide-in':     'slide-in 0.30s cubic-bezier(0.4, 0, 0.2, 1) both',
        'shimmer':      'shimmer 2.4s linear infinite',
      },
    },
  },
  plugins: [],
};