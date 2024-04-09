import React from "react";
import { useFormSubmit } from "../context/DispositivoContext";
import FormularioPlantilla from "../tools/FormularioPlantilla"; // Cambiado de RegistrarPersonal a FormularioPlantilla
import { useNavigate } from "react-router-dom";

export const RegistroPersonal = () => {
  const navigate = useNavigate();
  const { crearPersonalSSU } = useFormSubmit();

  const mostrarDatos = () => {
    navigate("/mostrarPersonal");
  };

  const registrarPersonalSSU = async (values, { resetForm }) => {
    // Añadido { resetForm }
    try {
      console.log("values", values);
      const response = await crearPersonalSSU(values);
      resetForm(); // Añadido resetForm()
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
      <FormularioPlantilla // Cambiado de RegistrarPersonal a FormularioPlantilla
        fields={fields}
        onSubmit={registrarPersonalSSU}
        titulo={"Registro de Personal"}
      />
    </div>
  );
};

// export default RegistroPersonal;
