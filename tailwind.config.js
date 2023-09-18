/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Add your custom colors here
        primary: "#2C3639",
        secondary: "#3F4E4F",
        customColor: {
          shades: "#A27B5C",
          action: "#DCD7C9",
          hover: "#EAC696",
          colortext: "#DAC0A3",
        },
      },
    },
  },
  plugins: [],
};
