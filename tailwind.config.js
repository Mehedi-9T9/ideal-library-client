/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        platypi: "Platypi, serif", // Adds a new `font-display` class
        poppins: "Poppins, serif", // Adds a new `font-display` class
      }
    }
  },
  plugins: [
    require('daisyui'),
  ],
}
