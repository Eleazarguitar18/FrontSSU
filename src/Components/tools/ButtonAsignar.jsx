import { useNavigate } from "react-router-dom";
import { useData } from "../context/DataContext.jsx";

export const BotonAsignarPersonal = ({ rowData, titleButton }) => {
  // const [datos, setDatos] = useState(null);
  const navigate = useNavigate();
  const { dataMantenimiento, setDataMantenimiento } = useData();
  const pasarDatos = (row) => {
    console.log(`me han llegado los datos: ${row.id_PersonalSSU}`);
    setDataMantenimiento(row.id_PersonalSSU);
    // if (dataMantenimiento !== null) {
    //   // Clonar dataMantenimiento para evitar mutar el estado directamente
    //   const newDataMantenimiento = { ...dataMantenimiento };
    //   // Modificar newDataMantenimiento con la nueva id_PersonalSSU
    //   newDataMantenimiento.id_PersonalSSU = row.id_PersonalSSU;
    //   // Actualizar el estado con newDataMantenimiento
    //   setDataMantenimiento(newDataMantenimiento);
    //   console.log("estoy enviando esto: ", newDataMantenimiento);
    // }
    navigate("/registrarMant");
  };
  // const pasarDatos = (row) => {
  //   console.log(`me han llegado los datos: ${row.id_PersonalSSU}`);
  //   // const dato = dataMantenimiento;
  //   dataMantenimiento.id_PersonalSSU = row.id_PersonalSSU;
  //   setDataMantenimiento(dataMantenimiento);
  //   navigate("/registrarMant");
  // };
  return (
    <button
      onClick={() => pasarDatos(rowData)}
      className="bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 rounded"
    >
      {titleButton}
    </button>
  );
};
// export const BotonAsignarEquipo = ({ rowData, titleButton }) => {
//   // const [datos, setDatos] = useState(null);
//   const navigate = useNavigate();
//   const { dataMantenimiento, setDataMantenimiento, setDataDispositivo } =
//     useData();
//   const pasarDatos = (row) => {
//     console.log(`me han llegado los datos: ${row.id_Dispositivo}`);
//     // const dato = dataMantenimiento;
//     dataMantenimiento.id_Dispositivo = row.id_Dispositivo;
//     setDataMantenimiento(dataMantenimiento);
//     navigate("/asignarDispositivoMant");
//   };
//   return (
//     <button
//       onClick={() => pasarDatos(rowData)}
//       className="bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 rounded"
//     >
//       {titleButton}
//     </button>
//   );
// };
