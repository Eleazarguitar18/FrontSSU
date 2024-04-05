import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { useData } from "./context/DataContext.jsx";
import { url_base } from "./data/base.routes.js";
import { useFormSubmit } from "./context/DispositivoContext.jsx";
import jsPDF from "jspdf";
import "jspdf-autotable";
// import { generarPDF_Mant } from "./pdfs/generarPDF_Mant.js";

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

  const generarPDF_Mant = (row) => {
    const doc = new jsPDF();

    // Encabezados superiores
    const topHeaders = [
      [
        "UNIDAD DE TECNOLOGÍA DE LA INFORMACIÓN",
        "FORMULARIO DE ASISTENCIA TÉCNICA 2017",
      ],
    ];

    // Datos del usuario
    const datosUsuario = [
      ["FECHA Y HORA INICIO:", row.fecha_inicial],
      ["FECHA Y HORA FIN:", row.fecha_final],
      ["NOMBRE DE USUARIO:", row.PersonalSSU.Nombre],
      ["UNIDAD / SERVICIO:", row.PersonalSSU.Unidad],
      ["CARGO:", row.PersonalSSU.Cargo],

      // ... Agrega más datos según sea necesario
    ];

    // Datos del equipo
    const datosEquipo = [
      ["N° SERIE:", row.Dispositivo.NroSerie],
      ["N° ACTIVO FIJO:", row.Dispositivo.NroActivo],
      ["TIPO:", row.Dispositivo.Tipo],
      // ... Agrega más datos según sea necesario
    ];

    // Genera las tablas
    doc.autoTable({
      startY: 10,
      head: topHeaders,
      body: [], // No hay datos para los encabezados de título
      tableWidth: "wrap",
      autoWidth: true,
    });

    doc.autoTable({
      startY: doc.previousAutoTable.finalY + 10,
      head: [["DATOS DEL USUARIO", "  "]],
      body: datosUsuario,
      tableWidth: "wrap",
      autoWidth: true,
    });

    doc.autoTable({
      startY: doc.previousAutoTable.finalY + 10,
      head: [["DATOS DEL EQUIPO", "  "]],
      body: datosEquipo,
      tableWidth: "wrap",
      autoWidth: true,
    });

    // Continúa este patrón para otras secciones de tu PDF

    doc.save("fila_seleccionada.pdf");
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
                        <div>
                          <button onClick={() => generarPDF_Mant(row)}>
                            Generar PDF
                          </button>
                        </div>
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
