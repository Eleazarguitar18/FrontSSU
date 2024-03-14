import React, { createContext, useContext } from "react";
import axios from "axios";
const url_base = "http://localhost:3000";
// Creamos un nuevo contexto para el envío del formulario al backend
const FormSubmitContext = createContext();

const FormSubmitProvider = ({ children }) => {
  // funcion para obtener los datos de dispositivo
  // const getDataDispositivo = async () => {
  //   try {
  //     const response = await axios.get(`${url_base}/api/pc`);

  //     // Axios ya maneja automáticamente los códigos de estado y lanza un error en caso de un código no exitoso
  //     // Por lo tanto, no necesitas verificar manualmente response.ok

  //     // Obtén directamente los datos de la respuesta
  //     const data = response.data;

  //     // Puedes realizar más acciones con los datos aquí
  //     console.log(data);

  //     // Exportar los datos
  //     return data;
  //   } catch (error) {
  //     console.error("Error al obtener los datos:", error);
  //     throw error; // Puedes lanzar el error nuevamente si es necesario
  //   }
  // };
  // Función para manejar el envío del formulario
  const handleSubmit = async (values) => {
    try {
      // Realizar la solicitud POST al backend con Axios
      const response = await axios.post(`${url_base}/api/pc`, values);
      console.log("Respuesta del backend:", response.data);
      return response.data; // Opcional: puedes devolver la respuesta del backend si es necesario
    } catch (error) {
      console.error("Error al enviar los datos:", error);
      throw error; // Lanza el error para que los componentes puedan manejarlo según sea necesario
    }
  };

  return (
    <FormSubmitContext.Provider value={handleSubmit}>
      {children}
    </FormSubmitContext.Provider>
  );
};

// Hook personalizado para acceder a la función de envío del formulario
const useFormSubmit = () => useContext(FormSubmitContext);
// const usePCview = () => useContext(FormSubmitContext);

export { FormSubmitProvider, useFormSubmit };
