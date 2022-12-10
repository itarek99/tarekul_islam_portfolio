/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      heading: ['Cormorant Garamond', 'serif'],
    },
    extend: {},
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/colors/themes')['[data-theme=business]'],
          'base-100': '#252734',
          'base-content': '#ffffff',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
