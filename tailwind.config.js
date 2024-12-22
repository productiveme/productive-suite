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
          DEFAULT: '#0476D9',
          dark: '#0442BF',
          light: '#0597F2',
          lighter: '#05AFF2'
        },
        background: '#F2EAD0'
      }
    },
  },
  plugins: [],
}
