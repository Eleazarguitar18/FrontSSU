import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTableMantenimiento from "./DataTableMatenimiento.jsx";
import { url_base } from "./data/base.routes.js";
const MostMantenimiento = () => {
  // const url_base = "http://localhost:3000";
  const [datos, setDatos] = useState(null);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await axios.get(`${url_base}/pc`);
  //         console.log(response.data);
  //         const datosCombinados = response.data.map((item) => ({
  //           ...item,
  //           ...item.Dispositivo,
  //         }));
  //         setDatos(datosCombinados);
  //       } catch (error) {
  //         console.error("Error al obtener datos:", error);
  //       }
  //     };

  //     fetchData();
  //   }, []);

  //   if (!datos) {
  //     return <div>Cargando datos...</div>;
  //   }

  return (
    <div>
      <h2>Detalles del Mantenimiento</h2>
      <DataTableMantenimiento data={datos} />
    </div>
  );
};

export default MostMantenimiento;
