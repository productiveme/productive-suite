/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
    './src/app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#049DBF',
          light: '#05DBF2',
          lighter: '#05F2F2'
        },
        secondary: {
          DEFAULT: '#D9A84E'
        },
        background: '#F7EDEB'
      }
    },
  },
  plugins: [],
}
