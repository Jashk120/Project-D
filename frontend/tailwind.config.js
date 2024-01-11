/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url(./src/assets/BackGround.webp)",
      },
      colors: {
        'gray-h': '#565656',
         'yellow-c': '#D3A437'
      },    
    },
  },
  plugins: [],
}