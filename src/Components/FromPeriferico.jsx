import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Formulario.css";
import { useFormSubmit } from "./context/DispositivoContext";

const FormPeriferico = () => {
  // const handleSubmit = handleSubmitPeriferico;
  const { handleSubmitPeriferico } = useFormSubmit();
  const initialValues = {
    NroSerie: "",
    NroActivo: "",
    Estado: "",
    Ubicacion: "",
    Unidad: "",
    Marca: "",
    Detalle: "",
    Tipo: "",
    Descripcion: "",
  };

  const validationSchema = Yup.object({
    NroSerie: Yup.string().required("Campo requerido"),
    NroActivo: Yup.string().required("Campo requerido"),
    Estado: Yup.string().required("Campo requerido"),
    Ubicacion: Yup.string().required("Campo requerido"),
    Unidad: Yup.string().required("Campo requerido"),
    Marca: Yup.string().required("Campo requerido"),
    Detalle: Yup.string().required("Campo requerido"),
    Tipo: Yup.string().required("Campo requerido"),
    Descripcion: Yup.string().required("Campo requerido"),
  });

  const enviarFormulario = async (values, { resetForm }) => {
    try {
      const response = await handleSubmitPeriferico(values);
      // Realizar acciones adicionales según sea necesario
      resetForm();
    } catch (error) {
      // Manejar el error de envío del formulario
    }
  };

  return (
    <div className="bg-slate-100 w-full p-10">
      <div className=" text-slate-800 p-7 px-16  rounded-lg bg-gradient-to-r from-slate-400 via-slate-200 to-slate-400 shadow-lg shadow-indigo-500/40">
        <h1 className="text-2xl font-bold text-center pb-10">
          Formulario de Periféricos
        </h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={enviarFormulario}
        >
          <Form className="mt-5">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label htmlFor="NroSerie">Número de Serie:</label>
                <Field type="text" id="NroSerie" name="NroSerie" />
                <ErrorMessage name="NroSerie" component="div" />
              </div>
              <div>
                <label htmlFor="NroActivo">Número de Activo:</label>
                <Field type="text" id="NroActivo" name="NroActivo" />
                <ErrorMessage name="NroActivo" component="div" />
              </div>
              <div>
                <label htmlFor="Estado">Estado:</label>
                <Field type="text" id="Estado" name="Estado" />
                <ErrorMessage name="Estado" component="div" />
              </div>
              <div>
                <label htmlFor="Ubicacion">Ubicación:</label>
                <Field type="text" id="Ubicacion" name="Ubicacion" />
                <ErrorMessage name="Ubicacion" component="div" />
              </div>
              <div>
                <label htmlFor="Unidad">Unidad:</label>
                <Field type="text" id="Unidad" name="Unidad" />
                <ErrorMessage name="Unidad" component="div" />
              </div>
              <div>
                <label htmlFor="Marca">Marca:</label>
                <Field type="text" id="Marca" name="Marca" />
                <ErrorMessage name="Marca" component="div" />
              </div>
              <div>
                <label htmlFor="Detalle">Detalle:</label>
                <Field type="text" id="Detalle" name="Detalle" />
                <ErrorMessage name="Detalle" component="div" />
              </div>
              <div>
                <label htmlFor="Tipo">Tipo:</label>
                <Field type="text" id="Tipo" name="Tipo" />
                <ErrorMessage name="Tipo" component="div" />
              </div>
              <div>
                <label htmlFor="Descripcion">Descripción:</label>
                <Field type="text" id="Descripcion" name="Descripcion" />
                <ErrorMessage name="Descripcion" component="div" />
              </div>
            </div>
            <button
              type="submit"
              className="bg-slate-800 font-bold text-white p-2 rounded mt-3"
            >
              Enviar
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default FormPeriferico;
