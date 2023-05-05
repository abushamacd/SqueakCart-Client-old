/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // colors: {
    //   custom_color: "#00EBE7",
    //   pink: "#ff49db",
    //   orange: "#ff7849",
    //   green: "#13ce66",
    //   "gray-dark": "#273444",
    //   gray: "#8492a6",
    //   "gray-light": "#d3dce6",
    // },
    // extend: {
    //   backgroundColor: {
    //     "main-bg": "#FAFBFB",
    //     custom_bg: "#00EBE7",
    //     "main-dark-bg": "#111528",
    //     "secondary-dark-bg": "#1D2434",
    //     "light-gray": "#F7F7F7",
    //     "half-transparent": "rgba(0, 0, 0, 0.5)",
    //   },
    // },
  },
  plugins: [require("daisyui")],
};
