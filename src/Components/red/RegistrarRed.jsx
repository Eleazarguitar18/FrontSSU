import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useFormSubmit } from "../context/DispositivoContext";
import { useData } from "../context/DataContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { url_base } from "../data/base.routes.js";
import { AsignaIP } from "./AsignarIP.jsx";
export default function RegistrarRed() {
  const navigate = useNavigate();

  const MostrarIP = () => {
    navigate("/mostrarpc");
  };
  const asignarip = () => {
    navigate("/asignarIP");
  };
  const { dataAsignacion } = useData();
  const { dataRed } = useData();
  console.log("id del dispositivo es:", dataRed);
  const [initialValues, setInitialValues] = useState({
    DireccionIP: dataAsignacion || "", // Si dataAsignacion es null, asigna una cadena vacía
    DireccionMAC: "",
    id_Dispositivo: dataRed || "", // Si dataRed es null, asigna una cadena vacía
  });

  const validationSchema = Yup.object().shape({
    // id_Datos_red: Yup.string().require("El campo es obligatorio"),
    DireccionIP: Yup.string().matches(
      /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
      "Ingrese una dirección IP válida"
    ),
    /* .required("La dirección IP es requerida") */ DireccionMAC: Yup.string()
      .matches(
        /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/,
        "Ingrese una dirección MAC válida"
      )
      .required("La dirección MAC es requerida"),
    // id_Dispositivo: Yup.string().require("El campo es obligatorio"),
  });
  const crearDatoRed = async (values, { setSubmitting, resetForm }) => {
    try {
      if (values.DireccionIP === "") {
        values.DireccionIP = "0.0.0.0";
      }

      console.log("estoy enviando estos datos", values);
      const respuesta = await axios.post(`${url_base}/datos_red`, values);

      if (respuesta.status == 201) {
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
      <h2>Restrar los datos de Red el Equipo</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={crearDatoRed}
      >
        <Form>
          <div>
            <label htmlFor="DireccionIP">Dirección IP:</label>
            <Field type="text" id="DireccionIP" name="DireccionIP" />
            <ErrorMessage name="DireccionIP" component="div" />
            <button onClick={asignarip}>Asignar IP</button>
          </div>
          <div>
            <label htmlFor="DireccionMAC">Dirección MAC:</label>
            <Field type="text" id="DireccionMAC" name="DireccionMAC" />
            <ErrorMessage name="DireccionMAC" component="div" />
          </div>
          <button type="submit">Registrar</button>
          <button onClick={MostrarIP}>Cancelar</button>
        </Form>
      </Formik>
    </div>
  );
}
