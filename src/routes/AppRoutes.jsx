import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";
import React, { useState, useEffect } from "react";
import HomePage from "../Components/HomePage";
import NotFound from "../Components/Notfound";
import Cabezera from "../Components/Cabezera";
import FormComputadora from "../Components/FormComputadora";
import FromPeriferico from "../Components/FromPeriferico";
import MostComputadora from "../Components/MostComputadora";
import MostPeriferico from "../Components/MostPeriferico";
import MostAsignacion from "../Components/MostAsignacion";
import EditarDispositivo from "../Components/EditarDispositivo";
import EditarPeriferico from "../Components/EditarPeriferico";
import MostMantenimiento from "../Components/MostMantenimiento";
// import Tabla from "../Components/Tabla";
import Datos_red from "../Components/red/Datos_red";
import { MostHistorial } from "../Components/MostHistorial";
import FormHistorial from "../Components/historial/FormHistorial";
import EditHistorial from "../Components/historial/EditHistorial";
import DataHistorialGeneral from "../Components/historial/DataHistorialGeneral";
import EditDatos_red from "../Components/red/EditDatos_red";
import RegistrarRed from "../Components/red/RegistrarRed";
import RegistrarMantenimiento from "../Components/Mantenimiento/RegistrarMantenimiento";
import PosponerMantenimiento from "../Components/Mantenimiento/PosponerMantenimiento";
import FormAsignacion from "../Components/Asignacion/FormAsignacion";
import EditAsignacion from "../Components/Asignacion/EditAsignacion";
import { AsignaIP } from "../Components/red/AsignarIP";
// import DataTablePlantilla from "../Components/tools/DataTablePlantilla.jsx";
import TablaPage from "../Components/tools/TablaPage";
import { FormComputadoraExample } from "../Components/tools/FormComputadoraExample";
import { AsignarPersonal } from "../Components/PersonalSSU/AsignarPersonal";
import { RegistroPersonal } from "../Components/PersonalSSU/RegistroPersonal";
import { MostrarPersonal } from "../Components/PersonalSSU/MostrarPersonal";
import { EditarPersonal } from "../Components/PersonalSSU/EditarPersonal";
import { AsignarDispositivo } from "../Components/Mantenimiento/AsignarDispositivo";
import ElijePC from "../Components/Mantenimiento/ElijePC";
import ElijePeriferico from "../Components/Mantenimiento/ElijePeriferico";
import { Login } from "../Components/login/Login";
import { useData } from "../Components/context/DataContext";
// import AsignarDispositivo from "../Components/tools/AsignarDispositivo";

export default function AppRoutes() {
  const { dataLogin, setDataLogin } = useData();
  const {
    setDataPersonal,
    setDataPersonalEntrega,
    setDataPersonalRecepcion,
    setDataPersonalSolicitante,
  } = useData();
  // const navigate = useNavigate();
  // useEffect(() => {
  //   navigate("/login");
  // }, []);
  return (
    <div className="bg-slate-200 text-slate-800 h-screen">
      <BrowserRouter>
        {dataLogin && (
          <div>
            <Cabezera />
          </div>
        )}

        <div className="">
          <Routes>
            <Route path="/" element={<Login />} />
            {/* Estilo en línea con objeto de estilo */}

            <Route path="/home" element={<HomePage />} />
            <Route path="/pc" element={<FormComputadora />} />
            <Route path="/periferico" element={<FromPeriferico />} />
            <Route path="/mostrarpc" element={<MostComputadora />} />
            <Route path="/mostrarperi" element={<MostPeriferico />} />
            <Route path="/pcEdit" element={<EditarDispositivo />} />
            <Route path="/perifericoEdit" element={<EditarPeriferico />} />

            <Route path="/registroPersonal" element={<RegistroPersonal />} />
            <Route path="/mostrarPersonal" element={<MostrarPersonal />} />

            <Route path="/editarPersonal" element={<EditarPersonal />} />
            {/* MANTENIMIENTO  */}

            <Route path="/mostrarMant" element={<MostMantenimiento />} />
            <Route path="/registrarMant" element={<RegistrarMantenimiento />} />
            {/* Asignar dispositivo */}
            <Route
              path="/nuevoMant"
              element={
                <AsignarDispositivo
                  urlSiguientePC={"/elegirpc"}
                  urlSiguientePeriferico={"/elegirperiferico"}
                />
              }
            />
            <Route
              path="/elegirpc"
              element={<ElijePC urlSiguiente={"/asignarPersonal"} />}
            />
            <Route
              path="/elegirperiferico"
              element={<ElijePeriferico urlSiguiente={"/asignarPersonal"} />}
            />
            <Route
              path="/asignarPersonal"
              element={
                <AsignarPersonal
                  setDataPersonal={setDataPersonal}
                  urlCancelar={"/mostrarMant"}
                  urlSiguiente={"/registrarMant"}
                />
              }
            />
            <Route
              path="/posponerMantenimiento"
              element={<PosponerMantenimiento />}
            />
            {/* <Route
              path="/asignarDispositivoMant"
              element={<AsignarDispositivo />}
            /> */}
            {/* Asignacion de equipos y perifericos */}
            <Route path="/mostrarAsig" element={<MostAsignacion />} />
            <Route path="/registrarAsig" element={<FormAsignacion />} />
            <Route path="/editarAsignacion" element={<EditAsignacion />} />
            <Route
              path="/nuevoAsignacion"
              element={
                <AsignarDispositivo
                  urlSiguientePC={"/elegirpcAsignar"}
                  urlSiguientePeriferico={"/elegirperifericoAsignar"}
                />
              }
            />
            <Route
              path="/elegirpcAsignar"
              element={<ElijePC urlSiguiente={"/asignaPersonalRecepcion"} />}
            />
            <Route
              path="/elegirperifericoAsignar"
              element={<ElijePeriferico />}
            />
            <Route
              path="/asignaPersonalRecepcion"
              element={
                <AsignarPersonal
                  urlCancelar={"/mostrarAsig"}
                  setDataPersonal={setDataPersonalRecepcion}
                  titulo={"Seleccione al Encargado de la recepcion"}
                  urlSiguiente={"/asignaPersonalEntrega"}
                />
              }
            />
            <Route
              path="/asignaPersonalEntrega"
              element={
                <AsignarPersonal
                  setDataPersonal={setDataPersonalEntrega}
                  titulo={"Seleccione al Encargado de la entrega"}
                  urlCancelar={"/mostrarAsig"}
                  urlSiguiente={"/asignaSolicitante"}
                />
              }
            />
            <Route
              path="/asignaSolicitante"
              element={
                <AsignarPersonal
                  setDataPersonal={setDataPersonalSolicitante}
                  titulo={"Seleccione al personal solicitante"}
                  urlCancelar={"/mostrarAsig"}
                  urlSiguiente={"/registrarAsig"}
                />
              }
            />

            <Route path="/datosred" element={<Datos_red />} />
            <Route path="/registrarRed" element={<RegistrarRed />} />
            <Route path="/asignarIP" element={<AsignaIP />} />

            <Route path="/datosredEdit" element={<EditDatos_red />} />
            <Route path="/historial" element={<MostHistorial />} />
            <Route path="/registrarHistorial" element={<FormHistorial />} />
            <Route path="/historialEdit" element={<EditHistorial />} />
            <Route
              path="/historialGeneral"
              element={<DataHistorialGeneral />}
            />
            <Route
              path="/perifericoEdit/:id"
              component={<EditarDispositivo />}
            />
            <Route path="/tabla" element={<TablaPage />} />
            <Route path="/tabla2" element={<FormComputadoraExample />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
