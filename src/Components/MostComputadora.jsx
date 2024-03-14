import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "./DataTable";

const MostComputadora = () => {
  const url_base = "http://localhost:3000";
  const [datos, setDatos] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${url_base}/api/pc`);
        setDatos(response.data);
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
      <DataTable data={datos} />
    </div>
  );
};

export default MostComputadora;
