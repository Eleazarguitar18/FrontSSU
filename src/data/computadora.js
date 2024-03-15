// import {  } from "module";
// import axios from "axios";
// const url_base = "http://localhost:3000";
// export const getDataDispositivo = async () => {
//     try {
//         const response = await axios.get(`${url_base}/api/pc`);
//         console.log(response.data);
//         const datosCombinados = response.data.map((item) => ({
//             ...item,
//             ...item.Dispositivo,
//         }));

//         // Exportar los datos
//         return datosCombinados;
//     } catch (error) {
//         console.error("Error al obtener los datos:", error);
//         throw error; // Puedes lanzar el error nuevamente si es necesario
//     }
// };