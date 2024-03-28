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
  const { setDataDispositivo, setDataAsignacion } = useData();
  const { editarAsignacion, eliminarAsignacion } = useFormSubmit();

  // const editAsignacion=async (values)=>{
  //   setDataAsignacion(values)
  //   editarAsignacion()
  // }
  const deleteAsignacion = async (values) => {
    eliminarAsignacion(values);
    fetchData();
  };

  const redirecHistorial = (datosDispositivo) => {
    setDataDispositivo(datosDispositivo);
    console.log("enviando a historial");
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${url_base}/asignacion`);
      console.log(response.data);
      const datosCombinados = response.data.map((item) => ({
        ...item,
        // TipoEquipo: item.Dispositivo.Tipo,
      }));
      console.log("DATOS COMBINADOS", datosCombinados);
      setData(datosCombinados);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  const columns = [
    "id_Asignacion",
    "Nro",
    "fecha_salida",
    "fecha_regreso",
    "hora_salida",
    "hora_llegada",
    "datos_solicitante",
    "TipoAsignacion",
    "observaciones",
    "encargado_de_recepcion",
    "encargado_de_entrega",
    "Acciones",
    "Historial",
  ];

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
              <TableRow key={row.id_Asignacion}>
                {columns.map((column) => (
                  <TableCell
                    key={column}
                    style={{ color: "white" }}
                    className="fl-table td"
                  >
                    {column === "Acciones" ? (
                      <div>
                        <button
                          onClick={() => deleteAsignacion(row)}
                          className="ButtonEliminar"
                        >
                          Eliminar
                        </button>
                        <NavLink to={`/editarAsignacion`}>
                          <button
                            onClick={() => {
                              setDataAsignacion(row);
                            }}
                            className="ButtonEditar"
                          >
                            Editar
                          </button>
                        </NavLink>
                      </div>
                    ) : column === "Historial" ? (
                      <div>
                        <NavLink to={`/historial`}>
                          <button onClick={() => redirecHistorial(row)}>
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
    </div>
  );
};

export default DataTableAsignacion;
