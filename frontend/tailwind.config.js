/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/Components/**/*.{js,ts,jsx,tsx}",
    "./src/Pages/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    fontFamily: {
      'EduVICWANTBeginner': ["Edu VIC WA NT Beginner", 'sans-serif'],
      'metamasie': ["Matemasie", 'sans-serif'],
      'roboto': ["Roboto", 'sans-serif'],
    }
  },
  plugins: [],
}

