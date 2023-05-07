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
          10: "#ffb59d",
          20: "#ffaf95",
          40: "#ffa98d",
          50: "#ffa080",
          100: "#ff8a63",
          200: "#ff8054",
          300: "#ff7644",
          400: "#ff713d",
          500: "#ff6e37",
          600: "#ff6b30"
        },
        dark: {
          10: "#eeecec",
          20: "#e3e3e3",
          40: "#b4b4b4",
          50: "#939393",
          100: "#636e7c",
          200: "#56606c",
          300: "#4B5563"
        }
      }
    },
  },
  plugins: []
}