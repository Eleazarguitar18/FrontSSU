// Cabezera.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import "./Cabezera.css"; // Importa el archivo CSS

const Cabezera = () => {
  return (
    <div className="header">
      <div className="button-container">
        <img
          src="/src/image/logoEyG2.png"
          alt="Logo de nuestra institución"
          style={{ maxWidth: "100px" }} // Ajusta el tamaño del logo aquí
        />
        <NavLink to="/pc">
          <button className="header-button">Computadoras</button>
        </NavLink>
        <NavLink to={`/periferico`}>
          <button className="header-button">Periféricos</button>
        </NavLink>
        <NavLink to={`/mostrarpc`}>
          <button className="header-button">Mostrar Computadoras</button>
        </NavLink>
        <NavLink to={`/mostrarperi`}>
          <button className="header-button">Mostrar Periféricos</button>
        </NavLink>
        <NavLink to={`/mostrarperi`}>
          <button className="header-button">Mantenimientos</button>
        </NavLink>
        <NavLink to={`/mostrarperi`}>
          <button className="header-button">Prestamos</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Cabezera;
