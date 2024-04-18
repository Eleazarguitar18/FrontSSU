module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js"
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [require("tw-elements-react/dist/plugin.cjs")]
}
// export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/tw-elements-react/dist/js/**/*.js"];
// export const theme = {
//   extend: {
//     colors: {
//       primary: "#2b414e", // Color primario personalizado
//       secondary: "#00ff00", // Color secundario personalizado

//       // Puedes definir más colores según tus #182934 necesidades #324960
//       background: "#182934",
//       colorBoton1: "blue-500",
//       colorBoton2: "blue-400",
//     },
//   },
// };

// export const variants = {};
// export const plugins = [];
