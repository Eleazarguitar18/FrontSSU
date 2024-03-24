import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import React from "react";
import HomePage from "../Components/HomePage";
import NotFound from "../Components/Notfound";
import Cabezera from "../Components/Cabezera";
import FormComputadora from "../Components/FormComputadora";
import FromPeriferico from "../Components/FromPeriferico";
import MostComputadora from "../Components/MostComputadora";
import MostPeriferico from "../Components/MostPeriferico";
import EditarDispositivo from "../Components/EditarDispositivo";
import EditarPeriferico from "../Components/EditarPeriferico";
import MostMantenimiento from "../Components/MostMantenimiento";
// import Tabla from "../Components/Tabla";
import Datos_red from "../Components/red/Datos_red";
import DataTableHistorial from "../Components/historial/DataTableHistorial";
import FormHistorial from "../Components/historial/FormHistorial";
import EditHistorial from "../Components/historial/EditHistorial";
import DataHistorialGeneral from "../Components/historial/DataHistorialGeneral";
import EditDatos_red from "../Components/red/EditDatos_red";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <div>
        <Cabezera />
      </div>
      {/* <Tabla
        columnas={[
          "ID",
          "Nombre",
          "Descripción",
          "Precio",
          "Stock",
          "Acciones",
          "Otro",
          "Otra columna",
        ]}
      /> */}
      <div style={{ marginTop: "100px" }}>
        <Routes>
          {/* Estilo en línea con objeto de estilo */}
          <Route path="/" element={<HomePage />} />
          <Route path="/pc" element={<FormComputadora />} />
          <Route path="/periferico" element={<FromPeriferico />} />
          <Route path="/mostrarpc" element={<MostComputadora />} />
          <Route path="/mostrarperi" element={<MostPeriferico />} />
          <Route path="/pcEdit" element={<EditarDispositivo />} />
          <Route path="/perifericoEdit" element={<EditarPeriferico />} />
          <Route path="/mostrarMant" element={<MostMantenimiento />} />

          <Route path="/datosred" element={<Datos_red />} />
          <Route path="/datosredEdit" element={<EditDatos_red />} />

          <Route path="/historial" element={<DataTableHistorial />} />
          <Route path="/registrarHistorial" element={<FormHistorial />} />
          <Route path="/historialEdit" element={<EditHistorial />} />
          <Route path="/historialGeneral" element={<DataHistorialGeneral />} />
          <Route path="/perifericoEdit/:id" component={<EditarDispositivo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
