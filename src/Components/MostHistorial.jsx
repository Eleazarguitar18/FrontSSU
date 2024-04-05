import React, { useEffect, useState } from "react";
import axios from "axios";
import { url_base } from "./data/base.routes.js";
import PlantillaTabla from "./tools/PlantillaTabla.jsx";
import {
  BotonEditar,
  BotonGenerarPDF,
  BotonHistorial,
  BotonEliminar,
} from "./tools/BotonesCRUD.jsx";
import { generarPDF_PC } from "./pdfs/generarPDF_PC.js";
export const MostHistorial = () => {
  const [datos, setDatos] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get(`${url_base}/historial`);
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
  function objetoAString(row) {
    const dato = `
    Fecha: ${row.Fecha} \n
    Detalles del Equipo: ${row.Detalles} \n
    Encargado: ${row.Encargado} \n
    Motivo: ${row.Motivo} \n
    `;
    return dato;
  }
  if (!datos) {
    return <div>Cargando datos...</div>;
  }

  const columns = [
    { name: "Fecha", key: "Fecha" },
    { name: "Detalles", key: "Detalles" },
    { name: "Encargado", key: "Encargado" },
    { name: "Motivo", key: "Motivo" },
    // { name: "Nombre del Equipo", key: "NombreDelEquipo" },
    { name: "ID Dispositivo", key: "id_Dispositivo" },
    {
      name: "Acciones",
      key: "acciones",
      render: (row) => (
        <div className="space-y-2">
          <BotonEditar rowData={row} urlEdit={"/historialEdit"} />
          <BotonEliminar
            rowData={row}
            fetchData={fetchData}
            routeComponent={"historial"}
            objetoAString={objetoAString}
          />
          <BotonGenerarPDF rowData={row} funtionPDF={generarPDF_PC} />
        </div>
      ),
    },
  ];
  return (
    <div className="bg-slate-300 flex justify-center items-center">
      <PlantillaTabla
        data={datos}
        columns={columns}
        title={"Historial de Dispositivo"}
      />
    </div>
  );
};
