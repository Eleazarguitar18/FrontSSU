import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import DataTableAsignacion from "./DataTableAsignacion.jsx";
import { url_base } from "./data/base.routes.js";
import BotonSimple from "./tools/BotonSimple.jsx";
import DataTable from "./tools/PlantillaTabla.jsx";
import { generarPDF_asignacion } from "./pdfs/generarPDF_asignacion.js";
import {
  BotonEditar,
  BotonEliminar,
  BotonHistorial,
  BotonGenerarPDF,
} from "./tools/BotonesCRUD.jsx";
import { MensajeCarga } from "./tools/MensajeCarga.jsx";
const MostAsignacion = () => {
  // const url_base = "http://localhost:3000";
  const [datos, setDatos] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${url_base}/asignacion`);
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
  useEffect(() => {
    fetchData();
  }, []);
  function objetoAString(row) {
    const dato = `
      Nro: ${row.Nro}\n
      fecha_salida: ${row.fecha_salida}\n
      fecha_regreso: ${row.fecha_regreso}\n
      hora_salida: ${row.hora_salida}\n
      hora_llegada: ${row.hora_llegada}\n
      datos_solicitante: ${row.datos_solicitante}\n
      TipoAsignacion: ${row.TipoAsignacion}\n
      observaciones: ${row.observaciones}\n
      encargado_de_recepcion: ${row.encargado_de_recepcion}\n
      encargado_de_entrega: ${row.encargado_de_entrega}\n
    `;
    return dato;
  }
  const fields = [
    // { name: "id_Asignacion", key: "id_Asignacion" },
    { name: "Numero de asignacion", key: "Nro" },
    { name: "Fecha de salida", key: "fecha_salida" },
    { name: "Fecha de regreso", key: "fecha_regreso" },
    { name: "Hora salida", key: "hora_salida" },
    { name: "Hora llegada", key: "hora_llegada" },
    { name: "Datos solicitante", key: "datos_solicitante" },
    { name: "Tipo Asignacion", key: "TipoAsignacion" },
    { name: "Observaciones", key: "observaciones" },
    { name: "Rncargado de recepcion", key: "encargado_de_recepcion" },
    { name: "Encargado de entrega", key: "encargado_de_entrega" },
    {
      name: "Acciones",
      key: "acciones",
      render: (row) => (
        <div className="space-y-2">
          <BotonEditar rowData={row} urlEdit={"/editarAsignacion"} />
          <BotonEliminar
            rowData={row}
            fetchData={fetchData}
            routeComponent={"asignacion"}
            objetoAString={objetoAString}
          />
          <BotonGenerarPDF rowData={row} funtionPDF={generarPDF_asignacion} />
        </div>
      ),
    },
    {
      name: "Historial",
      key: "Historial",
      render: (row) => (
        <div className="space-y-2 items-center">
          <BotonHistorial rowData={row} />
        </div>
      ),
    },
  ];
  if (!datos) {
    return <MensajeCarga />;
  }

  return (
    <DataTable
      data={datos}
      columns={fields}
      title={"Detalles de la Asignacion"}
      boton={<BotonSimple to="/registrarAsig">Nueva Asignacion</BotonSimple>}
    />
  );
  //(
  //   <div>
  //     <h2>Detalles de la Asignacion</h2>

  //     <NavLink to={"/registrarAsig"}>
  //       <button>Nueva asignacion</button>
  //     </NavLink>
  //     <DataTableAsignacion data={datos} />
  //   </div>
  // );
};

export default MostAsignacion;
