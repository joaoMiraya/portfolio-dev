/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bgteste': "url('./assets/assets/images/bgteste.png')",
       
      }
    },
  },
  plugins: [],
}

