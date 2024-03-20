import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { url_base } from "../Components/data/base.routes.js";
import { useData } from "../Components/context/DataContext.jsx";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

export default function Historial() {
  const { setDataHistorial } = useData();
  const handleEdit = (datos) => {
    setDataHistorial(datos);
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${url_base}/historial`);
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
      const respuesta = await axios.delete(`${url_base}/historial/${row_id}`);
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
    "id_Historial",
    "Fecha",
    "Detalles",
    "Encargado",
    "Motivo",
    "id_Dispositivo",
    "Acciones",
  ];

  return (
    <TableContainer
      style={{ backgroundColor: "#242424" }}
      component={Paper}
      className="TableContainer table-wrapper"
    >
      <Table className="fl-table">
        <TableHead className="TableHead">
          <TableRow className="TableRow">
            {columns.map((column) => (
              <TableCell
                key={column}
                style={{ color: "white" }}
                className="fl-table thead th"
              >
                {column}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id_Historial}>
              {columns.map((column) => (
                <TableCell
                  key={column}
                  style={{ color: "white" }}
                  className="fl-table td"
                >
                  {column === "Acciones" ? (
                    <div>
                      <button
                        onClick={() => handleDelete(row.id_Historial)}
                        className="ButtonEliminar"
                      >
                        Eliminar
                      </button>
                      <NavLink to={`/pcEdit`}>
                        <button
                          onClick={() => handleEdit(row)}
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
}
