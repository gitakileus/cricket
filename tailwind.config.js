/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      theme: "#14171C",
      primary: "#21BBB3",
      secondary: "#008A81",
      "border-color": "#868686",
      main: "#1B1F26",
    },
    fontFamily: {
      zuumeroughbolditalic: ["zuumerough-bolditalic", "sans-serif"],
      zuumeroughbold: ["zuumerough-bold", "sans-serif"],
      "dm-sans": '"DM Sans"',
      'Roboto': ["Roboto", "sans-serif"],
    },
    screens: {
      sm: { max: "768px", min: "350px" },
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      "2xl": "1900px",
    },
  },
  variants: {
    // all the following default to ['responsive']
    mixBlendMode: ["responsive"],
    backgroundBlendMode: ["responsive"],
    isolation: ["responsive"],
  },

  plugins: [
    require("tailwindcss-blend-mode"), // no options to configure
  ],
};
