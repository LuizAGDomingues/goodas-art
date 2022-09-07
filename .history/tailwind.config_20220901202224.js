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
        fade_primary: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        fade_secondary: {
          'from': { opacity: '0' },
          'to': { opacity: '0.8' },
        },
      },
      animation: {
        fade_primary: 'fade_primary 5s ease-in-out',
        fade_secondary: 'fade 3s ease-in-out',
      },
    },
  },
  plugins: [],
}