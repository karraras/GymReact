/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    container: {
      center: true,
      screens: {
        sm: "600px",
        md: "728px",
        lg: "840px",
        xl: "1240px",
        "2xl": "1496px",
      },
    },
    colors: {
      text: "var(--color-text) ",
      content: "var(--color-content)",
      orange: "#ff9800",
      white: "white",
      black: "black",
      pink: "hwb(0deg 0% 0% / 10%)",
      darkOrange: "#ff5722",
      gray: "gray",
      blue: "blue",
    },
    backgroundImage: {
      hero: "url('./public/img/bg_hero.svg')",
    },
    boxShadow: {
      light: " 0 5px 15px rgba(0, 0, 0, 0.1)",
      side: "3px 1px 20px 0px grey",
      box: "0px 0px 1px grey;",
    },
  },
  plugins: [],
};
