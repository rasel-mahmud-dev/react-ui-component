/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          300: "#ff7644",
          400: "#ff713d",
          500: "#ff6e37"
        },
        dark: {
          300: "#4B5563"
        }
      }
    },
  },
  plugins: []
}