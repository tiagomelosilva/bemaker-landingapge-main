/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-20": "#fefefe",
        "gray-50": "#575757",
        "gray-100": "#333333",
        "gray-500": "#141414",
        "primary-100": "#B3E5FF", // Tom mais claro do azul claro
        "primary-300": "#33BBFF", // Azul claro
        "primary-500": "#0D4CBB", // Azul
        "secondary-400": "#3399FF", // Um azul médio como secundário
        "secondary-500": "#0D4CBB", // Azul mais escuro como secundário
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred": "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')"
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"], 
        montserrat: ["Montserrat", "sans-serif"], 
      },
 //     content: {
 //       evolvetext: "url('./assets/EvolveText.png')",
   //     abstractwaves: "url('./assets/AbstractWaves.png')",
     //   sparkles: "url('./assets/Sparkles.png')",
       // circles: "url('./assets/Circles.png')",
     // },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1024px"
    }
  },
  plugins: [],
}


