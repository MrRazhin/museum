/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  
  theme: {
    extend: {
      fontFamily: {
           sans: ['Rubik', 'sans-serif'],
         },
    }, 
  },
  plugins: [require("@tailwindcss/typography")],
}

