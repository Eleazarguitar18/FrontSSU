import BotonSimple from "../tools/BotonSimple.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import { url_base } from "../data/base.routes.js";
import PlantillaTabla from "../tools/PlantillaTabla.jsx";
import { MensajeCarga } from "../tools/MensajeCarga.jsx";
import { useNavigate } from "react-router-dom";
import {
  BotonEditar,
  BotonGenerarPDF,
  BotonHistorial,
  BotonEliminar,
} from "../tools/BotonesCRUD.jsx";
export const MostrarPersonal = () => {
  const navigate = useNavigate();
  const NuevoPersonal = () => {
    navigate("/registroPersonal");
  };
  const [datos, setDatos] = useState(null);
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
    { name: "ID PesonalSSU", key: "id_PersonalSSU" },
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
          <BotonEditar rowData={row} urlEdit={"/editarPersonal"} />
          <BotonEliminar
            rowData={row}
            fetchData={fetchData}
            routeComponent={"personalSSU"}
            objetoAString={objetoAString}
          />
          {/* <BotonGenerarPDF rowData={row} funtionPDF={generarPDF_PC} /> */}
        </div>
      ),
    },
  ];

  return (
    <div>
      <PlantillaTabla
        columns={columns}
        data={datos}
        title={"Datos de Personal"}
        boton={<BotonSimple to="/registroPersonal">Nuevo Personal</BotonSimple>}
      />
    </div>
  );
};
