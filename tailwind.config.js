/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '#434343',
        background: '#FBFBFB',
        black: '#1C1C1C',
        sea: '#45A3CC',
      },
    },
  },
  plugins: [],
}
