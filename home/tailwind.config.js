/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        boz: "#F4F4F4",
        "boz-kimi": "#CCCCCC",
        "goyumtul": "#EEF7FB",
        "cehrayimtil": "#F8F1FF",
      },
    },
  },
  plugins: [],
};
