import React from "react";
import { NavLink } from "react-router-dom";
import SliderButton from "./SliderButton";
import BotonSimple from "./tools/BotonSimple";

const Cabezera = () => {
  return (
    <div className="header bg-primary text-white">
      <div className="flex justify-between items-center px-5 py-2">
        <img
          src="/src/image/logoEyG2.png"
          alt="Logo de nuestra institución"
          className="max-w-100"
          style={{ maxWidth: "100px" }}
        />
        <SliderButton
          nombreContenedor={`Computadoras`}
          botones={[
            { enlace: "/mostrarpc", nombre: "Mostrar" },
            { enlace: "/pc", nombre: "Registrar" },
          ]}
        />
        <SliderButton
          nombreContenedor={`Perifericos`}
          botones={[
            { enlace: "/mostrarperi", nombre: "Mostrar" },
            { enlace: "/periferico", nombre: "Registrar" },
          ]}
        />
        <NavLink to={`/datosred`} className="header-button">
          Datos Red
        </NavLink>
        <NavLink to={`/historialGeneral`} className="header-button">
          Historial
        </NavLink>
        <SliderButton
          nombreContenedor={`Mantenimientos`}
          botones={[
            { enlace: "/registrarMant", nombre: "Registrar" },
            { enlace: "/mostrarMant", nombre: "Mostrar" },
          ]}
        />
        {/* <NavLink to={`/mostrarAsig`} className="header-button">
          Asignaciones
        </NavLink> */}
        <BotonSimple to="/mostrarAsig">Asignaciones</BotonSimple>
      </div>
    </div>
  );
};

export default Cabezera;

// * mi propuesta para mejorar la cabecera
/* import React from "react";
import { NavLink } from "react-router-dom";
import SliderButton from "./SliderButton";
import BotonSimple from "./tools/BotonSimple";

const Cabezera = () => {
  return (
    <div className="header bg-primary text-white fixed top-0 w-full">
      <div className="flex justify-between items-center px-5 py-2 h-full">
        <img
          src="/src/image/logoEyG2.png"
          alt="Logo de nuestra institución"
          className="max-w-100"
          style={{ maxWidth: "100px" }}
        />
        <SliderButton
          nombreContenedor={`Computadoras`}
          botones={[
            { enlace: "/mostrarpc", nombre: "Mostrar" },
            { enlace: "/pc", nombre: "Registrar" },
          ]}
        />
        <SliderButton
          nombreContenedor={`Perifericos`}
          botones={[
            { enlace: "/mostrarperi", nombre: "Mostrar" },
            { enlace: "/periferico", nombre: "Registrar" },
          ]}
        />
        <NavLink
          to={`/datosred`}
          className="header-button flex justify-center items-center w-full h-full hover:bg-gray-700"
        >
          Datos Red
        </NavLink>
        <NavLink
          to={`/historialGeneral`}
          className="header-button flex justify-center items-center w-full h-full hover:bg-gray-700"
        >
          Historial
        </NavLink>
        <SliderButton
          nombreContenedor={`Mantenimientos`}
          botones={[
            { enlace: "/registrarMant", nombre: "Registrar" },
            { enlace: "/mostrarMant", nombre: "Mostrar" },
          ]}
        />
        <BotonSimple
          to="/mostrarAsig"
          className="header-button flex justify-center items-center w-full h-full hover:bg-gray-700"
        >
          Asignaciones
        </BotonSimple>
      </div>
    </div>
  );
};

export default Cabezera;
 */
