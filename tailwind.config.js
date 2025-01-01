/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2F607D",
        "primary-light": '#5E85A1',
        black: "#111111",
        gray: "#2b2a2a", // Consistent casing
        "light-gray": "#dddddd",
        "mid-gray": "#4a4a4a",
      },
      transitionTimingFunction: {
        'custom-timing': 'cubic-bezier(0.890, -0.170, 0.140, 1.225)',
      },
    },
  },
  plugins: [],
};
