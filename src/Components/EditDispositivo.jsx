import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { url_base } from "../data/base.routes.js";
const EditDispositivo = ({ idDispositivo }) => {
  const [modoEdicion, setModoEdicion] = useState(false);
  const [dispositivo, setDispositivo] = useState({
    NroSerie: "",
    NroActivo: "",
    Estado: "",
    Ubicacion: "",
    Unidad: "",
    Marca: "",
    Detalle: "",
    Tipo: "",
    NonmbreDelEquipo: "",
    Procesador: "",
    RAM: "",
    MemoriaInterna: "",
    SistemaOperativo: "",
  });
  const [dispositivoOriginal, setDispositivoOriginal] = useState({});

  useEffect(() => {
    const fetchDispositivo = async () => {
      try {
        const response = await axios.get(`${url_base}/pc/${row_id}`);
        setDispositivo(response.data);
        setDispositivoOriginal(response.data);
      } catch (error) {
        console.error("Error al obtener el dispositivo:", error);
      }
    };

    fetchDispositivo();
  }, [idDispositivo]);

  const toggleModoEdicion = () => {
    setModoEdicion(!modoEdicion);
  };

  const validationSchema = Yup.object().shape({
    NroSerie: Yup.string().required("Número de Serie es requerido"),
    NroActivo: Yup.string().required("Número de Activo es requerido"),
    Estado: Yup.string().required("Estado es requerido"),
    Ubicacion: Yup.string().required("Ubicación es requerida"),
    Unidad: Yup.string().required("Unidad es requerida"),
    Marca: Yup.string().required("Marca es requerida"),
    Detalle: Yup.string().required("Detalle es requerido"),
    Tipo: Yup.string().required("Tipo es requerido"),
    NonmbreDelEquipo: Yup.string().required("Nombre del Equipo es requerido"),
    Procesador: Yup.string().required("Procesador es requerido"),
    RAM: Yup.string().required("RAM es requerida"),
    MemoriaInterna: Yup.string().required("Memoria Interna es requerida"),
    SistemaOperativo: Yup.string().required("Sistema Operativo es requerido"),
  });

  const handleSubmit = async (values) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/api/dispositivos/${idDispositivo}`,
        values
      );
      console.log("Datos actualizados:", response.data);
      setDispositivo(response.data);
      setDispositivoOriginal(response.data);
      setModoEdicion(false);
    } catch (error) {
      console.error("Error al actualizar el dispositivo:", error);
    }
  };

  const renderBotonEditar = () => {
    return <button onClick={toggleModoEdicion}>Editar</button>;
  };

  const renderBotonGuardar = () => {
    return <button type="submit">Guardar Cambios</button>;
  };

  return (
    <div>
      <h2>Editar Dispositivo</h2>
      {modoEdicion ? renderBotonEditar() : renderBotonGuardar()}
      <Formik
        initialValues={dispositivo}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="NroSerie">Número de Serie:</label>
              <Field
                type="text"
                id="NroSerie"
                name="NroSerie"
                disabled={!modoEdicion}
              />
              <ErrorMessage name="NroSerie" component="div" />
            </div>

            {/* Repite lo mismo para los demás campos */}
            {/* Ejemplo: */}
            <div>
              <label htmlFor="NroActivo">Número de Activo:</label>
              <Field
                type="text"
                id="NroActivo"
                name="NroActivo"
                disabled={!modoEdicion}
              />
              <ErrorMessage name="NroActivo" component="div" />
            </div>

            {/* Agrega el resto de los campos aquí */}

            {!modoEdicion && (
              <button type="submit" disabled={isSubmitting}>
                Guardar Cambios
              </button>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditDispositivo;
