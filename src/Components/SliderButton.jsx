// SliderButton.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const SliderButton = ({ nombreContenedor, botones }) => {
  const [mostrarBotones, setMostrarBotones] = useState(false);

  const toggleMostrarBotones = () => {
    setMostrarBotones(!mostrarBotones);
  };

  return (
    <div className="relative">
      <button
        className="boton-contenedor mt-5 mr-3 text-white bg-primary px-4 py-2 rounded"
        onClick={toggleMostrarBotones}
      >
        {nombreContenedor}
      </button>
      <div
        className={
          "botones-container absolute bg-white shadow-md transition-opacity transition-transform duration-300 " +
          (mostrarBotones
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2")
        }
      >
        {botones.map((boton, index) => (
          <NavLink
            key={index}
            to={boton.enlace}
            className="block px-4 py-2 hover:bg-gray-200"
            activeClassName="active"
          >
            {boton.nombre}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default SliderButton;
