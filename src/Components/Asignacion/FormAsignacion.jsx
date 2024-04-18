import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useFormSubmit } from "../context/DispositivoContext";
import { url_base } from "../data/base.routes";
import FormularioAsignacion from "../tools/FormularioPlantilla";
import { useData } from "../context/DataContext";
import { useNavigate } from "react-router-dom";
const FormAsignacion = () => {
  const navigate = useNavigate();
  const mostrarAsig = () => {
    navigate("/mostrarAsig");
  };
  // ! TODO: SACAR DATOS DEL ENCARGADO DE RECEPCION,ENTREGA,SOLICITANT
  const { nuevoAsignacion } = useFormSubmit();
  const { dataDispositivo } = useData();
  const {
    dataPersonal,
    dataPersonalEntrega,
    dataPersonalRecepcion,
    dataPersonalSolicitante,
  } = useData();
  console.log("Datos de encargado", dataPersonalEntrega);
  console.log("Datos del personal de recepcion", dataPersonalRecepcion);
  console.log("Datos del personal del solicitante", dataPersonalSolicitante);
  const initialValues = {
    Nro: "",
    fecha_salida: "",
    fecha_regreso: "",
    hora_salida: "",
    hora_llegada: "",
    encargado_de_entrega:
      `${dataPersonalEntrega.Nombres} ${dataPersonalEntrega.ApellidoPaterno} ${dataPersonalEntrega.ApellidoMaterno}` ||
      "",
    encargado_de_recepcion:
      `${dataPersonalRecepcion.Nombres} ${dataPersonalRecepcion.ApellidoPaterno} ${dataPersonalRecepcion.ApellidoMaterno}` ||
      "",
    TipoAsignacion: "Temporal" || "",
    datos_solicitante:
      `${dataPersonalSolicitante.Nombres} ${dataPersonalSolicitante.ApellidoPaterno} ${dataPersonalSolicitante.ApellidoMaterno}` ||
      "",
    observaciones: "",
    id_Dispositivo: dataDispositivo.id_Dispositivo || "",
  };

  const validationSchema = Yup.object().shape({
    Nro: Yup.string().required("Campo requerido"),
    fecha_salida: Yup.date().required("Campo requerido"),
    fecha_regreso: Yup.date().required("Campo requerido"),
    hora_salida: Yup.string().required("Campo requerido"),
    hora_llegada: Yup.string().required("Campo requerido"),
    encargado_de_entrega: Yup.string().required("Campo requerido"),
    encargado_de_recepcion: Yup.string().required("Campo requerido"),
    TipoAsignacion: Yup.string().required("Campo requerido"),
    datos_solicitante: Yup.string().required("Campo requerido"),
    observaciones: Yup.string(),
    id_Dispositivo: Yup.number().required("Campo requerido"),
  });

  const fields = [
    { name: "Nro", label: "Nro" },
    { name: "fecha_salida", label: "Fecha Salida", type: "date" },
    { name: "fecha_regreso", label: "Fecha regreso", type: "date" },
    { name: "hora_salida", label: "Hora salida", type: "time" },
    { name: "hora_llegada", label: "Hora llegada", type: "time" },
    { name: "encargado_de_entrega", label: "Encargado de entrega" },
    { name: "encargado_de_recepcion", label: "Encargado de recepcion" },
    {
      name: "TipoAsignacion",
      label: "Tipo de asignacion",
      options: [
        { value: "Temporal", label: "Temporal" },
        { value: "Indefinido", label: "Indefinido" },
      ],
    },
    {
      name: "datos_solicitante",
      label: `Datos del solicitante (nombre - apellido) `,
    },
    { name: "observaciones", label: "Observaciones" },
    { name: "id_Dispositivo", label: "ID Dispositivo" },
  ];
  const onSubmit = async (values, { resetForm }) => {
    console.log("valores a enviar", values);
    try {
      const response = await nuevoAsignacion(values);
      console.log("RESPUESTA", response);
      resetForm();
      mostrarAsig();
    } catch (error) {
      console.error("Error al enviar datos:", error);
    }
  };
  return (
    <FormularioAsignacion
      valoresIniciales={initialValues}
      fields={fields}
      titulo={"Asignacion de Dispositivos"}
      onSubmit={onSubmit}
    />
  );
};

export default FormAsignacion;
