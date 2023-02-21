/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
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
};
