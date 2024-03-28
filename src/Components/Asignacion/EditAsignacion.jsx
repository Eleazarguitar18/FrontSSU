import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useData } from "../context/DataContext";
import { useFormSubmit } from "../context/DispositivoContext";
import { useNavigate } from "react-router-dom";
const EditAsignacion = () => {
  const { dataAsignacion } = useData();
  const { editarAsignacion } = useFormSubmit();

  const initialValues = {
    id_Asignacion: dataAsignacion.id_Asignacion,
    Nro: dataAsignacion.Nro,
    fecha_salida: dataAsignacion.fecha_salida,
    fecha_regreso: dataAsignacion.fecha_regreso,
    hora_salida: dataAsignacion.hora_salida,
    hora_llegada: dataAsignacion.hora_llegada,
    encargado_de_entrega: dataAsignacion.encargado_de_entrega,
    encargado_de_recepcion: dataAsignacion.encargado_de_recepcion,
    TipoAsignacion: dataAsignacion.TipoAsignacion,
    datos_solicitante: dataAsignacion.datos_solicitante,
    observaciones: dataAsignacion.observaciones,
    id_Dispositivo: dataAsignacion.id_Dispositivo,
  };

  const validationSchema = Yup.object().shape({
    Nro: Yup.string().required("Campo requerido"),
    fecha_salida: Yup.date().required("Campo requerido"),
    fecha_regreso: Yup.date().required("Campo requerido"),
    hora_salida: Yup.string().required("Campo requerido"),
    hora_llegada: Yup.string().required("Campo requerido"),
    encargado_de_entrega: Yup.string().required("Campo requerido"),
    encargado_de_recepcion: Yup.string().required("Campo requerido"),
    TipoAsignacion: Yup.string().required("Campo requerido"),
    datos_solicitante: Yup.string().required("Campo requerido"),
    observaciones: Yup.string(),
    id_Dispositivo: Yup.number().required("Campo requerido"),
  });
  const navigate = useNavigate();
  const mostrarAsignacion = () => {
    navigate("/mostrarAsig");
  };
  const onSubmit = (values) => {
    editarAsignacion(values);
    mostrarAsignacion();
    // if (respuesta.status == 200) {
    // }
  };
  return (
    <div>
      <h1>Formulario de Asignación</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label>Nro:</label>
              <Field type="text" name="Nro" />
              <ErrorMessage name="Nro" component="div" className="error" />
            </div>

            <div>
              <label>Fecha de Salida:</label>
              <Field type="date" name="fecha_salida" />
              <ErrorMessage
                name="fecha_salida"
                component="div"
                className="error"
              />
            </div>

            <div>
              <label>Fecha de Regreso:</label>
              <Field type="date" name="fecha_regreso" />
              <ErrorMessage
                name="fecha_regreso"
                component="div"
                className="error"
              />
            </div>

            <div>
              <label>Hora de Salida:</label>
              <Field type="time" name="hora_salida" />
              <ErrorMessage
                name="hora_salida"
                component="div"
                className="error"
              />
            </div>

            <div>
              <label>Hora de Llegada:</label>
              <Field type="time" name="hora_llegada" />
              <ErrorMessage
                name="hora_llegada"
                component="div"
                className="error"
              />
            </div>

            <div>
              <label>Encargado de Entrega:</label>
              <Field type="text" name="encargado_de_entrega" />
              <ErrorMessage
                name="encargado_de_entrega"
                component="div"
                className="error"
              />
            </div>

            <div>
              <label>Encargado de Recepción:</label>
              <Field type="text" name="encargado_de_recepcion" />
              <ErrorMessage
                name="encargado_de_recepcion"
                component="div"
                className="error"
              />
            </div>

            <div>
              <label>Tipo de Asignación:</label>
              <Field type="text" name="TipoAsignacion" />
              <ErrorMessage
                name="TipoAsignacion"
                component="div"
                className="error"
              />
            </div>

            <div>
              <label>Datos del Solicitante:</label>
              <Field type="text" name="datos_solicitante" />
              <ErrorMessage
                name="datos_solicitante"
                component="div"
                className="error"
              />
            </div>

            <div>
              <label>Observaciones:</label>
              <Field type="text" name="observaciones" />
              <ErrorMessage
                name="observaciones"
                component="div"
                className="error"
              />
            </div>

            <div>
              <label>ID del Dispositivo:</label>
              <Field type="number" name="id_Dispositivo" />
              <ErrorMessage
                name="id_Dispositivo"
                component="div"
                className="error"
              />
            </div>

            <button type="submit" disabled={isSubmitting}>
              Enviar
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditAsignacion;
