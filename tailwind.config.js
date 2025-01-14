module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ['Nunito', 'serif']
      },
      screens: {
        'xs': '300px'
      }
    },
  },
  plugins: [],
}
