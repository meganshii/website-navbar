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
        "golden-w": "300px", // Base width
        "golden-h": `${300 / 1.618}px`, // Calculated height based on the golden ratio
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
