import { useState } from "react";

export const MensajeEliminar = ({ dato, mensaje, funcion, id_row }) => {
  const [isopen, setIsopen] = useState(false);

  const ejecutarFuncion = async (id) => {
    await funcion(id);
  };

  const lineas = dato.split("\n");

  return (
    <div>
      <button
        className="bg-red-700 text-white font-semibold p-2 rounded hover:bg-red-600"
        onClick={() => setIsopen(true)}
      >
        Eliminar
      </button>
      {isopen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
          <div className="bg-white p-5 sm:p-10 rounded text-black max-w-lg w-full">
            <h1 className="text-blue-900 font-bold text-2xl">{mensaje}</h1>
            <div className="text-justify">
              {lineas.map((linea, index) => (
                <p key={index}>{linea}</p>
              ))}
            </div>
            <div className="flex gap-4 justify-center mt-4">
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
