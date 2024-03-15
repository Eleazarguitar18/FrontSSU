import React from "react";
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
// const url_base = "http://localhost:3000";
const DataTableWithDeleteButton = ({ data }) => {
  const columns = [
    // "id_Dispositivo",
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

  const handleDelete = async (row_id) => {
    // Implementa la lógica para eliminar la fila con el id proporcionado
    const response = await axios.delete(`${url_base}/pc/${row_id}`);
    console.log(`Eliminando fila con id ${row_id}`);
    console.log(response);

    // Aquí puedes llamar a una función o realizar otras acciones según tus necesidades
  };

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
