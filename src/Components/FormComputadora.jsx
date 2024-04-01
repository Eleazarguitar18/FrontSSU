import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useFormSubmit } from "./context/DispositivoContext";
import "./Formulario.css";
import { useData } from "./context/DataContext";
const FormComputadora = () => {
  const navigate = useNavigate();
  // Define el esquema de validación utilizando Yup
  const { handleSubmitPC } = useFormSubmit();
  const validationSchema = Yup.object().shape({
    NroSerie: Yup.string().required("El número de serie es requerido"),
    NroActivo: Yup.string().required("El número activo es requerido"),
    Estado: Yup.string().required("El Estado es requerido"),
    Ubicacion: Yup.string().required("La ubicación es requerida"),
    Unidad: Yup.string().required("La Unidad es requerida"),
    Marca: Yup.string().required("La Marca es requerida"),
    Detalle: Yup.string().required("El Detalle es requerido"),
    Tipo: Yup.string().required("El Tipo es requerido"),
    NombreDelEquipo: Yup.string().required("El nombre del equipo es requerido"),
    Procesador: Yup.string().required("El Procesador es requerido"),
    RAM: Yup.string().required("La RAM es requerida"),
    MemoriaInterna: Yup.string().required("La memoria interna es requerida"),
    SistemaOperativo: Yup.string().required(
      "La Sistema Operativo es requerida"
    ),
  });
  const { setDataRed } = useData();
  const mostrarDatosRed = () => {
    navigate("/registrarRed");
  };
  // Función para manejar el envío del formulario

  const enviarFormulario = async (values, { resetForm }) => {
    try {
      const response = await handleSubmitPC(values);
      // Realizar acciones adicionales según sea necesario
      // console.log("saco el id", response.data.id_Dispositivo);
      setDataRed(response.data.id_Dispositivo);
      resetForm();
      mostrarDatosRed();
    } catch (error) {
      // Manejar el error de envío del formulario
    }
  };

  return (
    <div className="bg-slate-100 w-full p-10">
      <div className=" text-slate-800 p-7 px-16 rounded-lg bg-gradient-to-r from-slate-400 via-slate-200 to-slate-400 shadow-lg shadow-indigo-500/40">
        <h1 className="text-2xl font-bold text-center pb-10">
          Registro de Equipo de Computadora
        </h1>
        <Formik
          initialValues={{
            NroSerie: "",
            NroActivo: "",
            Estado: "",
            Ubicacion: "",
            Unidad: "",
            Marca: "",
            Detalle: "",
            Tipo: "",
            NombreDelEquipo: "",
            Procesador: "",
            RAM: "",
            MemoriaInterna: "",
            SistemaOperativo: "",
          }}
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
                <label htmlFor="NombreDelEquipo">Nombre del Equipo:</label>
                <Field
                  type="text"
                  id="NombreDelEquipo"
                  name="NombreDelEquipo"
                />
                <ErrorMessage name="NombreDelEquipo" component="div" />
              </div>
              <div>
                <label htmlFor="Procesador">Procesador:</label>
                <Field type="text" id="Procesador" name="Procesador" />
                <ErrorMessage name="Procesador" component="div" />
              </div>
              <div>
                <label htmlFor="RAM">RAM:</label>
                <Field type="text" id="RAM" name="RAM" />
                <ErrorMessage name="RAM" component="div" />
              </div>
              <div>
                <label htmlFor="MemoriaInterna">Memoria Interna:</label>
                <Field type="text" id="MemoriaInterna" name="MemoriaInterna" />
                <ErrorMessage name="MemoriaInterna" component="div" />
              </div>
              <div>
                <label htmlFor="SistemaOperativo">Sistema Operativo:</label>
                <Field
                  type="text"
                  id="SistemaOperativo"
                  name="SistemaOperativo"
                />
                <ErrorMessage name="SistemaOperativo" component="div" />
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

export default FormComputadora;
