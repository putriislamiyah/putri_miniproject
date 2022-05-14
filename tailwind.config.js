module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'orange': {
          200: '#fffbf5',
          400: '#fff7ed',
          500: '#FFF0DC',
          800: '#FB9333'
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}