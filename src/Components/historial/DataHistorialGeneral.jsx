import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { url_base } from "../data/base.routes.js";
import { useData } from "../context/DataContext.jsx";
// import FormHistorial from "./FormHistorial.jsx";}
import PlantillaTabla from "../tools/PlantillaTabla.jsx";
import { MensajeCarga } from "../tools/MensajeCarga.jsx";
export default function Historial() {
  const { setDataHistorial, dataDispositivo, setDataDispositivo } = useData();
  console.log("traendo datos", dataDispositivo);
  const handleEdit = (datos) => {
    setDataDispositivo(datos);
  };
  // setDataHistorial(dataDispositivo.id_Dispositivo);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${url_base}/historial`);
      console.log("Me llego esto", response.data);
      if (response.data.length != 0) {
        const datosCombinados = response.data.map((item) => ({
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

  const fields = [
    // { name: "id_Historial", key: "id_Historial" },
    { name: "Fecha", key: "Fecha" },
    { name: "Detalles", key: "Detalles" },
    { name: "Encargado", key: "Encargado" },
    { name: "Motivo", key: "Motivo" },
    { name: "ID Dispositivo", key: "id_Dispositivo" },
    { name: "Historial", key: "Historial" },
  ];
  if (!data) {
    return <MensajeCarga />;
  }
  return (
    <PlantillaTabla
      data={data}
      columns={fields}
      title={"Historial General de Equipos"}
    />
  );
}
