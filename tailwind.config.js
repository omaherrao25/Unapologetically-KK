/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white:    '#FFFFFF',
        cream:    '#FAF7F3',
        beige:    '#F3EAE0',
        gold:     '#C5A26E',
        'gold-d': '#B38E5D',
        tan:      '#DCC7A1',
        charcoal: '#1A1A1A',
        mid:      '#555555',
        muted:    '#7D7D7D',
        border:   '#EDE4D8',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:  ['Lato', 'Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
