import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useData } from "./context/DataContext.jsx";
import { url_base } from "./data/base.routes.js";
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

const DataTableMantenimiento = () => {
  const { setDataDispositivo } = useData();

  const handleEdit = (datosDispositivo) => {
    setDataDispositivo(datosDispositivo); // Establece el id_Dispositivo en el contexto
  };
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []); // Este efecto se ejecutará solo una vez al montar el componente

  const fetchData = async () => {
    try {
      const response = await axios.get(`${url_base}/pc`);

      //   setData(response.data);
      const datosCombinados = response.data.map((item) => ({
        ...item,
        ...item.Dispositivo,
      }));
      setData(datosCombinados);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  const handleDelete = async (row_id) => {
    try {
      const respuesta = await axios.delete(`${url_base}/pc/${row_id}`);
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
    "fecha_inicial",
    "actividad",
    "fecha_final",
    "estado",
    "Detalles",
    "tipo",
    "Unidad",
    "Marca",
    "TipoEquipo",
    "Ubicacion",
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
              <TableRow key={row.id_Dispositivo}>
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
                          onClick={() => handleDelete(row.id_Dispositivo)}
                          className="ButtonEliminar"
                        >
                          Atentido
                        </button>
                        <NavLink to={`/pcEdit`}>
                          <button
                            onClick={() => handleEdit(row)}
                            className="ButtonEditar"
                          >
                            Posponer
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

export default DataTableMantenimiento;
