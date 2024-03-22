import React, { createContext, useContext } from "react";
import axios from "axios";

import { url_base } from "../data/base.routes.js";

// Creamos un nuevo contexto para el envío del formulario al backend
export const FormSubmitContext = createContext();

const FormSubmitProvider = ({ children }) => {
  // Función para manejar el envío del formulario para PC
  const handleSubmitPC = async (values) => {
    try {
      // Realizar la solicitud POST al backend con Axios
      const response = await axios.post(`${url_base}/pc`, values);
      console.log("Respuesta del backend para PC:", response.data);
      return response.data; // Devuelve la respuesta del backend si es necesario
    } catch (error) {
      console.error("Error al enviar el formulario para PC:", error);
      throw error; // Lanza el error para que los componentes puedan manejarlo según sea necesario
    }
  };

  // Función para manejar el envío del formulario para periférico
  const handleSubmitPeriferico = async (values) => {
    try {
      // Realizar la solicitud POST al backend con Axios
      const response = await axios.post(`${url_base}/periferico`, values);
      console.log("Respuesta del backend para periférico:", response.data);
      return response.data; // Devuelve la respuesta del backend si es necesario
    } catch (error) {
      console.error("Error al enviar el formulario para periférico:", error);
      throw error; // Lanza el error para que los componentes puedan manejarlo según sea necesario
    }
  };
  const crearHistorial = async (values) => {
    try {
      // Realizar la solicitud POST al backend con Axios
      // console.log("listo para enviar", values);

      const response = await axios.post(`${url_base}/historial`, values);
      console.log("Respuesta del backend para historial:", response.data);
      return response.data; // Devuelve la respuesta del backend si es necesario
    } catch (error) {
      console.error("Error al enviar el formulario para historial:", error);
      throw error; // Lanza el error para que los componentes puedan manejarlo según sea necesario
    }
  };
  return (
    <FormSubmitContext.Provider
      value={{ handleSubmitPC, handleSubmitPeriferico, crearHistorial }}
    >
      {children}
    </FormSubmitContext.Provider>
  );
};

// Hook personalizado para acceder a las funciones de envío de formularios
const useFormSubmit = () => useContext(FormSubmitContext);

export { FormSubmitProvider, useFormSubmit };
