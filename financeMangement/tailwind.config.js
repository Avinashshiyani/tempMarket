/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        14: "14px",
        16: "18px",
        22: "22px",
      },
      colors: {
        green: "#299D91",
      },
    },
  },
  plugins: [],
};
