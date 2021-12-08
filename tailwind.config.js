module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  important: true,
  mode: 'jit',
  theme: {
    container: {
      screens: {
        sm: '450px',
        md: '768px',
        lg: '850px',
        xl: '1000px'
      }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
