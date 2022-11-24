/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        carReseller: {

          primary: "#991b1b",

          secondary: "#fecaca",
          accent: "#fef2f2",
          
          neutral: "#ef4444",
                   
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
