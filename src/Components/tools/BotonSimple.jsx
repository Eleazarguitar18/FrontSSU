import React from "react";
import { NavLink } from "react-router-dom";

const botonSimple = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className="bg-colorBoton1 hover:bg-colorBoton2 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-colorBoton1 rounded"
    >
      {children}
    </NavLink>
  );
};

export default botonSimple;
