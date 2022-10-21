/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        Primary: "#242424",
        Secundary: "#2f2f2f",
      },
      backgroundImage: {
        projGradient:
          "linear-gradient(90deg, rgba(149,131,226,1) 0%, rgba(90,124,203,1) 35%, rgba(190,130,216,1) 100%)",
      },
      fontFamily: {
        sans: "Inter, sans-serif",
      },
    },
  },
  plugins: [],
};
