/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm: '410px',
      md: '760px',
      lg: '976px',
      xl: '1440px'

    },
    extend: {
      backgroundImage: {
        'header': "url('/asset/header2.png')", 
      }
    },
  },
  plugins: [],
}

