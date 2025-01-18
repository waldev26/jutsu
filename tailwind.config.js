/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}', './src/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        title: '#1F1F1F',
        black100: '#000000',
        gray100: '#EFEFEF',
        gray200: '#C8C8C8',
        green100: '#0CA104',
      },
    },
  },
  plugins: [],
};
