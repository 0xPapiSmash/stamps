/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  theme: {
    extend: {
      colors: {
        primary: '',
        // secondary: '#',
        background: '#FAFAFC',
      },
    },

  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
