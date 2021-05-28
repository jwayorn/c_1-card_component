
module.exports = {
  purge: [
    './index.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'desktop': '1440px',
      },
      maxWidth:{
        '8xl': '90rem', //1440px
      },
      spacing:{
        // '45': '11.25rem',
        '360': '90rem',
      },
      colors: {
        'very-dark-blue' : 'hsl(233, 47%, 7%)',  
        'dark-desaturated-blue': 'hsl(244, 38%, 16%)',
        'soft-violet': 'hsl(277, 64%, 61%)',
        'main-paragraph': 'hsla(0, 0%, 100%, 0.75)',
        'stat-headings': 'hsla(0, 0%, 100%, 0.6)',
      },
      fontSize: {
        '2tiny': '.9375rem', // 15px
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'lexend': ['Lexend Deca', 'sans-serif'],
      },
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
