import { useState, useEffect } from "react";
import axios from "axios";
import { url_base } from "../data/base.routes.js";
import PlantillaTabla from "../tools/PlantillaTabla.jsx";
import { MensajeCarga } from "../tools/MensajeCarga.jsx";
import {
  BotonEditar,
  BotonGenerarPDF,
  BotonHistorial,
  BotonEliminar,
} from "../tools/BotonesCRUD.jsx";
import { BotonAsignarPersonal } from "../tools/ButtonAsignar.jsx";
import BotonSimple from "../tools/BotonSimple.jsx";
export const AsignarPersonal = ({
  setDataPersonal,
  urlCancelar,
  urlSiguiente,
  titulo = "Datos del Personal",
}) => {
  const [datos, setDatos] = useState(null);
  // const pasarDatos = (rowData) => {
  //   console.log("me han llegado los datos", rowData);
  //   setDatos(rowData);
  // };
  function objetoAString(row) {
    const dato = `
    Nombres: ${row.Nombres}\n
    ApellidoPaterno: ${row.ApellidoPaterno}\n
    ApellidoMaterno: ${row.ApellidoMaterno}\n
    Cargo: ${row.Cargo}\n
    Unidad: ${row.Unidad}\n
    `;
    return dato;
  }
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get(`${url_base}/personalSSU`);
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
    return <MensajeCarga />;
  }

  const columns = [
    { name: "Nombres", key: "Nombres" },
    { name: "Apellido Paterno", key: "ApellidoPaterno" },
    { name: "Apellido Materno", key: "ApellidoMaterno" },
    { name: "Cargo", key: "Cargo" },
    { name: "Unidad", key: "Unidad" },
    {
      name: "Acciones",
      key: "acciones",
      render: (row) => (
        <div className="space-y-2">
          <BotonAsignarPersonal
            rowData={row}
            titleButton={"Asignar"}
            setDataPersonal={setDataPersonal}
            urlSiguiente={urlSiguiente}
          />
        </div>
      ),
    },
  ];

  return (
    <div>
      <PlantillaTabla
        columns={columns}
        data={datos}
        title={titulo}
        boton={
          <BotonSimple to={urlCancelar} children={"Cancelar Asignacion"} />
        }
      />
    </div>
  );
};
