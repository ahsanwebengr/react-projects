/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mart_white_100: '#E1E1E1',
        mart_white_200: '#F5F5F5',
        mart_white_300: '#F3F9FB',
        mart_brand: '#008ECC',
        mart_brand2: '#FFC915',
        mart_heading: '#222',
      }
    },
  },
  plugins: [],
};