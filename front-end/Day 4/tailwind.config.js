/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customPink: "#F4538A",
        customBlue: "#59D5E0",
        customYellow: "#F5DD61",
      },
    },
  },
  plugins: [require("daisyui")],
};
