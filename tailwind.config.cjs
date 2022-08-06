/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary-color': '#6941C6',
        'secondary-color': '#344054',
        'interaction-color': '#E5E7EB'
      }
    },
  },
  plugins: [],
}
