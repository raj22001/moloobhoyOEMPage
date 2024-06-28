/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cyanblue: "#011222",
        blue: "#0E2954",
        gray: "#777777",
        grayBorder: "#D9D9D9",
        bgTableColor: "#FAFAFA",
      },
    },
  },
  plugins: [],
};
