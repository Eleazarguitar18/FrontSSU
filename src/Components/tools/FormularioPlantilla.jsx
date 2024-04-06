import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormularioPlantilla = ({
  fields,
  onSubmit,
  validaciones,
  valoresIniciales,
}) => {
  // Definir el esquema de validación utilizando Yup
  const schema =
    validaciones ||
    Yup.object().shape(
      fields.reduce((acc, field) => {
        acc[field.name] =
          field.validation ||
          Yup.string().required(`${field.label} es requerido`);
        return acc;
      }, {})
    );

  // Definir los valores iniciales del formulario
  const initialValues =
    valoresIniciales ||
    fields.reduce((acc, field) => {
      acc[field.name] = "";
      return acc;
    }, {});

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white w-full m-8 p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6">
          Registro de Equipo de Computadora
        </h1>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {fields.map((field, index) => (
                  <div key={index}>
                    <label
                      htmlFor={field.name}
                      className="block text-gray-700 font-semibold mb-1"
                    >
                      {field.label}:
                    </label>
                    {field.options ? (
                      <Field
                        as="select"
                        id={field.name}
                        name={field.name}
                        className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500"
                      >
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
                        className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500"
                      />
                    )}
                    <ErrorMessage
                      name={field.name}
                      component="div"
                      className="text-red-600"
                    />
                  </div>
                ))}
              </div>
              <button
                type="submit"
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-6 rounded-md mt-6 w-full"
                disabled={isSubmitting}
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
