import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const SliderButton = ({ nombreContenedor, botones }) => {
  const [mostrarBotones, setMostrarBotones] = useState(false);

  const toggleMostrarBotones = () => {
    setMostrarBotones(!mostrarBotones);
  };

  const handleBotonClick = () => {
    setMostrarBotones(false);
  };

  return (
    <div className="relative">
      <button
        className="text-white px-4 py-9 rounded hover:bg-red-950"
        onClick={toggleMostrarBotones}
      >
        {nombreContenedor}
      </button>
      <div
        className={
          "botones-container absolute bg-white shadow-md transition-all duration-300 " +
          (mostrarBotones
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2")
        }
      >
        {botones.map((boton, index) => (
          <NavLink
            key={index}
            to={boton.enlace}
            className=" text-black block px-4 py-2 hover:bg-gray-200"
            onClick={handleBotonClick}
          >
            {boton.nombre}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default SliderButton;
