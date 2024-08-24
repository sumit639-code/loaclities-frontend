// const { Poppins } = require('next/font/google');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        RedHat: ['"Red Hat Display"', "sans-serif"],
        Poppins: ['"Poppins"', "sans-serif"],
        Roboto: ['"Roboto"', "sans-serif"],
        BebasNeue: ['"Bebas Neue"', "sans-serif"],
        Lato: ['"Lato"', "sans-serif"],

        // Add more custom font families as needed
      },
    },
  },
  plugins: [],
};
