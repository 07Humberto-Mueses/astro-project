/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      color: {
        customGreen: "#95b8a4",
        customOrange: "#ED624E",
        customBlack: "#0A0A0A",
        customGreenSky: "#E1E1DA",
        customWhite: "#FEFEFE",
      },
    },
  },
  plugins: [],
};
