/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        Primary: "#1E1C22",
        Secundary: "#2f2f2f",
      },
      fontFamily: {
        sans: "Inter, sans-serif",
      },
      screens: { sm: { min: "140px" } },
    },
  },
  plugins: [],
};
