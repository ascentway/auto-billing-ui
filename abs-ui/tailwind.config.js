/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      screens: {
      'no-scroll': {'raw': '(max-height: 100vh)'},
    },
    },
  },
  plugins: [],
}
