/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      mainyellow: "#F5BE32",
      semiyelloe: "#F3D382",
      white: "#FFFFFF",
      darktheme: "#1E1E1E",
      black: "#000000",
    },
    extend: {
      backgroundImage: {
        "hero-bg": "url('./src/assets/heropageIMG/luxurybg4.png')",
      },
    },
  },

  plugins: [],
};
