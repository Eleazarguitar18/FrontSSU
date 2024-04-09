import React from "react";
import RegistrarPersonal from "../tools/FormularioPlantilla";
import { useFormSubmit } from "../context/DispositivoContext";
import { useData } from "../context/DataContext";
import { useNavigate } from "react-router-dom";
export const EditarPersonal = () => {
  const navigate = useNavigate();
  const { dataDispositivo } = useData();
  const { editarPersonalSSU } = useFormSubmit();
  const valores_iniciales = {
    id_PersonalSSU: dataDispositivo.id_PersonalSSU,
    Nombres: dataDispositivo.Nombres,
    ApellidoPaterno: dataDispositivo.ApellidoPaterno,
    ApellidoMaterno: dataDispositivo.ApellidoMaterno,
    Cargo: dataDispositivo.Cargo,
    Unidad: dataDispositivo.Unidad,
  };
  const mostrarDatos = () => {
    navigate("/mostrarPersonal");
  };
  const EditarPersonalSSU = async (values, { resetForm }) => {
    try {
      console.log("datos", values);
      const response = await editarPersonalSSU(values);
      resetForm();
      mostrarDatos();
    } catch (error) {
      // Manejar el error de envío del formulario
    }
  };
  const fields = [
    { name: "Nombres", label: "Nombres" },
    { name: "ApellidoPaterno", label: "Apellido Paterno" },
    { name: "ApellidoMaterno", label: "Apellido Materno" },
    { name: "Cargo", label: "Cargo" },
    { name: "Unidad", label: "Unidad" },
  ];
  return (
    <div>
      <RegistrarPersonal
        fields={fields}
        onSubmit={EditarPersonalSSU}
        titulo={"Editar datos del Personal"}
        valoresIniciales={valores_iniciales}
      />
    </div>
  );
};
