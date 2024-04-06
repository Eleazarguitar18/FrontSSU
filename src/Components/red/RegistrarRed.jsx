import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useFormSubmit } from "../context/DispositivoContext";
import { useData } from "../context/DataContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { url_base } from "../data/base.routes.js";
import { AsignaIP } from "./AsignarIP.jsx";
import DynamicForm from "../tools/FormularioPlantilla.jsx";
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
  const crearDatoRed = async (values, { resetForm }) => {
    try {
      if (values.DireccionIP === "") {
        values.DireccionIP = "0.0.0.0";
      }

      console.log("estoy enviando estos datos", values);
      const respuesta = await axios.post(`${url_base}/datos_red`, values);

      if (respuesta.status == 201) {
        console.log("La IP se actualizado exitosamente");
        // initialValues = null;
        resetForm();
        MostrarIP();
      }
      // Puedes redirigir al usuario a otra página o realizar otras acciones después de la edición exitosa
    } catch (error) {
      console.error("Error al actualizar el dispositivo:", error);
    }
  };
  const fields = [
    { name: "Direccion IP", label: "DireccionIP" },
    { name: "Direccion MAC", label: "DireccionMAC" },
  ];
  return (
    <div className="bg-slate-300 p-5 m-7 rounded-lg shadow-md">
      <h2 className="text-center font-bold text-3xl my-4">
        Registrar los datos de Red del Equipo
      </h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={crearDatoRed}
      >
        <Form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="DireccionIP" className="block font-semibold mb-1">
              Dirección IP:
            </label>
            <Field
              type="text"
              id="DireccionIP"
              name="DireccionIP"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            <ErrorMessage
              name="DireccionIP"
              component="div"
              className="text-red-600"
            />
            <button
              type="button"
              className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded mr-2"
              onClick={asignarip}
            >
              Asignar IP
            </button>
          </div>
          <div>
            <label htmlFor="DireccionMAC" className="block font-semibold mb-1">
              Dirección MAC:
            </label>
            <Field
              type="text"
              id="DireccionMAC"
              name="DireccionMAC"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            <ErrorMessage
              name="DireccionMAC"
              component="div"
              className="text-red-600"
            />
          </div>
          <div className="col-span-2 flex justify-end">
            <button
              type="submit"
              className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              Registrar
            </button>
            <button
              type="button"
              className="bg-red-800 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={MostrarIP}
            >
              Cancelar
            </button>
          </div>
        </Form>
      </Formik>
    </div>

    // <DynamicForm
    //   fields={fields}
    //   onSubmit={crearDatoRed}
    //   // validaciones={validationSchema}
    //   // valoresIniciales={initialValues}
    // />
  );
}
