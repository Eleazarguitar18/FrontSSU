import React from "react";
import { useData } from "./context/DataContext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { NavLink } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
import { url_base } from "./data/base.routes.js";
import { useNavigate } from "react-router-dom";
import DynamicForm from "./tools/FormularioPlantilla.jsx";

const EditarDispositivo = () => {
  const navigate = useNavigate();

  const MostrarPC = () => {
    navigate("/mostrarpc");
  };
  const RegistrarHistorial = () => {
    navigate("/registrarHistorial");
  };
  const { dataDispositivo } = useData();
  console.log("id del dispositivo a editar es:", dataDispositivo);

  const initialValues = {
    NroSerie: dataDispositivo.NroSerie,
    NroActivo: dataDispositivo.NroActivo,
    Estado: dataDispositivo.Estado,
    Ubicacion: dataDispositivo.Ubicacion,
    Unidad: dataDispositivo.Unidad,
    Marca: dataDispositivo.Marca,
    Detalle: dataDispositivo.Detalle,
    Tipo: dataDispositivo.Tipo,
    NombreDelEquipo: dataDispositivo.NombreDelEquipo,
    Procesador: dataDispositivo.Procesador,
    RAM: dataDispositivo.RAM,
    MemoriaInterna: dataDispositivo.MemoriaInterna,
    SistemaOperativo: dataDispositivo.SistemaOperativo,
  };

  const validationSchema = Yup.object().shape({
    NroSerie: Yup.string().required("Número de Serie es requerido"),
    NroActivo: Yup.string().required("Número Activo es requerido"),
    Estado: Yup.string().required("Estado es requerido"),
    Ubicacion: Yup.string().required("Ubicación es requerida"),
    Unidad: Yup.string().required("Unidad es requerida"),
    Marca: Yup.string().required("Marca es requerida"),
    Detalle: Yup.string().required("Detalle es requerido"),
    Tipo: Yup.string().required("Tipo es requerido"),
    NombreDelEquipo: Yup.string().required("Nombre del Equipo es requerido"),
    Procesador: Yup.string().required("Procesador es requerido"),
    RAM: Yup.string().required("RAM es requerida"),
    MemoriaInterna: Yup.string().required("Memoria Interna es requerida"),
    SistemaOperativo: Yup.string().required("Sistema Operativo es requerido"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      console.log("estoy enviando estos datos", values);
      const respuesta = await axios.put(
        `${url_base}/pc/${dataDispositivo.id_Dispositivo}`,
        values
      );

      if (respuesta.status == 200) {
        console.log("Dispositivo actualizado exitosamente");
        // initialValues = null;
        setSubmitting(false);
        resetForm();
        MostrarPC();
        RegistrarHistorial();
      }
      // Puedes redirigir al usuario a otra página o realizar otras acciones después de la edición exitosa
    } catch (error) {
      console.error("Error al actualizar el dispositivo:", error);
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
  return (
    <DynamicForm
      fields={fields}
      onSubmit={handleSubmit}
      titulo={"Registro de Computadoras"}
      valoresIniciales={initialValues}
    />
  );
};

export default EditarDispositivo;
// import React from "react";
// import { useData } from "./context/DataContext";
// import axios from "axios";

// const EditarDispositivo = () => {
//   const { dataDispositivo } = useData();
//   console.log("id del dispositivo a editar es:", dataDispositivo);
//   // Utiliza el id_Dispositivo del contexto en tu lógica
//   // Puedes realizar una solicitud para obtener los datos del dispositivo según el id

//   return (
//     <div>
//       <h2>Editar Dispositivo</h2>
//       <p>ID del Dispositivo: {dataDispositivo.id_Dispositivo}</p>
//     </div>
//   );
// };

// export default EditarDispositivo;
