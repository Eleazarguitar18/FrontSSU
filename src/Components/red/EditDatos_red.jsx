import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useFormSubmit } from "../context/DispositivoContext";
import { useData } from "../context/DataContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { url_base } from "../data/base.routes.js";

export default function EditDatos_red() {
  const navigate = useNavigate();

  const MostrarIP = () => {
    navigate("/datosred");
  };
  const { dataRed, setDataRed } = useData();
  console.log("id del dispositivo a editar es:", dataRed);

  const initialValues = {
    id_Datos_red: dataRed.id_Datos_red,
    DireccionIP: dataRed.DireccionIP,
    DireccionMAC: dataRed.DireccionMAC,
    id_Dispositivo: dataRed.id_Dispositivo,
    Unidad: dataRed.Unidad,
    Marca: dataRed.Marca,
    Tipo: dataRed.Tipo,
    Ubicacion: dataRed.Ubicacion,
  };
  const validationSchema = Yup.object().shape({
    // id_Datos_red: Yup.string().require("El campo es obligatorio"),
    DireccionIP: Yup.string()
      .matches(
        /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
        "Ingrese una dirección IP válida"
      )
      .required("La dirección IP es requerida"),
    DireccionMAC: Yup.string()
      .matches(
        /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/,
        "Ingrese una dirección MAC válida"
      )
      .required("La dirección MAC es requerida"),
    // id_Dispositivo: Yup.string().require("El campo es obligatorio"),
    Unidad: Yup.string().required("El campo es obligatorio"),
    Marca: Yup.string().required("El campo es obligatorio"),
    Tipo: Yup.string().required("El campo es obligatorio"),
    Ubicacion: Yup.string().required("El campo es obligatorio"),
  });
  const cambiarIP = async (values, { setSubmitting, resetForm }) => {
    try {
      console.log("estoy enviando estos datos", values);
      const respuesta = await axios.put(
        `${url_base}/datos_red/${values.id_Datos_red}`,
        values
      );

      if (respuesta.status == 200) {
        console.log("La IP se actualizado exitosamente");
        // initialValues = null;
        setSubmitting(false);
        resetForm();
        MostrarIP();
      }
      // Puedes redirigir al usuario a otra página o realizar otras acciones después de la edición exitosa
    } catch (error) {
      console.error("Error al actualizar el dispositivo:", error);
    }
  };
  return (
    <div>
      <h2>Cambiar direccion IP del equipo</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={cambiarIP}
      >
        <Form>
          <div>
            <label htmlFor="DireccionIP">Dirección IP:</label>
            <Field type="text" id="DireccionIP" name="DireccionIP" />
            <ErrorMessage name="DireccionIP" component="div" />
          </div>
          <div>
            <label htmlFor="DireccionMAC">Dirección MAC:</label>
            <Field type="text" id="DireccionMAC" name="DireccionMAC" readOnly />
            <ErrorMessage name="DireccionMAC" component="div" />
          </div>
          <div>
            <label htmlFor="Unidad">Unidad:</label>
            <Field type="text" id="Unidad" name="Unidad" readOnly />
            <ErrorMessage name="Unidad" component="div" />
          </div>
          <div>
            <label htmlFor="Marca">Marca:</label>
            <Field type="text" id="Marca" name="Marca" readOnly />
            <ErrorMessage name="Marca" component="div" />
          </div>
          <div>
            <label htmlFor="Tipo">Tipo:</label>
            <Field type="text" id="Tipo" name="Tipo" readOnly />
            <ErrorMessage name="Tipo" component="div" />
          </div>
          <div>
            <label htmlFor="Ubicacion">Ubicación:</label>
            <Field type="text" id="Ubicacion" name="Ubicacion" readOnly />
            <ErrorMessage name="Ubicacion" component="div" />
          </div>
          <button type="submit">Enviar</button>
          <button onClick={MostrarIP}>Cancelar</button>
        </Form>
      </Formik>
    </div>
  );
}
