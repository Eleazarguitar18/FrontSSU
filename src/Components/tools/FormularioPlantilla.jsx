import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormularioPlantilla = ({ fields, onSubmit }) => {
  // Definir el esquema de validación utilizando Yup
  const validationSchema = Yup.object().shape(
    fields.reduce((acc, field) => {
      acc[field.name] =
        field.validation ||
        Yup.string().required(`${field.label} es requerido`);
      return acc;
    }, {})
  );

  return (
    <div className="bg-slate-100 w-full p-10">
      <div className="text-slate-800 p-7 px-16 rounded-lg bg-gradient-to-r from-slate-400 via-slate-200 to-slate-400 shadow-lg shadow-indigo-500/40">
        <h1 className="text-2xl font-bold text-center pb-10">
          Registro de Equipo de Computadora
        </h1>
        <Formik
          initialValues={fields.reduce((acc, field) => {
            acc[field.name] = "";
            return acc;
          }, {})}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(
            { isSubmitting } // Añadimos isSubmitting para deshabilitar el botón mientras se envía el formulario
          ) => (
            <Form className="mt-5">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {fields.map((field, index) => (
                  <div key={index}>
                    <label htmlFor={field.name}>{field.label}:</label>
                    {field.options ? (
                      <Field as="select" id={field.name} name={field.name}>
                        {field.options.map((option, optionIndex) => (
                          <option key={optionIndex} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </Field>
                    ) : (
                      <Field
                        type={field.type || "text"}
                        id={field.name}
                        name={field.name}
                      />
                    )}
                    <ErrorMessage name={field.name} component="div" />
                  </div>
                ))}
              </div>
              <button
                type="submit"
                className="bg-slate-800 font-bold text-white p-2 rounded mt-3"
                disabled={isSubmitting} // Deshabilita el botón mientras se envía el formulario
              >
                {isSubmitting ? "Enviando..." : "Enviar"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default FormularioPlantilla;
