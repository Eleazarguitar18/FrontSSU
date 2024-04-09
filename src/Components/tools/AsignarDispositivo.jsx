// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { url_base } from "../data/base.routes.js";
// import PlantillaTabla from "../tools/PlantillaTabla.jsx";
// import { BotonAsignarEquipo } from "../tools/ButtonAsignar.jsx";
// const AsignarDispositivo = () => {
//   // const url_base = "http://localhost:3000";
//   const [datos, setDatos] = useState(null);
//   function objetoAString(row) {
//     const dato = `
//     Tipo: ${row.Tipo} \n
//     Nombre del Equipo: ${row.NombreDelEquipo} \n
//     Marca: ${row.Marca} \n
//     Unidad: ${row.Unidad} \n
//     Estado: ${row.Estado} \n
//     Numero Activo: ${row.NroActivo} \n
//     Numero de Serie: ${row.NroSerie}  \n
//     `;
//     return dato;
//   }
//   useEffect(() => {
//     fetchData();
//   }, []);
//   const fetchData = async () => {
//     try {
//       const response = await axios.get(`${url_base}/pc`);
//       console.log(response.data);
//       const datosCombinados = response.data.map((item) => ({
//         ...item,
//         ...item.Dispositivo,
//       }));
//       setDatos(datosCombinados);
//     } catch (error) {
//       console.error("Error al obtener datos:", error);
//     }
//   };
//   if (!datos) {
//     return <div>Cargando datos...</div>;
//   }

//   const columns = [
//     { name: "Numero de serie", key: "NroSerie", sortable: true },
//     { name: "Numero de Activo", key: "NroActivo", sortable: true },
//     { name: "Estado", key: "Estado", sortable: true },
//     { name: "Ubicacion", key: "Ubicacion", sortable: true },
//     { name: "Unidad", key: "Unidad", sortable: true },
//     { name: "Marca", key: "Marca", sortable: true },
//     { name: "Detalle", key: "Detalle", sortable: true },
//     { name: "Tipo", key: "Tipo", sortable: true },
//     { name: "Nombre del Equipo", key: "NombreDelEquipo", sortable: true },
//     { name: "Procesador", key: "Procesador", sortable: true },
//     { name: "RAM", key: "RAM", sortable: true },
//     { name: "Memoria Interna", key: "MemoriaInterna", sortable: true },
//     { name: "Sistema Operativo", key: "SistemaOperativo", sortable: true },
//     {
//       name: "Acciones",
//       key: "acciones",
//       render: (row) => (
//         <div className="space-y-2">
//           <BotonAsignarEquipo rowData={row} titleButton={"Asignar"} />
//         </div>
//       ),
//     },
//   ];
//   return (
//     <div className="bg-slate-300 flex justify-center items-center">
//       <PlantillaTabla
//         data={datos}
//         columns={columns}
//         title={"Seleccione el dispositivo"}
//       />
//     </div>
//   );
// };

// export default AsignarDispositivo;
