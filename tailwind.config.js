/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center : true,
      padding : '16px',
    },
    extend: {
      colors: {
        "primary" : "#0f766e",
        "dark" : "#020617",
        "secondary" : "#475569"
      },
      screens : {
        '2xl' : '1320px',
      }
    },
  },
  plugins: [],
}

