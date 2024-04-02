import { NavLink } from "react-router-dom";
import SliderButton from "./tools/SliderButton";
import BotonSimple from "./tools/BotonSimple";

const Cabezera = () => {
  return (
    <div className="bg-gradient-to-r from-slate-800  to-red-800 text-white">
      <div className="flex justify-between items-center px-5 py-1">
        {/* barra normal */}
        <div className="hover:bg-none">
          <NavLink to={"/"}>
            <img
              src="/src/image/logoEyG2.png"
              alt="Logo de nuestra institución"
              style={{ maxWidth: "100px" }}
            />
          </NavLink>
        </div>
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
        <BotonSimple to="/datosred">Datos Red</BotonSimple>

        <BotonSimple to="/historialGeneral">Historial</BotonSimple>

        <SliderButton
          nombreContenedor={`Mantenimientos`}
          botones={[
            { enlace: "/registrarMant", nombre: "Registrar" },
            { enlace: "/mostrarMant", nombre: "Mostrar" },
          ]}
        />
        <BotonSimple to="/mostrarAsig">Asignaciones</BotonSimple>
      </div>
    </div>
  );
};

export default Cabezera;
// {/* barra de navegacion para celular */}
// <div className="md:hidden">
//   <button
//     className="hover:bg-red-950 px-3 py-3 rounded focus:ring-2 focus:ring-slate-700"
//     onClick={toggleNavegacion}
//   >
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       strokeWidth="1.5"
//       stroke="currentColor"
//       className="w-7 h-7"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
//       />
//     </svg>
//   </button>
//   {mostrarNavegacion && (
//     <div className="flex flex-col items-center justify-center bg-white w-full fixed top-0 left-0 z-50 h-screen">
//       <div className="space-y-1 pb-3 border-t py-3 pt-2">
//         <div>
//           <img
//             src="/src/image/logoEyG2.png"
//             alt="Logo de nuestra institución"
//             style={{ maxWidth: "100px" }}
//           />
//         </div>
//         <div className="bg-black">
//           <BotonSimple to="/datosred">Datos Red</BotonSimple>
//         </div>
//         <div>
//           <BotonSimple to="/historialGeneral">Historial</BotonSimple>
//         </div>
//         <div>
//           <BotonSimple to="/mostrarAsig">Asignaciones</BotonSimple>
//         </div>
//         <div>
//           <SliderButton
//             nombreContenedor={`Computadoras`}
//             botones={[
//               { enlace: "/mostrarpc", nombre: "Mostrar" },
//               { enlace: "/pc", nombre: "Registrar" },
//             ]}
//           />
//         </div>
//         <div>
//           <SliderButton
//             nombreContenedor={`Perifericos`}
//             botones={[
//               { enlace: "/mostrarperi", nombre: "Mostrar" },
//               { enlace: "/periferico", nombre: "Registrar" },
//             ]}
//           />
//         </div>

//         <div>
//           <SliderButton
//             nombreContenedor={`Mantenimientos`}
//             botones={[
//               { enlace: "/registrarMant", nombre: "Registrar" },
//               { enlace: "/mostrarMant", nombre: "Mostrar" },
//             ]}
//           />
//         </div>
//       </div>
//     </div>
//   )}
// </div>
