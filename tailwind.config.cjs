/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{tsx,ts,jsx,js}'],
  theme: {
    extend: {
      backgroundImage: {
        login: 'url(/images/game.jpg)'
      },

      colors: {
        redPure: '#ff0000',
        darkBlue: '#200561'
      }
    },
  },
  plugins: [],
}
