/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        handjetRegular: ["Handjet-regular", "cursive"],
        handjetLight: ["Handjet-light", "cursive"],
        oswaldRegular: ["Oswald-regular", "sans-serif"],
        nunitoRegular: ["Nunito-regular", "sans-serif"],
        assistantRegular: ["Assistant-regular","sans-serif"]
      },
    },
  },
  plugins: [],
  important: true,
};
