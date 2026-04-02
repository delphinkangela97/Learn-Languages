/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#007FFF', // RDC Bleu
        'brand-secondary': '#F7D618', // RDC Jaune
        'brand-accent': '#CE1126', // RDC Rouge
        'lega-orange': '#EA580C' // Couleur terre/chaleureuse
      }
    },
  },
  plugins: [],
}
