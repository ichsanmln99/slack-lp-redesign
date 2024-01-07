/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        theme: {
          purple: "#74247A",
          "light-blue": "#69D3FA",
          "light-green": "#5CF1A4",
          yellow: "#ffc502",
          gray: "#303030",
          white: "#ffffff",
          black: "#000000",
          "black-hover": "#101010",
        },
      },
    },
  },
  plugins: [],
};
