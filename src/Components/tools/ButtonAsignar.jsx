import { useNavigate } from "react-router-dom";
import { useData } from "../context/DataContext.jsx";

export const BotonAsignarPersonal = ({
  rowData,
  titleButton,
  setDataPersonal,
  urlSiguiente,
}) => {
  // const [datos, setDatos] = useState(null);
  const navigate = useNavigate();
  // const { dataMantenimiento, setDataMantenimiento } = useData();
  const pasarDatos = (row) => {
    console.log(`me han llegado los datos: ${row}`);
    // setDataMantenimiento(row);
    setDataPersonal(row);
    navigate(urlSiguiente);
  };
  return (
    <button
      onClick={() => pasarDatos(rowData)}
      className="bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 rounded"
    >
      {titleButton}
    </button>
  );
};
