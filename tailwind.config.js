/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        haiti: {
          50: "#ecebfa",
          75: "#dedcf5",
          100: "#dedcf5",
          200: "#b2aee8",
          300: "#5b52cf",
          400: "#4d43ca",
          500: "#3c32b4",
          600: "#322a95",
          700: "#272176",
          800: "#181448",
          900: "#131039",
        },
        pink: {
          50: "#fffafa",
          75: "#EDE9E9",
          100: "#ffe9eb",
          200: "#ffe9eb",
          250: "#667085",
          300: "#ffc2c7",
          400: "#ffaeb5",
          500: "#ff9aa3",
          600: "#ff8791",
          700: "#ff737f",
          800: "#ff606d",
          900: "#FF4C5B",
        },
        secondary: {
          S500: "#DEFF98",
          S700: "#81994D",
        },
      },
    },
  },
  plugins: [],
}
