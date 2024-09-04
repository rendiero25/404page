/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}",
            "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        'primary': ['Roboto', 'sans-serif'],
      },
      screens: {
        'sm2x': {'min': '0px', 'max': '639px'}
      }
    },
  },
  plugins: [],
}

