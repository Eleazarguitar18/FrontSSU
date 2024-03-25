import React, { useState, useEffect } from "react";
import { url_base } from "../data/base.routes.js";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "./DataTable.css";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const DataTableWithDeleteButton = () => {
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
      await axios.delete(`${url_base}/pc/${row_id}`);
      console.log(`Eliminando fila con id ${row_id}`);
      // Actualiza los datos después de eliminar la fila
      fetchData();
    } catch (error) {
      console.error("Error al eliminar la fila:", error);
    }
  };

  const columns = [
    "NroSerie",
    "NroActivo",
    "Estado",
    "Ubicacion",
    "Unidad",
    "Marca",
    "Detalle",
    "Tipo",
    "NonmbreDelEquipo",
    "Procesador",
    "RAM",
    "MemoriaInterna",
    "SistemaOperativo",
    "Acciones", // Agregamos una nueva columna "Eliminar"
  ];

  const handleEdit = async (row_id) => {};

  return (
    <TableContainer
      style={{ backgroundColor: "#242424" }}
      component={Paper}
      className="TableContainer"
    >
      <Table>
        <TableHead className="TableHead">
          <TableRow className="TableRow">
            {columns.map((column) => (
              <TableCell key={column} style={{ color: "white" }}>
                {column}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id_Dispositivo}>
              {columns.map((column) => (
                <TableCell key={column} style={{ color: "white" }}>
                  {column === "Acciones" ? (
                    <div>
                      <button
                        onClick={() => handleDelete(row.id_Dispositivo)}
                        className="ButtonEliminar"
                      >
                        Eliminar
                      </button>
                      <NavLink to={`/perifericoEdit`}>
                        <button
                          onClick={() => handleEdit(row.id_Dispositivo)}
                          className="ButtonEditar"
                        >
                          Editar
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
  );
};

export default DataTableWithDeleteButton;
