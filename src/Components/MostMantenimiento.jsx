import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTableMantenimiento from "./DataTableMatenimiento.jsx";
import { url_base } from "./data/base.routes.js";
import { useNavigate } from "react-router-dom";
const MostMantenimiento = () => {
  // const url_base = "http://localhost:3000";
  const [datos, setDatos] = useState(null);
  const navigate = useNavigate();

  const RegistrarMatenimiento = () => {
    navigate("/registrarMant");
  };

  return (
    <div>
      <h2>Detalles del Mantenimiento</h2>

      <button onClick={RegistrarMatenimiento}>Nuevo Mantenimiento</button>

      <DataTableMantenimiento data={datos} />
    </div>
  );
};

export default MostMantenimiento;
