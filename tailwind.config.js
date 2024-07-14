/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': 'rgb(32, 152, 209) 0px 0px 10px 3px, rgb(0, 0, 0) 0px 0px 10px;',
      }
    },
  },
  plugins: [],
}

