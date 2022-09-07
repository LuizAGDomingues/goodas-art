/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Nunito': ['Nunito', 'Roboto'],
        'Pacifico': ['Pacifico', 'Roboto'],
        'Dancing': ['Dancing Script', 'Roboto'],
      },
      keyframes: {
        fade: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
    },
  },
  plugins: [],
}