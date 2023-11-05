/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      height: {
        '38':'38rem',
      },
      skew: {
        '17': '17deg',
      },
      fontFamily: {
        titles: ['PT Serif'],
        text: ['Nunito']
      },
      screens:{
        'phone': '360px'
      }
    },
  },
  plugins: [],
}

