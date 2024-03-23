import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useFormSubmit } from "../context/DispositivoContext";
import { useData } from "../context/DataContext";
import { useNavigate } from "react-router-dom";
import Historial from "./DataTableHistorial";

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
  const { dataHistorial } = useData();
  //   console.log("tengo estos datos", dataHistorial);
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

  return (
    <div>
      <h1>Historial</h1>
      <Formik
        initialValues={{
          id_Historial: dataHistorial.id_Historial,
          Fecha: dataHistorial.Fecha
            ? new Date(dataHistorial.Fecha).toISOString().substring(0, 10)
            : "",
          Detalles: dataHistorial.Detalles,
          Encargado: dataHistorial.Encargado,
          Motivo: dataHistorial.Motivo,
          id_Dispositivo: dataHistorial.id_Dispositivo,
        }}
        validationSchema={validationSchema}
        onSubmit={enviarFormulario}
      >
        <Form>
          <div>
            <label htmlFor="Fecha">Fecha:</label>
            <Field type="date" id="Fecha" name="Fecha" />
            <ErrorMessage name="Fecha" component="div" />
          </div>
          <div>
            <label htmlFor="Detalles">Detalles:</label>
            <Field type="text" id="Detalles" name="Detalles" />
            <ErrorMessage name="Detalles" component="div" />
          </div>
          <div>
            <label htmlFor="Encargado">Encargado:</label>
            <Field type="text" id="Encargado" name="Encargado" />
            <ErrorMessage name="Encargado" component="div" />
          </div>
          <div>
            <label htmlFor="Motivo">Motivo:</label>
            <Field type="text" id="Motivo" name="Motivo" />
            <ErrorMessage name="Motivo" component="div" />
          </div>

          <button type="submit">Enviar</button>

          <button onClick={MostrarHistorial} className="header-button">
            Cancelar
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default EditHistorial;
