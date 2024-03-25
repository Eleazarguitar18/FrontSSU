import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./SliderButton.css"; // Archivo de estilos CSS para el componente

const SliderButton = ({ nombreContenedor, botones }) => {
  const [mostrarBotones, setMostrarBotones] = useState(false);

  const toggleMostrarBotones = () => {
    setMostrarBotones(!mostrarBotones);
  };

  return (
    <div>
      <button className="boton-contenedor" onClick={toggleMostrarBotones}>
        {nombreContenedor}
      </button>
      <div
        className={
          mostrarBotones ? "botones-container visible" : "botones-container"
        }
      >
        {botones.map((boton, index) => (
          <NavLink key={index} to={boton.enlace} activeClassName="active">
            <button>{boton.nombre}</button>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default SliderButton;
