/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "thankyou_page.html",
    "./node_modules/flowbite/**/*.js",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        hero: "linear-gradient(230deg, rgba(255, 255, 255, 1) 44%, rgba(198, 230, 225, 1) 67%, rgba(27, 156, 133, 1) 100%)",
        hero_dark:
          "linear-gradient(230deg, rgba(15,23,42,1) 44%, rgba(15,23,42,1) 70%, rgba(27,156,133,1) 100%)",
      },
      colors: {
        primary: "#1B9C85",
        secondary: "#4C4C6D",
        // white: "#E8F6EF",
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
