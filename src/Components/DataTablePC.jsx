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
  TablePagination,
} from "@mui/material";
import { MensajeEliminar } from "./componenes_emergentes/MensajeEliminar.jsx";

const DataTablePC = () => {
  const { setDataDispositivo } = useData();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${url_base}/pc`);
      const datosCombinados = response.data.map((item) => ({
        ...item,
        ...item.Dispositivo,
      }));
      setData(datosCombinados);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  const handleEdit = (datosDispositivo) => {
    setDataDispositivo(datosDispositivo);
  };

  const handleDelete = async (row_id) => {
    try {
      await axios.delete(`${url_base}/pc/${row_id}`);
      console.log(`Eliminando fila con id ${row_id}`);
      fetchData();
    } catch (error) {
      console.error("Error al eliminar la fila:", error);
    }
  };

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

  const columns = [
    "NroSerie",
    "NroActivo",
    "Estado",
    "Ubicacion",
    "Unidad",
    "Marca",
    "Detalle",
    "Tipo",
    "NombreDelEquipo",
    "Procesador",
    "RAM",
    "MemoriaInterna",
    "SistemaOperativo",
    "Acciones",
    "Historial",
  ];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div>
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
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={row.id_Dispositivo}>
                  {columns.map((column) => (
                    <TableCell
                      key={column}
                      style={{ color: "white" }}
                      className="fl-table td"
                    >
                      {column === "Acciones" ? (
                        <div>
                          <MensajeEliminar
                            mensaje={"¿Está seguro de eliminar?"}
                            dato={objetoAString(row)}
                            funcion={handleDelete}
                            id_row={row.id_Dispositivo}
                          />
                          <NavLink to={`/pcEdit`}>
                            <button
                              onClick={() => handleEdit(row)}
                              className="ButtonEditar"
                            >
                              Editar
                            </button>
                          </NavLink>
                        </div>
                      ) : column === "Historial" ? (
                        <div>
                          <NavLink to={`/historial`}>
                            <button
                              className="bg-slate-800 p-3 rounded"
                              onClick={() => handleEdit(row)}
                            >
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
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 50]} // Opciones de 5, 10, 25 y 50 filas por página
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default DataTablePC;
