/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'facebook-blue': "#0866FF",
        'facebook-grey': "#F2F4F7",
        'facebook-green': "#42B72A",
      },
      spacing:{
        '580': '580px',
        '380': '380px',
      },
    },
  },
  plugins: [],
}

