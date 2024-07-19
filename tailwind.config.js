/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        logo: ["Cedarville Cursive", "cursive"],
        heading: ["Raleway", "sans-serif"],
        body: ["Merriweather", "serif"],
        sans: ["Source Sans Pro", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        app: "#f5f5f5", // light gray
        normalText: "#2c3e50", // midnight blue
        heading: "#4169e1", // royal blue
        secondaryText: "#bdc3c7", // cool gray
        accent1: "#ff6f61", // bright coral
        accent2: "#1abc9c", // aqua green
      },
    },
  },
  plugins: [],
}
