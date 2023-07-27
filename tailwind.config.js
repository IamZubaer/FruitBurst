module.exports = {
  content: ['./*.html'],
  daisyui: {
    themes: ["cupcake"],
  },
  theme: {
    screens: {
      sm: '480px',
      md: '769px',
      lg: '1440px',
    },
    extend: {
      colors: {
        lightRed: '#F85559',
        lightGray: '#121212',
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
