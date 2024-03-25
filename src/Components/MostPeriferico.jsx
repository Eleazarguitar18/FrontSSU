import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTablePeriferico from "./DataTablePeriferico";
import { url_base } from "./data/base.routes.js";
const MostComputadora = () => {
  // const url_base = "http://localhost:3000";
  const [datos, setDatos] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${url_base}/periferico`);
        console.log(response.data);
        const datosCombinados = response.data.map((item) => ({
          ...item,
          ...item.Dispositivo,
        }));
        setDatos(datosCombinados);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    fetchData();
  }, []);

  if (!datos) {
    return <div>Cargando datos...</div>;
  }

  return (
    <div>
      <h2>Detalles del Periférico</h2>
      <DataTablePeriferico data={datos} />
    </div>
  );
};

export default MostComputadora;
