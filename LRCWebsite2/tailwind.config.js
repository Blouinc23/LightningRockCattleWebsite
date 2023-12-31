/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1028px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      '3xl': '2000px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
    },
    keyframes: {
      moveRight: {
        "0%": { transform: "translateX(0)" },
        "100%": { transform: "translateX(-107%)" },
      },
      slideRight: {
        "0%": { transform: "translateX(-15%)" },
        "100%": { transform: "translateX(110%)" },
      },
      slideLeft: {
        "0%": { transform: "translateX(100%)" },
        "100%": { transform: "translateX(-15%)" },
      },
      },
      animation: {
        moveRight: "moveRight 15s infinite linear",
        slideRight: "slideRight 0.5s forwards ease-out",
        slideLeft: "slideLeft 0.5s forwards ease-out",
      },


      colors: {
        primary: "#7c503c",
        secondary: "#82B593",
        blacklite: "#3A3431",
        greylite: "#D9D9D9",
        brownlite: "#DBD1CC",
        greenlite: "#F2F6F7",
      },
      
    plugins: [
      require('tailwind-scrollbar'),
    ],
  },
},}

