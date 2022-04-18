const colors = require('tailwindcss/colors')
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      'tajwal': ['Tajwal', 'sans-serif'],
      'deco': ['DTNASKH1', 'sans-serif'],
    },
    colors: {
      'bg': '#f4f0e7',
      't1': '#bfdc97',
      't2': '#31a27d',
      't3': '#056159',
      't4': '#dcae64',
      'button': '#ff7263',
      'field': '#f6f3ed',
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      blue: colors.blue,
      cyan: colors.cyan,
      sky: colors.sky,
      violet: colors.violet,
      emerald: colors.emerald,
      teal: colors.teal,
    }
  },
  plugins: [],
}