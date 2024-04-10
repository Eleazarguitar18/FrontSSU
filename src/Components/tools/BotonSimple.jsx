import React from "react";
import { NavLink } from "react-router-dom";

const botonSimple = ({ to, children }) => {
  return (
    <NavLink
      className="text-white px-3 py-2 block rounded hover:bg-red-900 transition-colors focus:ring-2 focus:bg-red-950 md:hover:border-b"
      to={to}
    >
      {children}
    </NavLink>
  );
};

export default botonSimple;
