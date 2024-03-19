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
import Tabla from "../Components/Tabla";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Cabezera />
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

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pc" element={<FormComputadora />} />
        <Route path="/periferico" element={<FromPeriferico />} />

        <Route path="/mostrarpc" element={<MostComputadora />} />
        <Route path="/mostrarperi" element={<MostPeriferico />} />
        <Route path="/pcEdit" element={<EditarDispositivo />} />
        <Route path="/perifericoEdit" element={<EditarPeriferico />} />
        {/* <Route path="/perifericoEdit/:id" component={<EditarDispositivo />} /> */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
