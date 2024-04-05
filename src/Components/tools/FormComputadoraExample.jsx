import React from "react";
import { useFormSubmit } from "../context/DispositivoContext";
import { useData } from "../context/DataContext";
import { useNavigate } from "react-router-dom";
import DynamicForm from "./FormularioPlantilla";

export const FormComputadoraExample = () => {
  const navigate = useNavigate();
  const { handleSubmitPC } = useFormSubmit();
  const { setDataRed } = useData();

  const mostrarDatosRed = () => {
    navigate("/registrarRed");
  };

  const enviarFormulario = async (values, { resetForm }) => {
    try {
      const response = await handleSubmitPC(values);
      setDataRed(response.data.id_Dispositivo);
      resetForm();
      mostrarDatosRed();
    } catch (error) {
      // Manejar el error de envío del formulario
    }
  };

  // Define los campos del formulario, incluyendo los campos seleccionables con sus opciones
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
    {
      name: "Unidad",
      label: "Unidad",
      options: [
        { value: "unidad1", label: "Unidad 1" },
        { value: "unidad2", label: "Unidad 2" },
      ],
    },
    { name: "Unidad", label: "Unidad" },
    { name: "Marca", label: "Marca" },
    { name: "Detalle", label: "Detalle" },
    { name: "Tipo", label: "Tipo" },
    { name: "NombreDelEquipo", label: "NombreDelEquipo" },
    { name: "Procesador", label: "Procesador" },
    { name: "RAM", label: "RAM" },
    { name: "MemoriaInterna", label: "MemoriaInterna" },
    { name: "SistemaOperativo", label: "SistemaOperativo" },
    // Agrega más campos según sea necesario
  ];

  return <DynamicForm fields={fields} onSubmit={enviarFormulario} />;
};
