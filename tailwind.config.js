/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      skew: {
        '17': '17deg',
      },
      fontFamily: {
        titles: ['PT Serif'],
        text: ['Nunito']
      },
    },
  },
  plugins: [],
}

