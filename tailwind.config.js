/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
  extend: {
    colors: {
      greek: {
        bg: "#FAF8F4",
        primary: "#4F6D7A",
        muted: "#8FA3AD",
        accent: "#C9DDE6",
      },
    },
  },
},
  plugins: [],
}
