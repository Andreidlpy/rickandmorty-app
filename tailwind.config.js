module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        fade: 'fade 0.5s ease-in',
      },
      keyframes:{
        fade: {
          '0%': { opacity: '0'},
          '100%': {opacity: '1'},
        }
      },
    },

  },
  variants: {
    extend: {
      
    },
  },
  plugins: [],
}