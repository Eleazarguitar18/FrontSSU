import { useState } from "react";
import { useData } from "../context/DataContext";
import { useFormSubmit } from "../context/DispositivoContext";
// import "../Tabla.css";
export const MensajeEliminar = ({ dato, mensaje, funcion, id_row }) => {
  const [isopen, setIsopen] = useState(false);
  // const { confirmDelete, setConfirmDelete } = useData();
  // const { eliminarPC } = useFormSubmit();
  const ejecutarFuncion = async (id) => {
    // Llamar a la función asincrónica
    await funcion(id);
  };
  const lineas = dato.split("\n");

  return (
    <div>
      <button
        className="bg-red-700 p-2 rounded"
        onClick={() => setIsopen(true)}
      >
        Eliminar
      </button>
      {isopen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center text-black">
          <div className="bg-white p-5 rounded flex flex-col justify-center items-center gap-3 text-black ">
            <h1 className="text-blue-900 font-bold text-2xl">{mensaje}</h1>
            {/* <h2 className="text-black color pb-2">{mensaje}</h2> */}
            <div className="text-justify">
              {lineas.map((linea, index) => (
                <p key={index}>{linea}</p>
              ))}
            </div>
            <div className="flex gap-4">
              <button
                className="bg-green-700 p-2 rounded text-white"
                onClick={() => {
                  setIsopen(false);
                  ejecutarFuncion(id_row);
                }}
              >
                Confirmar
              </button>
              <button
                className="bg-red-700 p-2 rounded text-white"
                onClick={() => {
                  setIsopen(false);
                  // setConfirmDelete(true);
                }}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
