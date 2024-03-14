import React from "react";
import { NavLink } from "react-router-dom";

const Cabezera = () => {
  return (
    <div className="header">
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
    </div>
  );
};

export default Cabezera;
