import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useFormSubmit } from "../context/DispositivoContext";
import { useData } from "../context/DataContext";
import { useNavigate } from "react-router-dom";
import TablaHistorial from "../tools/FormularioPlantilla";

function formatearFecha(fecha) {
  fecha = new Date(fecha);
  const dia = fecha.getDate();
  const mes = fecha.getMonth() + 1; // Los meses van de 0 a 11, por lo que sumamos 1
  const año = fecha.getFullYear();

  // Formateamos el día y el mes con ceros a la izquierda si son menores que 10
  const diaFormateado = dia < 10 ? "0" + dia : dia;
  const mesFormateado = mes < 10 ? "0" + mes : mes;

  // Devolvemos la fecha formateada
  return `${diaFormateado}-${mesFormateado}-${año}`;
}
const EditHistorial = () => {
  const { editarHistorial } = useFormSubmit();
  const { dataDispositivo } = useData();
  //   console.log("tengo estos datos", dataHistorial);
  const initialValues = {
    id_Historial: dataDispositivo.id_Historial,
    Fecha: dataDispositivo.Fecha
      ? new Date(dataDispositivo.Fecha).toISOString().substring(0, 10)
      : "",
    Detalles: dataDispositivo.Detalles,
    Encargado: dataDispositivo.Encargado,
    Motivo: dataDispositivo.Motivo,
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
  const enviarFormulario = async (values, { resetForm }) => {
    try {
      console.log("Tengo esto", values);
      const response = await editarHistorial(values);
      // Realizar acciones adicionales según sea necesario
      resetForm();
      MostrarHistorial();
    } catch (error) {
      // Manejar el error de envío del formulario
    }
  };
  const fiedls = [
    { name: "Fecha", label: "Fecha", type: "date" },
    { name: "Detalles", label: "Detalles" },
    { name: "Encargado", label: "Encargado" },
    { name: "Motivo", label: "Motivo" },
  ];
  return (
    <TablaHistorial
      fields={fiedls}
      valoresIniciales={initialValues}
      validaciones={validationSchema}
      titulo={"Editar datos de historial"}
      onSubmit={enviarFormulario}
    />
  );
  // return (
  //   <div>
  //     <h1>Historial</h1>
  //     <Formik
  //       initialValues={initialValues}
  //       validationSchema={validationSchema}
  //       onSubmit={enviarFormulario}
  //     >
  //       <Form>
  //         <div>
  //           <label htmlFor="Fecha">Fecha:</label>
  //           <Field type="date" id="Fecha" name="Fecha" />
  //           <ErrorMessage name="Fecha" component="div" />
  //         </div>
  //         <div>
  //           <label htmlFor="Detalles">Detalles:</label>
  //           <Field type="text" id="Detalles" name="Detalles" />
  //           <ErrorMessage name="Detalles" component="div" />
  //         </div>
  //         <div>
  //           <label htmlFor="Encargado">Encargado:</label>
  //           <Field type="text" id="Encargado" name="Encargado" />
  //           <ErrorMessage name="Encargado" component="div" />
  //         </div>
  //         <div>
  //           <label htmlFor="Motivo">Motivo:</label>
  //           <Field type="text" id="Motivo" name="Motivo" />
  //           <ErrorMessage name="Motivo" component="div" />
  //         </div>

  //         <button type="submit">Enviar</button>

  //         <button onClick={MostrarHistorial} className="header-button">
  //           Cancelar
  //         </button>
  //       </Form>
  //     </Formik>
  //   </div>
  // );
};

export default EditHistorial;
