/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/nav/nav.js", "./src/cards/cards.js"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        boz: "#F4F4F4",
        "boz-kimi": "#CCCCCC",
      },
    },
  },
  plugins: [],
};
