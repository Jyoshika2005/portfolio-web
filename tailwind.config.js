/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0b0f19",
        panel: "#0f1629",
        edge: "#1b2540",
      },
    },
  },
  plugins: [],
}