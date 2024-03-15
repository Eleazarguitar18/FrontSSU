import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import React from "react";
import HomePage from "../Components/HomePage";
import NotFound from "../Components/Notfound";
import Cabezera from "../Components/Cabezera";
import FormComputadora from "../Components/FormComputadora";
import FromPeriferico from "../Components/FromPeriferico";
import MostComputadora from "../Components/MostComputadora";
import MostPeriferico from "../Components/MostPeriferico";
import EditDispositivo from "../Components/EditDispositivo";
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Cabezera />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pc" element={<FormComputadora />} />
        <Route path="/periferico" element={<FromPeriferico />} />

        <Route path="/mostrarpc" element={<MostComputadora />} />
        <Route path="/mostrarperi" element={<MostPeriferico />} />
        <Route path="/perifericoEdit" element={<EditDispositivo />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
