/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF8F4',
        cream: '#F0EBE0',
        slate: '#2C4656',
        'slate-mid': '#3D5A6E',
        'slate-dark': '#1E333F',
        bronze: '#8B6240',
        'bronze-light': '#B8905E',
        'bronze-pale': '#F2E8D9',
        charcoal: '#1C1C1C',
        mid: '#5A5A5A',
        soft: '#9A9A9A',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Jost', 'Helvetica Neue', 'sans-serif'],
      },
      fontSize: {
        tag: ['0.6875rem', { letterSpacing: '0.22em' }],
      },
    },
  },
  plugins: [],
}
