import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { url_base } from "../data/base.routes.js";
import { useData } from "../context/DataContext.jsx";
import FormHistorial from "./FormHistorial.jsx";
import PlantillaTabla from "../tools/PlantillaTabla.jsx";
import BotonsSimple from "../tools/BotonSimple.jsx";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

export default function Historial() {
  const { setDataHistorial, dataDispositivo } = useData();
  console.log("traendo datos", dataDispositivo);
  const handleEdit = (datos) => {
    setDataHistorial(datos);
  };
  setDataHistorial(dataDispositivo.id_Dispositivo);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${url_base}/historial/pc/${dataDispositivo.id_Dispositivo}`
      );
      console.log("Me llego esto", response.data.data.length);
      if (response.data.data.length != 0) {
        const datosCombinados = response.data.data.map((item) => ({
          ...item,
          ...item.Dispositivo,
        }));
        console.log(datosCombinados);
        setData(datosCombinados);
        // nuevoHistorial(datosCombinados.id_Dispositivo);
        return;
      }
      console.log("no existen datos");
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  const handleDelete = async (row_id) => {
    try {
      const respuesta = await axios.delete(`${url_base}/historial/${row_id}`);
      console.log(`Eliminando fila con id ${row_id}`);
      if (respuesta.status === 204) {
        console.log("eliminacion exitosa");
      }
      fetchData();
    } catch (error) {
      console.error("Error al eliminar la fila:", error);
    }
  };

  const fields = [
    // { name: "id_Historial", key: "id_Historial" },
    { name: "Fecha", key: "Fecha" },
    { name: "Detalles", key: "Detalles" },
    { name: "Encargado", key: "Encargado" },
    { name: "Motivo", key: "Motivo" },
    { name: "id_Dispositivo", key: "id_Dispositivo" },
    { name: "Acciones", key: "Acciones" },
  ];
  return (
    <PlantillaTabla
      data={data}
      columns={fields}
      title={`Historial del dispositivo ${dataDispositivo.id_Dispositivo}`}
      // boton={<BotonsSimple></BotonsSimple>}
    />
  );
}

//return (
//   <div>
//     {/* <NavLink to={`/registrarHistorial`}>
//       <button className="ButtonEditar">Crear historial</button>
//     </NavLink> */}
//     <TableContainer
//       style={{ backgroundColor: "#242424" }}
//       component={Paper}
//       className="TableContainer table-wrapper"
//     >
//       <Table className="fl-table">
//         <TableHead className="TableHead">
//           <TableRow className="TableRow">
//             {columns.map((column) => (
//               <TableCell
//                 key={column}
//                 style={{ color: "white" }}
//                 className="fl-table thead th"
//               >
//                 {column}
//               </TableCell>
//             ))}
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {data.map((row) => (
//             <TableRow key={row.id_Historial}>
//               {columns.map((column) => (
//                 <TableCell
//                   key={column}
//                   style={{ color: "white" }}
//                   className="fl-table td"
//                 >
//                   {column === "Acciones" ? (
//                     <div>
//                       <button
//                         onClick={() => handleDelete(row.id_Historial)}
//                         className="ButtonEliminar"
//                       >
//                         Eliminar
//                       </button>
//                       <NavLink to={`/historialEdit`}>
//                         <button
//                           onClick={() => handleEdit(row)}
//                           className="ButtonEditar"
//                         >
//                           Modificar
//                         </button>
//                       </NavLink>
//                     </div>
//                   ) : (
//                     row[column]
//                   )}
//                 </TableCell>
//               ))}
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   </div>
// );
