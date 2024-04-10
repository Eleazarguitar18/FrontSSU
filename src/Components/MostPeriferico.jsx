import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTablePeriferico from "./DataTablePeriferico";
import { url_base } from "./data/base.routes.js";
import PlantillaTabla from "./tools/PlantillaTabla.jsx";
import { generarPDF_periferico } from "./pdfs/generarPDF_periferico.js";
import BotonSimple from "./tools/BotonSimple.jsx";
import { MensajeCarga } from "./tools/MensajeCarga.jsx";
import {
  BotonEditar,
  BotonGenerarPDF,
  BotonHistorial,
  BotonEliminar,
} from "./tools/BotonesCRUD.jsx";
const MostComputadora = () => {
  // const url_base = "http://localhost:3000";
  const [datos, setDatos] = useState(null);
  function objetoAString(row) {
    const dato = `
    Tipo: ${row.Tipo} \n
    Nombre del Equipo: ${row.NombreDelEquipo} \n
    Marca: ${row.Marca} \n
    Unidad: ${row.Unidad} \n
    Estado: ${row.Estado} \n
    Numero Activo: ${row.NroActivo} \n
    Numero de Serie: ${row.NroSerie}  \n
    `;
    return dato;
  }
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
  useEffect(() => {
    fetchData();
  }, []);

  if (!datos) {
    return <MensajeCarga />;
  }
  const columns = [
    { name: "ID Dispositivo", key: "id_Dispositivo", sortable: true },
    { name: "Numero de serie", key: "NroSerie" },
    { name: "NroActivo", key: "NroActivo" },
    { name: "Estado", key: "Estado" },
    { name: "Ubicacion", key: "Ubicacion" },
    { name: "Unidad", key: "Unidad" },
    { name: "Marca", key: "Marca" },
    { name: "Detalle", key: "Detalle" },
    { name: "Tipo", key: "Tipo" },
    { name: "Descripcion", key: "Descripcion" },
    {
      name: "Acciones",
      render: (row) => (
        <div className="space-y-2">
          <BotonEditar rowData={row} urlEdit={"/perifericoEdit"} />
          <BotonEliminar
            rowData={row}
            fetchData={fetchData}
            routeComponent={"periferico"}
            objetoAString={objetoAString}
          />
          <BotonGenerarPDF funtionPDF={generarPDF_periferico} rowData={row} />
        </div>
      ),
    },
    {
      name: "Historial",
      render: (row) => (
        <div className="space-y-2 items-center">
          <BotonHistorial rowData={row} />
        </div>
      ),
    },
  ];
  return (
    <div className="bg-slate-300 flex justify-center items-center">
      <PlantillaTabla
        data={datos}
        columns={columns}
        title={"Detalles de Perifericos"}
        boton={<BotonSimple to="/periferico">Nuevo Periferico</BotonSimple>}
      />
    </div>
  );
};

export default MostComputadora;
