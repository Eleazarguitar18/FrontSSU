import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useFormSubmit } from "../context/DispositivoContext";
import { useNavigate } from "react-router-dom";
import DynamicForm from "../tools/FormularioPlantilla";
// import { useActionData } from "react-router-dom";
import { useData } from "../context/DataContext"; // Asegúrate de importar tu contexto de datos
// const navigate = useNavigate();
const RegistrarMantenimiento = () => {
  const { dataMantenimiento, setDataMantenimiento } = useData();
  //   const { agregarMantenimiento } = useContext(DataContext); // Obtener función para agregar mantenimiento desde el contexto
  console.log("logre conseguir el id", dataMantenimiento);
  const initialValues = {
    fecha_inicial: "",
    actividad: "",
    fecha_final: "",
    estado: "",
    Detalles: "",
    tipo: "",
    id_Dispositivo: "",
    id_PersonalSSU: dataMantenimiento || "",
  };

  const validationSchema = Yup.object().shape({
    fecha_inicial: Yup.date().required("La fecha inicial es requerida"),
    actividad: Yup.string().required("La actividad es requerida"),
    fecha_final: Yup.date().required("La fecha final es requerida"),
    estado: Yup.string().required("El estado es requerido"),
    tipo: Yup.string().required("El tipo es requerido"),
    id_Dispositivo: Yup.number().required("El ID del dispositivo es requerido"),
    id_PersonalSSU: Yup.number().required("El ID del personal es requerido"),
  });

  const { nuevoMantenimiento } = useFormSubmit();
  const navigate = useNavigate();
  const mostrarMantenimiento = () => {
    navigate("/mostrarMant");
  };
  const handleSubmit = async (values, { resetForm }) => {
    const respuesta = await nuevoMantenimiento(values);
    resetForm(); // Limpiar el formulario después de enviar
    // console.log(respuesta);
    if (respuesta.status == 201) {
      mostrarMantenimiento();
    } // Agregar mantenimiento al contexto de datos
  };
  const fields = [
    { name: "actividad", label: "Actividad" },
    { name: "fecha_inicial", label: "Fecha inicial", type: "date" },
    { name: "fecha_final", label: "Fecha final", type: "date" },
    { name: "estado", label: "Estado" },
    { name: "Detalles", label: "Detalles" },
    { name: "tipo", label: "Tipo de Mantenimiento" },
    { name: "tipo_falla", label: "Tipo de Falla" },
    { name: "encargadoMant", label: "Encargado del mantenimiento" },
    { name: "recomendaciones", label: "Recomendaciones" },
    { name: "id_Dispositivo", label: "Dispositivo" },
    { name: "id_PersonalSSU", label: "Personal SSU" },
  ];
  return (
    <DynamicForm
      fields={fields}
      onSubmit={handleSubmit}
      valoresIniciales={initialValues}
    />
  );
};

export default RegistrarMantenimiento;
// return (
//   <div>
//     <h2>Registrar Mantenimiento</h2>
//     <Formik
//       initialValues={initialValues}
//       validationSchema={validationSchema}
//       onSubmit={handleSubmit}
//     >
//       {({ errors, touched }) => (
//         <Form>
//           <div>
//             <label>Fecha Inicial:</label>
//             <Field type="date" name="fecha_inicial" />
//             <ErrorMessage name="fecha_inicial" component="div" />
//           </div>
//           <div>
//             <label>Actividad:</label>
//             <Field type="text" name="actividad" />
//             <ErrorMessage name="actividad" component="div" />
//           </div>
//           <div>
//             <label>Fecha Final:</label>
//             <Field type="date" name="fecha_final" />
//             <ErrorMessage name="fecha_final" component="div" />
//           </div>
//           <div>
//             <label>Estado:</label>
//             <Field as="select" name="estado">
//               <option value="">Seleccionar estado</option>
//               <option value="pendiente">Pendiente</option>
//               <option value="atendido">Atendido</option>
//             </Field>
//             <ErrorMessage name="estado" component="div" />
//           </div>
//           <div>
//             <label>Detalles:</label>
//             <Field type="text" name="Detalles" />
//             <ErrorMessage name="Detalles" component="div" />
//           </div>
//           <div>
//             <label>Tipo:</label>
//             <Field type="text" name="tipo" />
//             <ErrorMessage name="tipo" component="div" />
//           </div>
//           <div>
//             <label>ID Dispositivo:</label>
//             <Field type="number" name="id_Dispositivo" />
//             <ErrorMessage name="id_Dispositivo" component="div" />
//           </div>
//           <div>
//             <label>ID Personal SSU:</label>
//             <Field type="number" name="id_PersonalSSU" />
//             <ErrorMessage name="id_PersonalSSU" component="div" />
//           </div>
//           <button type="submit">Registrar Mantenimiento</button>
//           <button onClick={mostrarMantenimiento}>Cancelar</button>
//         </Form>
//       )}
//     </Formik>
//   </div>
// );
