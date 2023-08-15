/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        mahmoud: "url('/public/mahmoud.jpg')",
      },
      keyframes: {
        anim: {
          "100%": { strokeDashoffset: 0 },
        },
        animation: {
          anim: "anim 2s linear forword",
        },
      },
    },
  },
  plugins: [],
};
