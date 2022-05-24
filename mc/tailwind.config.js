const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./styles/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    animation: {
      'spin-slow-running': 'spin 20s linear infinite running',
      'spin-slow-paused': 'spin 20s linear infinite paused',
    },
  },
  variants: {},
  plugins: [],
}