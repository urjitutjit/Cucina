/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F8F6F2',
        'brown-primary': '#6B4F3A',
        'brown-light': '#8B6F5A',
        'brown-dark': '#4A3427',
        'gold-primary': '#C8A96A',
        'gold-light': '#D9C08A',
        'gold-dark': '#A88950',
        dark: '#1D1D1D',
        'gray-text': '#555555',
        'gray-light': '#8A8A8A',
        'gray-border': '#E5E0D8',
        'glass-bg': 'rgba(255,255,255,0.08)',
        'glass-border': 'rgba(255,255,255,0.15)',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      fontSize: {
        '8xl': ['6rem', { lineHeight: '1.05' }],
        '9xl': ['8rem', { lineHeight: '1' }],
        '10xl': ['10rem', { lineHeight: '0.95' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '120': '30rem',
        '140': '35rem',
        '160': '40rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-luxury': 'linear-gradient(135deg, #6B4F3A 0%, #C8A96A 50%, #6B4F3A 100%)',
        'gradient-dark': 'linear-gradient(180deg, #1D1D1D 0%, #2D2020 100%)',
        'gradient-cream': 'linear-gradient(180deg, #F8F6F2 0%, #EDE9E1 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease forwards',
        'fade-in': 'fadeIn 1s ease forwards',
        float: 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        shimmer: 'shimmer 2s linear infinite',
        'border-glow': 'borderGlow 2s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        borderGlow: {
          '0%, 100%': { boxShadow: '0 0 5px #C8A96A, 0 0 10px #C8A96A' },
          '50%': { boxShadow: '0 0 20px #C8A96A, 0 0 40px #C8A96A' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      transitionTimingFunction: {
        luxury: 'cubic-bezier(0.76, 0, 0.24, 1)',
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1200': '1200ms',
      },
      backdropBlur: {
        xs: '2px',
        '4xl': '40px',
      },
      boxShadow: {
        luxury: '0 25px 80px -12px rgba(107, 79, 58, 0.25)',
        'luxury-lg': '0 40px 120px -20px rgba(107, 79, 58, 0.35)',
        gold: '0 0 30px rgba(200, 169, 106, 0.3)',
        'gold-lg': '0 0 60px rgba(200, 169, 106, 0.5)',
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        card: '0 4px 40px rgba(0,0,0,0.08)',
        'card-hover': '0 20px 80px rgba(0,0,0,0.15)',
      },
      screens: {
        '3xl': '1920px',
        '4xl': '2560px',
      },
    },
  },
  plugins: [],
}
