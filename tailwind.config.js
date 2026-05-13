/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#F7F2EB',
        beige: '#EFE7DD',
        gold: '#C8A96B',
        'gold-dark': '#A88B4A',
        rose: '#B78A8A',
        charcoal: '#111111',
        'charcoal-soft': '#3D3D3D',
        'charcoal-muted': '#6B6B6B',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'luxury': '0 4px 40px rgba(200, 169, 107, 0.12)',
        'luxury-hover': '0 8px 60px rgba(200, 169, 107, 0.2)',
        'card': '0 2px 30px rgba(17, 17, 17, 0.06)',
        'card-hover': '0 8px 50px rgba(17, 17, 17, 0.12)',
      },
      backgroundImage: {
        'gradient-luxury': 'linear-gradient(135deg, #F7F2EB 0%, #EFE7DD 50%, #F7F2EB 100%)',
        'gradient-gold': 'linear-gradient(135deg, #C8A96B 0%, #B78A8A 100%)',
        'gradient-warm': 'linear-gradient(180deg, #F7F2EB 0%, #EFE7DD 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 4s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
