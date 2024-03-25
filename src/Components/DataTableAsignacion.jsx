import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useData } from "./context/DataContext.jsx";
import { url_base } from "./data/base.routes.js";
import { useFormSubmit } from "./context/DispositivoContext.jsx";

import "./Tabla.css";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const DataTableAsignacion = () => {
  const { setDataMantenimiento } = useData();
  const { editarMantenimiento } = useFormSubmit();
  const posponerMantenimiento = (datosDispositivo) => {
    datosDispositivo.estado = "pendiente";
    editarMantenimiento(datosDispositivo);
    // setDataMantenimiento(datosDispositivo); // Establece el id_Dispositivo en el contexto
  };
  const atenderMantenimiento = (datosDispositivo) => {
    // datosDispositivo.estado = "atendido";
    // datosDispositivo.fecha_final = new Date();
    // editarMantenimiento(datosDispositivo);
    setDataMantenimiento(datosDispositivo); // Establece el id_Dispositivo en el contexto
  };
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []); // Este efecto se ejecutará solo una vez al montar el componente

  const fetchData = async () => {
    try {
      const response = await axios.get(`${url_base}/mantenimiento`);
      console.log(response.data);
      //   setData(response.data);
      const datosCombinados = response.data.map((item) => ({
        ...item,
        ...item.Dispositivo,
        TipoEquipo: item.Dispositivo.Tipo,
      }));
      console.log("DATOS COMBINADOS", datosCombinados);
      setData(datosCombinados);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  const handleDelete = async (row_id) => {
    try {
      const respuesta = await axios.delete(
        `${url_base}/mantenimiento/${row_id}`
      );
      console.log(`Eliminando fila con id ${row_id}`);
      if (respuesta.status === 204) {
        console.log("eliminacion exitosa");
      }
      fetchData();
    } catch (error) {
      console.error("Error al eliminar la fila:", error);
    }
  };

  const columns = [
    "idAsignacion",
    "Nro",
    "fecha y hora_salida",
    "fecha y hora_regreso",
    "tiempo de prestamo",
    "datos_solicitante",
    "TipoAsignacion",
    "observaciones",
    "encargado_de_recepcion",
    "encargado_de_entrega",
    // "id_Dispositivo",
    // "id_PersonalSSU",
    "Acciones", // Agregamos una nueva columna "Eliminar"
    "Historial", // Agregamos una nueva columna "Eliminar"
  ];

  return (
    <div>
      <TableContainer
        style={{ backgroundColor: "#242424" }}
        component={Paper}
        className="TableContainer table-wrapper" // Añadimos las clases CSS necesarias
      >
        <Table className="fl-table">
          {" "}
          {/* Añadimos la clase fl-table */}
          <TableHead className="TableHead">
            <TableRow className="TableRow">
              {columns.map((column) => (
                <TableCell
                  key={column}
                  style={{ color: "white" }}
                  className="fl-table thead th"
                >
                  {" "}
                  {/* Añadimos la clase fl-table para los encabezados */}
                  {column}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id_Mantenimiento}>
                {columns.map((column) => (
                  <TableCell
                    key={column}
                    style={{ color: "white" }}
                    className="fl-table td"
                  >
                    {/* Añadimos la clase fl-table para las celdas */}
                    {column === "Acciones" ? (
                      <div>
                        <button
                          onClick={() => atenderMantenimiento(row)}
                          className="ButtonEliminar"
                        >
                          Eliminar
                        </button>
                        <NavLink to={`/posponerMantenimiento`}>
                          <button
                            onClick={() => posponerMantenimiento(row)}
                            className="ButtonEditar"
                          >
                            Editar
                          </button>
                        </NavLink>
                      </div>
                    ) : column === "Historial" ? (
                      <div>
                        <NavLink to={`/historial`}>
                          <button onClick={() => handleEdit(row)}>
                            Historial
                          </button>
                        </NavLink>
                      </div>
                    ) : (
                      row[column]
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <FormHistorial /> */}
    </div>
  );
};

export default DataTableAsignacion;
