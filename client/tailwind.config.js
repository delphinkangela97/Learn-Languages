/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#141416',
        'card-bg': '#22222a',
        'card-bg-light': '#2a2a35',
        'primary-purple': '#5b42f3',
        'primary-purple-hover': '#4b32e3',
        'vibrant-green': '#9eff00',
        'vibrant-orange': '#ff9d00',
        'light-text': '#f4f4f5',
        'gray-text': '#a1a1aa'
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
