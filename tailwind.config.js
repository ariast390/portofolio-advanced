/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#1B9C85",
        secondary: "#4C4C6D",
        white: "#E8F6EF",
        third: "#F9ED69",
        dark: "#0f172a",
        blue_button: "#1b439c",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
