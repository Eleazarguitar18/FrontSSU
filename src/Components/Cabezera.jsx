import { useState } from "react";
import { NavLink } from "react-router-dom";
import SliderButton from "./tools/SliderButton";
import BotonSimple from "./tools/BotonSimple";
import LogoSVG from "../assets/LogoMant.svg";
const Cabezera = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="bg-gradient-to-r from-slate-800  to-red-800 px-4 shadow  text-white">
      <div className="flex justify-between items-center h-16">
        <button
          onClick={toggleMenu}
          className="hover:bg-red-950 p-3 -ml-3 rounded focus:ring-2 focus:ring-slate-700 md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <div className="flex items-center w-full justify-center">
          <div className="hover:rotate-6">
            <div className="hover:bg-none w-14 ">
              <NavLink to={"/"}>
                {/* <img src="/src/assets/LogoMant.svg" alt="Logo" /> */}
                <img src={LogoSVG} alt="Logo" />
              </NavLink>
            </div>
          </div>
          <div>
            <h1>ATEC</h1>
          </div>

          <div className="justify-end hidden md:flex w-full">
            <BotonSimple to="/mostrarpc">Computadoras</BotonSimple>
            <BotonSimple to="/mostrarperi">Perifericos</BotonSimple>

            <BotonSimple to="/datosred">Datos Red</BotonSimple>

            <BotonSimple to="/historialGeneral">Historial</BotonSimple>
            <BotonSimple to="/mostrarPersonal">Personal</BotonSimple>

            <BotonSimple to="/mostrarMant">Mantenimientos</BotonSimple>
            <BotonSimple to="/mostrarAsig">Asignaciones</BotonSimple>
          </div>
        </div>
        <div className="rounded-full p-4 ml-2 bg-red-700">
          <button>EC</button>
        </div>
      </div>
      {/* navegacion movil */}
      {menuOpen && (
        <div
          onClick={toggleMenu}
          className="fixed z-50  w-full bg-gradient-to-r from-slate-800 to-red-800 space-y-1 border-t py-3 -ml-4 pt-2 md:hidden "
        >
          <BotonSimple to="/mostrarpc">Computadoras</BotonSimple>
          <BotonSimple to="/mostrarperi">Perifericos</BotonSimple>

          <BotonSimple to="/datosred">Datos Red</BotonSimple>

          <BotonSimple to="/historialGeneral">Historial</BotonSimple>
          <BotonSimple to="/mostrarPersonal">Personal</BotonSimple>

          <BotonSimple to="/mostrarMant">Mantenimientos</BotonSimple>
          <BotonSimple to="/mostrarAsig">Asignaciones</BotonSimple>
        </div>
      )}
    </div>
    // </div>
  );
};

export default Cabezera;
{
  /* barra normal */
}
{
  /* <div className="hover:bg-none">
<NavLink to={"/"}>
  <img
    src="/src/image/logoEyG2.png"
    alt="Logo de nuestra institución"
    style={{ maxWidth: "100px" }}
  />
</NavLink>
</div>
 */
}
{
  /* <SliderButton
          nombreContenedor={`Perifericos`}
          botones={[
            { enlace: "/mostrarperi", nombre: "Mostrar" },
            { enlace: "/periferico", nombre: "Registrar" },
          ]}
        /> */
}
{
  /* <SliderButton
          nombreContenedor={`Mantenimientos`}
          botones={[
            // { enlace: "/registrarMant", nombre: "Registrar" },
            { enlace: "/asignarPersonal", nombre: "Registrar" },
            { enlace: "/mostrarMant", nombre: "Mostrar" },
          ]}
        /> */
}
{
  /* <SliderButton
          nombreContenedor={`Mantenimientos`}
          botones={[
            // { enlace: "/registrarMant", nombre: "Registrar" },
            { enlace: "/asignarPersonal", nombre: "Registrar" },
            { enlace: "/mostrarMant", nombre: "Mostrar" },
          ]}
        /> */
}

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
{
  /* <img
            class=""
            src="https://ui-avatars.com/api?name=Eleazar+Cruz"
            alt="Eleazar Cruz"
          /> */
}
{
  /* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-14 h-14"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                  />
                </svg> */
}
