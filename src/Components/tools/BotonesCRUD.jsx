import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useData } from "../context/DataContext.jsx";
import { url_base } from "../data/base.routes.js";
import { generarPDF } from "./generarPDF.js";
import { MensajeEliminar } from "../componenes_emergentes/MensajeEliminar.jsx";

export const BotonEditar = ({ rowData }) => {
  const { setDataDispositivo } = useData();
  // const handleClick = () => {
  //   console.log("Editar clickeado", rowData);
  // };
  const handleEdit = (datosDispositivo) => {
    setDataDispositivo(datosDispositivo);
  };
  return (
    <NavLink to={`/pcEdit`}>
      <button
        className="bg-green-700 text-white font-semibold p-2 rounded hover:bg-green-600"
        onClick={() => handleEdit(rowData)}
      >
        Modificar
      </button>
    </NavLink>
  );
};

export const BotonEliminar = ({ rowData, fetchData }) => {
  // const actualizar = ();
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
  const handleDelete = async (row_id) => {
    try {
      await axios.delete(`${url_base}/pc/${row_id}`);
      console.log(`Eliminando fila con id ${row_id}`);
      fetchData();
    } catch (error) {
      console.error("Error al eliminar la fila:", error);
    }
  };
  const handleClick = () => {
    console.log("Eliminar clickeado", rowData);
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

export const BotonGenerarPDF = ({ rowData }) => {
  const handleClick = () => {
    console.log("PDF clickeado", rowData);
  };

  return (
    <button
      onClick={() => generarPDF(rowData)}
      className="bg-red-900 text-white font-semibold p-2 rounded hover:bg-red-700"
    >
      PDF
    </button>
  );
};

export const BotonHistorial = (rowData) => {
  const handleClick = () => {
    console.log("Historial clickeado", rowData);
  };

  return (
    <NavLink to={`/historial`}>
      <button
        onClick={() => handleEdit(row)}
        className="bg-slate-800 text-white font-semibold p-2 rounded hover:bg-slate-700"
      >
        Historial
      </button>
    </NavLink>
  );
};
