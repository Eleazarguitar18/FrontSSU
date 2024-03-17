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
import React from "react";
import { useData } from "./context/DataContext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { url_base } from "../data/base.routes.js";
const EditarDispositivo = () => {
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

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      console.log("estoy enviando estos datos", values);
      await axios.put(
        `${url_base}/pc/${dataDispositivo.id_Dispositivo}`,
        values
      );
      console.log("Dispositivo actualizado exitosamente");
      // Puedes redirigir al usuario a otra página o realizar otras acciones después de la edición exitosa
    } catch (error) {
      console.error("Error al actualizar el dispositivo:", error);
    }
    setSubmitting(false);
  };

  return (
    <div>
      <h2>Editar Dispositivo</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="NroSerie">Número de Serie:</label>
              <Field type="text" name="NroSerie" />
              <ErrorMessage name="NroSerie" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="NroActivo">Número Activo:</label>
              <Field type="text" name="NroActivo" />
              <ErrorMessage
                name="NroActivo"
                component="div"
                className="error"
              />
            </div>
            <div>
              <label htmlFor="Estado">Estado:</label>
              <Field type="text" name="Estado" />
              <ErrorMessage name="Estado" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="Ubicacion">Ubicación:</label>
              <Field type="text" name="Ubicacion" />
              <ErrorMessage
                name="Ubicacion"
                component="div"
                className="error"
              />
            </div>
            <div>
              <label htmlFor="Unidad">Unidad:</label>
              <Field type="text" name="Unidad" />
              <ErrorMessage name="Unidad" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="Marca">Marca:</label>
              <Field type="text" name="Marca" />
              <ErrorMessage name="Marca" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="Detalle">Detalle:</label>
              <Field type="text" name="Detalle" />
              <ErrorMessage name="Detalle" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="Tipo">Tipo:</label>
              <Field type="text" name="Tipo" />
              <ErrorMessage name="Tipo" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="NombreDelEquipo">Nombre del Equipo:</label>
              <Field type="text" name="NombreDelEquipo" />
              <ErrorMessage
                name="NombreDelEquipo"
                component="div"
                className="error"
              />
            </div>
            <div>
              <label htmlFor="Procesador">Procesador:</label>
              <Field type="text" name="Procesador" />
              <ErrorMessage
                name="Procesador"
                component="div"
                className="error"
              />
            </div>
            <div>
              <label htmlFor="RAM">RAM:</label>
              <Field type="text" name="RAM" />
              <ErrorMessage name="RAM" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="MemoriaInterna">Memoria Interna:</label>
              <Field type="text" name="MemoriaInterna" />
              <ErrorMessage
                name="MemoriaInterna"
                component="div"
                className="error"
              />
            </div>
            <div>
              <label htmlFor="SistemaOperativo">Sistema Operativo:</label>
              <Field type="text" name="SistemaOperativo" />
              <ErrorMessage
                name="SistemaOperativo"
                component="div"
                className="error"
              />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Guardar Cambios
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditarDispositivo;
