import { useContext } from "react";
import { NavLink } from "react-router-dom";
import TablaHistorial from "../tools/FormularioPlantilla";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useFormSubmit } from "../context/DispositivoContext";
import { useData } from "../context/DataContext";
import { useNavigate } from "react-router-dom";

const obtenerFechaActual = () => {
  const fechaActual = new Date();
  const año = fechaActual.getFullYear();
  const mes = fechaActual.getMonth() + 1; // Los meses van de 0 a 11, por lo que sumamos 1
  const dia = fechaActual.getDate();

  // Puedes formatear la fecha como desees, por ejemplo, en formato "YYYY-MM-DD"
  const fechaFormateada = `${año}-${mes < 10 ? "0" + mes : mes}-${
    dia < 10 ? "0" + dia : dia
  }`;

  return fechaFormateada;
};
const FormHistorial = () => {
  const { crearHistorial } = useFormSubmit();
  const { dataHistorial, dataDispositivo } = useData();
  const initialValues = {
    Fecha: obtenerFechaActual(),
    Detalles: "",
    Encargado: "",
    Motivo: "",
    id_Dispositivo: dataDispositivo.id_Dispositivo,
  };
  const validationSchema = Yup.object().shape({
    Fecha: Yup.date().required(),
    Detalles: Yup.string().nullable(),
    Encargado: Yup.string().nullable(),
    Motivo: Yup.string().nullable(),
  });
  const navigate = useNavigate();

  const MostrarHistorial = () => {
    navigate("/historial");
  };
  const fiedls = [
    { name: "Fecha", label: "Fecha", type: "date" },
    { name: "Detalles", label: "Detalles" },
    { name: "Encargado", label: "Encargado" },
    { name: "Motivo", label: "Motivo" },
  ];
  const enviarFormulario = async (values, { resetForm }) => {
    try {
      // console.log("Tengo esto", values);
      const response = await crearHistorial(values);
      // Realizar acciones adicionales según sea necesario
      resetForm();
      MostrarHistorial();
    } catch (error) {
      // Manejar el error de envío del formulario
    }
  };

  return (
    <TablaHistorial
      fields={fiedls}
      valoresIniciales={initialValues}
      validaciones={validationSchema}
      titulo={"Editar Registro de historial"}
      onSubmit={enviarFormulario}
    />
  );
};

export default FormHistorial;
