/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx,svg}",
    "./src/*.{ts,vue}",
    "./node_modules/flowbite/**/*.js",
  ],

  darkMode: 'class',

  theme: {
    extend: {},
  },

  plugins: [
    require('flowbite/plugin'),
  ],
}
