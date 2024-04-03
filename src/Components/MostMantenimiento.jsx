import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTableMantenimiento from "./DataTableMatenimiento.jsx";
import { url_base } from "./data/base.routes.js";
import { useNavigate } from "react-router-dom";
import PlantillaTabla from "./tools/PlantillaTabla.jsx";
import {
  BotonEditar,
  BotonGenerarPDF,
  BotonHistorial,
  BotonEliminar,
} from "./tools/BotonesCRUD.jsx";
const MostMantenimiento = () => {
  // const url_base = "http://localhost:3000";
  const [datos, setDatos] = useState(null);
  const navigate = useNavigate();

  const RegistrarMatenimiento = () => {
    navigate("/registrarMant");
  };

  useEffect(() => {
    fetchData();
  }, []);
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
  if (!datos) {
    return <div>Cargando datos...</div>;
  }

  return (
    <div>
      <h2>Detalles del Mantenimiento</h2>

      <button onClick={RegistrarMatenimiento}>Nuevo Mantenimiento</button>

      <div className="bg-slate-300 flex justify-center items-center">
        <PlantillaTabla
          data={datos}
          columns={columns}
          title={"Detalles de Computadoras"}
        />
      </div>
    </div>
  );
};

export default MostMantenimiento;
