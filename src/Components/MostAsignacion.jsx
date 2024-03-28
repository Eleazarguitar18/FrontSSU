import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import DataTableAsignacion from "./DataTableAsignacion.jsx";
import { url_base } from "./data/base.routes.js";
const MostAsignacion = () => {
  // const url_base = "http://localhost:3000";
  const [datos, setDatos] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${url_base}/pc`);
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
      <h2>Detalles de la Asignacion</h2>

      <NavLink to={"/registrarAsig"}>
        <button>Nueva asignacion</button>
      </NavLink>
      <DataTableAsignacion data={datos} />
    </div>
  );
};

export default MostAsignacion;
