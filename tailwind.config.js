/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}",
            "./index.html",
            "./components/**/*.{html,js,jsx,ts,tsx}",
            "./image/**/*.{jpg,jpeg,png,svg}",
            "./src/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        'primary': ['Roboto', 'sans-serif']
      },
      screens: {
        'sm2x': {'min': '0px', 'max': '639px'}
      }
    }
  },
  plugins: [],
}

