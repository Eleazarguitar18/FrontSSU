import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import DynamicForm from "./tools/FormularioPlantilla";
import { useFormSubmit } from "./context/DispositivoContext";
import { useData } from "./context/DataContext";
const FormPeriferico = () => {
  // const handleSubmit = handleSubmitPeriferico;
  const { handleSubmitPeriferico } = useFormSubmit();

  const enviarFormulario = async (values, { resetForm }) => {
    try {
      const response = await handleSubmitPeriferico(values);
      // Realizar acciones adicionales según sea necesario
      resetForm();
    } catch (error) {
      // Manejar el error de envío del formulario
    }
  };

  const fields = [
    { name: "NroSerie", label: "Numero de serie" },
    { name: "NroActivo", label: "Numero de activo" },
    { name: "Estado", label: "Estado" },
    { name: "Ubicacion", label: "Ubicacion" },
    { name: "Unidad", label: "Unidad" },
    { name: "Marca", label: "Marca" },
    { name: "Detalle", label: "Detalle" },
    { name: "Tipo", label: "Tipo" },
    { name: "Descripcion", label: "Descripcion" },
  ];
  return (
    <DynamicForm
      fields={fields}
      onSubmit={enviarFormulario}
      titulo={"Registro de Perifericos"}
    />
  );
};

export default FormPeriferico;
