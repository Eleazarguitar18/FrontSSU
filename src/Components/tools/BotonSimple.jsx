import React from "react";
import { NavLink } from "react-router-dom";

const botonSimple = ({ to, children }) => {
  return (
    <NavLink to={to} className="text-white px-4 py-9 rounded hover:bg-red-950">
      {children}
    </NavLink>
  );
};

export default botonSimple;
