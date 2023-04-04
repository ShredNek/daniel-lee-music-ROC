/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        short: { raw: "(min-height: 800px)" },
        // => @media (min-height: 800px) { ... }
      },
      fontFamily: {
        ralewayReg: "'Raleway-reg', sans-serif",
        ralewayRegItal: "'Raleway-italic', sans-serif",
        ralewayThin: "'Raleway-thin', sans-serif",
        ralewayThinItal: "'Raleway-thin-italic', sans-serif",
        ralewayLight: "'Raleway-light', sans-serif",
        ralewayLightItal: "'Raleway-light-italic', sans-serif",
        ralewayBold: "'Raleway-bold', sans-serif",
        ralewayBoldItal: "'Raleway-bold-italic', sans-serif",
      },
      colors: {
        "boat-red-ripple": "#F0142E",
        "white-ripple": "#FFFFFF",
        "black-ripple": "#000000",
      },
    },
  },
  plugins: [],
};
