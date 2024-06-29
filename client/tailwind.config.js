/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
      },
      fontSize: {
        16: "16px",
        14: "14px",
      },
      spacing: {
        "golden-h": "210px",
        "golden-w": `${460 / 1.618}px`,
      },
      screens: {
        "1000px": "1050px",
        "1100px": "1110px",
        "800px": "800px",
        "1300px": "1300px",
        "400px": "400px",
      },
    },
  },
  plugins: [],
};
