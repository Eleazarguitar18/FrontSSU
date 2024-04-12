import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useData } from "../context/DataContext.jsx";
import { useFormSubmit } from "../context/DispositivoContext.jsx";
import { url_base } from "../data/base.routes.js";
import { useNavigate } from "react-router-dom";
// import { generarPDF_PC } from "../pdfs/generarPDF_PC.js";
import { MensajeEliminar } from "../componenes_emergentes/MensajeEliminar.jsx";

export const BotonEditar = ({ rowData, urlEdit, titulo = "Modificar" }) => {
  const { setDataDispositivo } = useData();
  // const handleClick = () => {
  //   console.log("Editar clickeado", rowData);
  // };
  const handleEdit = (datosDispositivo) => {
    setDataDispositivo(datosDispositivo);
  };
  return (
    <NavLink to={urlEdit}>
      <button
        className="bg-green-700 text-white font-semibold p-2 rounded hover:bg-green-600"
        onClick={() => handleEdit(rowData)}
      >
        {titulo}
      </button>
    </NavLink>
  );
};
export const BotonPosponer = ({ rowData, urlEdit }) => {
  console.log("estoy enviando esto:", rowData);
  const navigate = useNavigate();
  const { setDataMantenimiento, setDataDispositivo } = useData();
  const { editarMantenimiento } = useFormSubmit();
  // const handleClick = () => {
  //   console.log("Editar clickeado", rowData);
  // };
  const posponerMantenimiento = (datosDispositivo) => {
    setDataMantenimiento(datosDispositivo);
    navigate("/editarMantenimiento");
  };
  return (
    <NavLink to={urlEdit}>
      <button
        className="bg-green-700 text-white font-semibold p-2 rounded hover:bg-green-600"
        onClick={() => posponerMantenimiento(rowData)}
      >
        Posponer
      </button>
    </NavLink>
  );
};
export const BotonEliminar = ({
  rowData,
  fetchData,
  routeComponent,
  objetoAString,
}) => {
  // const actualizar = ();

  const handleDelete = async (row_id) => {
    try {
      await axios.delete(`${url_base}/${routeComponent}/${row_id}`);
      console.log(`Eliminando fila con id ${row_id}`);
      fetchData();
    } catch (error) {
      console.error("Error al eliminar la fila:", error);
    }
  };
  return (
    <MensajeEliminar
      mensaje={"¿Está seguro de eliminar?"}
      dato={objetoAString(rowData)}
      funcion={handleDelete}
      id_row={rowData.id_Dispositivo}
    />
  );
};

export const BotonGenerarPDF = ({ rowData, funtionPDF }) => {
  const handleClick = () => {
    console.log("PDF clickeado", rowData);
  };

  return (
    <button
      onClick={() => funtionPDF(rowData)}
      className="bg-red-900 text-white font-semibold p-2 rounded hover:bg-red-700"
    >
      PDF
    </button>
  );
};

export const BotonHistorial = (rowData) => {
  const { setDataDispositivo } = useData();
  const handleEdit = (datosDispositivo) => {
    setDataDispositivo(datosDispositivo);
  };

  return (
    <NavLink to={`/historial`}>
      <button
        onClick={() => handleEdit(rowData.rowData)}
        className="bg-slate-800 text-white font-semibold p-2 rounded hover:bg-slate-700"
      >
        Historial
      </button>
    </NavLink>
  );
};
export const BotonMatenimiento = (rowData) => {
  const { setDataDispositivo } = useData();
  const handleEdit = (datosDispositivo) => {
    setDataDispositivo(datosDispositivo);
  };

  return (
    <NavLink to={`/asignarPersonal`}>
      <button
        onClick={() => handleEdit(rowData.rowData)}
        className="bg-orange-950 text-white font-semibold p-2 rounded hover:bg-slate-700"
      >
        Mantenimiento
      </button>
    </NavLink>
  );
};
