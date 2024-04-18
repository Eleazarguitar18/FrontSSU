import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useFormSubmit } from "./context/DispositivoContext";
// import "./Formulario.css";
import { useData } from "./context/DataContext";
import DynamicForm from "./tools/FormularioPlantilla";
const FormComputadora = () => {
  const navigate = useNavigate();
  // Define el esquema de validación utilizando Yup
  const { handleSubmitPC } = useFormSubmit();
  const { setDataRed } = useData();
  const mostrarDatosRed = () => {
    navigate("/registrarRed");
  };
  // Función para manejar el envío del formulario

  const enviarFormulario = async (values, { resetForm }) => {
    try {
      const response = await handleSubmitPC(values);
      // Realizar acciones adicionales según sea necesario
      // console.log("saco el id", response.data.id_Dispositivo);
      setDataRed(response.data.id_Dispositivo);
      resetForm();
      mostrarDatosRed();
    } catch (error) {
      // Manejar el error de envío del formulario
    }
  };
  const fields = [
    { name: "NroSerie", label: "Número de Serie" },
    { name: "NroActivo", label: "Número de Activo" },
    {
      name: "Estado",
      label: "Estado",
      options: [
        { value: "activo", label: "Activo" },
        { value: "inactivo", label: "Inactivo" },
      ],
    },
    { name: "Ubicacion", label: "Ubicación" },
    // {
    //   name: "Unidad",
    //   label: "Unidad",
    //   options: [
    //     { value: "unidad1", label: "Unidad 1" },
    //     { value: "unidad2", label: "Unidad 2" },
    //   ],
    // },
    { name: "Unidad", label: "Unidad" },
    { name: "Marca", label: "Marca" },
    { name: "Detalle", label: "Detalle" },
    {
      name: "Tipo",
      label: "Tipo",
      options: [
        { value: "Portatil", label: "Portatil" },
        { value: "Escritorio", label: "Escritorio" },
      ],
    },
    { name: "NombreDelEquipo", label: "Nombre del Equipo" },
    { name: "Procesador", label: "Procesador" },
    { name: "RAM", label: "RAM" },
    { name: "MemoriaInterna", label: "Memoria Interna" },
    { name: "SistemaOperativo", label: "Sistema Operativo" },

    // Agrega más campos según sea necesario
  ];
  return (
    <DynamicForm
      fields={fields}
      onSubmit={enviarFormulario}
      titulo={"Registro de Computadoras"}
    />
  );
};

export default FormComputadora;
