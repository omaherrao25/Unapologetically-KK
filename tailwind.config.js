/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: '#202020',
        secondary: '#666666',
        'pink-accent': '#E89AAA',
        'muted-rose': '#D98C9B',
        'warm-beige': '#F3E7E1',
        'soft-gold': '#D5B07B',
        'soft-blush': '#F6E7E7',
        'bg-luxury': '#FAF7F2',
      },
      fontFamily: {
        heading: ['Outfit', 'Inter', 'sans-serif'],
        sans: ['Inter', 'Manrope', 'sans-serif'],
        editorial: ['Manrope', 'sans-serif'],
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%)',
      },
    },
  },
  plugins: [],
}
