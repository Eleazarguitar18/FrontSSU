import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTableMantenimiento from "./DataTableMatenimiento.jsx";
import { url_base } from "./data/base.routes.js";
import { useNavigate } from "react-router-dom";
import PlantillaTabla from "./tools/PlantillaTabla.jsx";
import { MensajeCarga } from "./tools/MensajeCarga.jsx";
import BotonSimple from "./tools/BotonSimple.jsx";
import { useData } from "./context/DataContext";
import {
  BotonEditar,
  BotonGenerarPDF,
  BotonHistorial,
  BotonEliminar,
  BotonPosponer,
} from "./tools/BotonesCRUD.jsx";
import { generarPDF_Mant } from "./pdfs/generarPDF_Mant.js";
const MostMantenimiento = () => {
  // const url_base = "http://localhost:3000";
  const [datos, setDatos] = useState(null);
  const navigate = useNavigate();
  const { dataMantenimiento } = useData();

  const RegistrarMatenimiento = () => {
    navigate("/registrarMant");
  };

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get(`${url_base}/mantenimiento`);
      console.log(response.data);
      const datosCombinados = response.data.map((item) => ({
        ...item,
        ...item.Dispositivo,
        TipoEquipo: item.Dispositivo.Tipo,
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
    { name: "fecha_inicial", key: "fecha_inicial", sortable: true },
    { name: "actividad", key: "actividad", sortable: true },
    { name: "fecha_final", key: "fecha_final", sortable: true },
    { name: "estado", key: "estado", sortable: true },
    { name: "Detalles", key: "Detalles", sortable: true },
    { name: "tipo", key: "tipo", sortable: true },
    { name: "Unidad", key: "Unidad", sortable: true },
    { name: "Marca", key: "Marca", sortable: true },
    { name: "TipoEquipo", key: "TipoEquipo", sortable: true },
    { name: "Ubicacion", key: "Ubicacion", sortable: true },
    { name: "Recomendaciones", key: "recomendaciones" },
    {
      name: "Acciones",
      key: "acciones",
      render: (row) => (
        <div className="space-y-2">
          <BotonPosponer rowData={row} urlEdit={"/posponerMantenimiento"} />
          {/* <BotonEliminar
            rowData={row}
            fetchData={fetchData}
            routeComponent={"mantenimiento"}
          /> */}
          <BotonGenerarPDF rowData={row} funtionPDF={generarPDF_Mant} />
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
  return (
    <div>
      <div className="bg-slate-300 flex justify-center items-center">
        <PlantillaTabla
          data={datos}
          columns={columns}
          title={"Detalles de Mantenimiento"}
          boton={
            <BotonSimple to="/registrarMant">Nuevo mantenimiento</BotonSimple>
          }
        />
      </div>
    </div>
  );
};

export default MostMantenimiento;
