import React, { useState, useEffect } from "react";
import axios from "axios";
import { useData } from "../context/DataContext.jsx";
import { url_base } from "../data/base.routes.js";
// import "../Tabla.css";
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

const DataTablePC = () => {
  const { setDataAsignacion } = useData();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${url_base}/ips/libres`);
      const datosCombinados = response.data.map((item) => ({
        ...item,
      }));
      setData(datosCombinados);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  const AsignarIP = (datosDispositivo) => {
    console.log("asignare esta ip", datosDispositivo);
    setDataAsignacion(datosDispositivo);
  };

  const columns = [
    "DireccionIP",
    "Estado",
    "Acciones", // Agregamos una nueva columna "Eliminar"
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
            {data.map((row) => (
              <TableRow key={row.id_IPs}>
                {columns.map((column) => (
                  <TableCell
                    key={column}
                    style={{ color: "white" }}
                    className="fl-table td"
                  >
                    {column === "Acciones" ? (
                      <div>
                        <button
                          onClick={() => AsignarIP(row.DireccionIP)}
                          className="ButtonEditar"
                        >
                          Asignar
                        </button>
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
