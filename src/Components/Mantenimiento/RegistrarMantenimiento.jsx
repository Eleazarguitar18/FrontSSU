import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useFormSubmit } from "../context/DispositivoContext";
import { useNavigate } from "react-router-dom";
// import { useActionData } from "react-router-dom";
// import { DataContext } from "./DataContext"; // Asegúrate de importar tu contexto de datos

const RegistrarMantenimiento = () => {
  //   const { agregarMantenimiento } = useContext(DataContext); // Obtener función para agregar mantenimiento desde el contexto

  const initialValues = {
    fecha_inicial: "",
    actividad: "",
    fecha_final: "",
    estado: "",
    Detalles: "",
    tipo: "",
    id_Dispositivo: "",
    id_PersonalSSU: "",
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

  return (
    <div>
      <h2>Registrar Mantenimiento</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <label>Fecha Inicial:</label>
              <Field type="date" name="fecha_inicial" />
              <ErrorMessage name="fecha_inicial" component="div" />
            </div>
            <div>
              <label>Actividad:</label>
              <Field type="text" name="actividad" />
              <ErrorMessage name="actividad" component="div" />
            </div>
            <div>
              <label>Fecha Final:</label>
              <Field type="date" name="fecha_final" />
              <ErrorMessage name="fecha_final" component="div" />
            </div>
            <div>
              <label>Estado:</label>
              <Field as="select" name="estado">
                <option value="">Seleccionar estado</option>
                <option value="pendiente">Pendiente</option>
                <option value="atendido">Atendido</option>
              </Field>
              <ErrorMessage name="estado" component="div" />
            </div>
            <div>
              <label>Detalles:</label>
              <Field type="text" name="Detalles" />
              <ErrorMessage name="Detalles" component="div" />
            </div>
            <div>
              <label>Tipo:</label>
              <Field type="text" name="tipo" />
              <ErrorMessage name="tipo" component="div" />
            </div>
            <div>
              <label>ID Dispositivo:</label>
              <Field type="number" name="id_Dispositivo" />
              <ErrorMessage name="id_Dispositivo" component="div" />
            </div>
            <div>
              <label>ID Personal SSU:</label>
              <Field type="number" name="id_PersonalSSU" />
              <ErrorMessage name="id_PersonalSSU" component="div" />
            </div>
            <button type="submit">Registrar Mantenimiento</button>
            <button onClick={mostrarMantenimiento}>Cancelar</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrarMantenimiento;
