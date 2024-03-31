import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { url_base } from "../data/base.routes.js";
import { useData } from "../context/DataContext";
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

const columns = [
  "id_Datos_red",
  "DireccionIP",
  "DireccionMAC",
  "id_Dispositivo",
  "Unidad",
  "Marca",
  "Tipo",
  "Ubicacion",
  "Acciones", // Agregamos una nueva columna "Eliminar"
  "Historial", // Agregamos una nueva columna "Eliminar"
];

const Datos_red = () => {
  const [data, setData] = useState([]);
  const { setDataRed, setDataDispositivo } = useData();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${url_base}/datos_red`);
      console.log("Me llego esto", response);
      if (response.data.length !== 0) {
        const datosCombinados = response.data.map((item) => ({
          ...item,
          ...item.Dispositivo,
        }));
        console.log(datosCombinados);
        setData(datosCombinados);
        // nuevoHistorial(datosCombinados.id_Dispositivo);
        return;
      }
      console.log("no existen datos");
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  const handleEdit = (datosRed) => {
    setDataDispositivo(datosRed);
    setDataRed(datosRed);
  };
  const visitarHstorial = () => {
    setData;
  };
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
              <TableRow key={row.id_Datos_red}>
                {columns.map((column) => (
                  <TableCell
                    key={column}
                    style={{ color: "white" }}
                    className="fl-table td"
                  >
                    {/* Añadimos la clase fl-table para las celdas */}
                    {column === "Acciones" ? (
                      <div>
                        {/* <button
                          onClick={() => handleDelete(row.id_Dispositivo)}
                          className="ButtonEliminar"
                        >
                          Eliminar
                        </button> */}
                        <NavLink to={`/datosredEdit`}>
                          <button
                            onClick={() => handleEdit(row)}
                            className="ButtonEditar"
                          >
                            Cambiar IP
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

export default Datos_red;
