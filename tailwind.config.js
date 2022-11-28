/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'playfair': ['Playfair Display', 'ui-serif'],
      'garamond': ['EB Garamond', 'ui-serif']
    },
    fontSize: {
      xl: '64px'
    },
    extend: {
      colors: {
        'theme-yellow': '#FFF175'
      }
    },
  },
  plugins: [],
}
