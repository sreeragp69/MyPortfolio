/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#e2a836",
        black: "#111111",
        gray: "#2b2a2a", // Consistent casing
        "light-gray": "#dddddd",
        "mid-gray": "#4a4a4a", // Changed to a unique value
      },
    },
  },
  plugins: [],
};
