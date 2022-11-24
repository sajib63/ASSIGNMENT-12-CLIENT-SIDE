/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        carReseller: {

          primary: "#f87171",

          secondary: "#fecaca",
          accent: "#fef2f2",
          
          neutral: "#334155",
                   
          "base-100": "#FAF7F5",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
