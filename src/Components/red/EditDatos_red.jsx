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
  const { dataDispositivo, setDataDispositivo } = useData();
  console.log("id del dispositivo a editar es:", dataDispositivo);

  const initialValues = {
    id_Datos_red: dataDispositivo.id_Datos_red,
    DireccionIP: dataDispositivo.DireccionIP,
    DireccionMAC: dataDispositivo.DireccionMAC,
    id_Dispositivo: dataDispositivo.id_Dispositivo,
    Unidad: dataDispositivo.Unidad,
    Marca: dataDispositivo.Marca,
    Tipo: dataDispositivo.Tipo,
    Ubicacion: dataDispositivo.Ubicacion,
  };

  const DatosEquipo = () => {
    return (
      <div className=" bg-gray-100 rounded-md p-4">
        <div className="grid grid-cols-1 gap-4">
          <div className="flex justify-start items-center gap-4">
            <h2 className="text-lg font-semibold">Unidad:</h2>
            <p>{dataDispositivo.Unidad}</p>
          </div>
          <div className="flex justify-start items-center gap-4">
            <h2 className="text-lg font-semibold">Marca:</h2>
            <p>{dataDispositivo.Marca}</p>
          </div>
          <div className="flex justify-start items-center gap-4">
            <h2 className="text-lg font-semibold">Tipo:</h2>
            <p>{dataDispositivo.Tipo}</p>
          </div>
          <div className="flex justify-start items-center gap-4">
            <h2 className="text-lg font-semibold">Ubicación:</h2>
            <p>{dataDispositivo.Ubicacion}</p>
          </div>
        </div>
      </div>
    );
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
    <div className="max-w-md mx-auto bg-white rounded p-8 my-4">
      <h2 className="text-2xl font-bold mb-4">
        Cambiar dirección IP del equipo
      </h2>
      <DatosEquipo />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={cambiarIP}
      >
        <Form className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="DireccionIP" className="text-sm font-semibold mb-1">
              Dirección IP:
            </label>
            <Field
              type="text"
              id="DireccionIP"
              name="DireccionIP"
              className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
            />
            <ErrorMessage
              name="DireccionIP"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="DireccionMAC"
              className="text-sm font-semibold mb-1"
            >
              Dirección MAC:
            </label>
            <Field
              type="text"
              id="DireccionMAC"
              name="DireccionMAC"
              className="border border-gray-300 rounded-md py-2 px-3 bg-gray-100 cursor-not-allowed"
              readOnly
            />
            <ErrorMessage
              name="DireccionMAC"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          {/* Repeat this structure for other fields */}

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Enviar
            </button>
            <button
              onClick={MostrarIP}
              className="ml-2 bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
            >
              Cancelar
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
