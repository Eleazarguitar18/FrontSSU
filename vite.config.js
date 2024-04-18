// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react-swc';

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 5173, // Configura el puerto a 5173
//     proxy: {
//       '/login': {
//         target: 'http://localhost:5173', // Configura el mismo puerto para el proxy
//         rewrite: (path) => path,
//       },
//     },
//   },
// });

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
