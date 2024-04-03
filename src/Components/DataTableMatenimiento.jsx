import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { useData } from "./context/DataContext.jsx";
import { url_base } from "./data/base.routes.js";
import { useFormSubmit } from "./context/DispositivoContext.jsx";

// import "./Tabla.css";
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
  const { setDataMantenimiento, setDataDispositivo } = useData();
  const { editarMantenimiento } = useFormSubmit();
  const navigate = useNavigate();

  const posponerMantenimiento = (datosDispositivo) => {
    setDataMantenimiento(datosDispositivo);
    navigate("/editarMantenimiento");
  };

  const atenderMantenimiento = (datosDispositivo) => {
    datosDispositivo.estado = "atendido";
    setDataMantenimiento(datosDispositivo);
    editarMantenimiento(datosDispositivo);
    fetchData();
  };

  const handleHistorial = (datosDispositivo) => {
    setDataDispositivo(datosDispositivo);
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${url_base}/mantenimiento`);
      const datosCombinados = response.data.map((item) => ({
        ...item,
        ...item.Dispositivo,
        TipoEquipo: item.Dispositivo.Tipo,
      }));
      setData(datosCombinados);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
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
              <TableRow key={row.id_Mantenimiento}>
                {columns.map((column) => (
                  <TableCell
                    key={column}
                    style={{ color: "white" }}
                    className="fl-table td"
                  >
                    {column === "Acciones" ? (
                      <div>
                        <button
                          onClick={() => atenderMantenimiento(row)}
                          className="ButtonEliminar"
                        >
                          Atendido
                        </button>
                        <NavLink to={`/posponerMantenimiento`}>
                          <button
                            onClick={() => posponerMantenimiento(row)}
                            className="ButtonEditar"
                          >
                            Posponer
                          </button>
                        </NavLink>
                      </div>
                    ) : column === "Historial" ? (
                      <div>
                        <NavLink to={`/historial`}>
                          <button onClick={() => handleHistorial(row)}>
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

export default DataTableMantenimiento;
