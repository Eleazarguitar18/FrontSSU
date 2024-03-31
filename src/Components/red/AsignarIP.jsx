import React, { useState } from "react";
import { useData } from "../context/DataContext";
import { useFormSubmit } from "../context/DispositivoContext";
import { url_base } from "../data/base.routes";
import DatatableIP from "./DatatableIP";
import { useNavigate } from "react-router-dom";

export const AsignaIP = ({ funcion }) => {
  const [isopen, setIsopen] = useState(true);

  const navigate = useNavigate();

  const volver = () => {
    navigate("/registrarRed");
  };

  const handleConfirmar = () => {
    setIsopen(false);
    volver();
  };

  const handleCancelar = () => {
    setIsopen(false);
  };

  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center text-black">
        <div className="bg-white p-5 rounded flex flex-col justify-center items-center gap-3 text-black ">
          <h1 className="text-blue-900 font-bold text-2xl">Asignar IP</h1>
          <p>Elija la ip que le asignara al equipo</p>

          <div className="flex gap-4">
            <button
              className="bg-green-700 p-2 rounded text-white"
              onClick={handleConfirmar}
            >
              Confirmar
            </button>
            <button
              className="bg-red-700 p-2 rounded text-white"
              onClick={handleCancelar}
            >
              Cancelar
            </button>
          </div>
          <DatatableIP />
        </div>
      </div>
    </div>
  );
};
