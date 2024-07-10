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
        yellow: "#F8BD1C",
        blue: "#4339F2",
        red: "#FF3838",
        purple: "#891BE8",
        green: "#1AD698",
      },
    },
  },
  plugins: [],
};
