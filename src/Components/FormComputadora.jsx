import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Formulario.css'
const FormComputadora = () => {
  const initialValues = {
    NroSerie: '',
    NroActivo: '',
    estado: '',
    ubicacion: '',
    unidad: '',
    marca: '',
    detalle: '',
    tipo: '',
    nombreEquipo: '',
    procesador: '',
    ram: '',
    memoriaInterna: '',
  };

  const validationSchema = Yup.object({
    nroSerie: Yup.string().required('Campo requerido'),
    nroActivo: Yup.string().required('Campo requerido'),
    estado: Yup.string().required('Campo requerido'),
    ubicacion: Yup.string().required('Campo requerido'),
    unidad: Yup.string().required('Campo requerido'),
    marca: Yup.string().required('Campo requerido'),
    detalle: Yup.string().required('Campo requerido'),
    tipo: Yup.string().required('Campo requerido'),
    nombreEquipo: Yup.string().required('Campo requerido'),
    procesador: Yup.string().required('Campo requerido'),
    ram: Yup.string().required('Campo requerido'),
    memoriaInterna: Yup.string().required('Campo requerido'),
    // Agrega validaciones para los demás campos aquí
    // Por ejemplo:
    // estado: Yup.string().required('Campo requerido'),
  });

  const handleSubmit = (values) => {
    // Aquí puedes enviar los datos al backend o realizar otras acciones
    console.log('Datos enviados:', values);
  };

  return (
    <div>
      <h1>Formulario de Computadora</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="nroSerie">Número de Serie:</label>
            <Field type="text" id="nroSerie" name="nroSerie" />
            <ErrorMessage name="nroSerie" component="div" />
          </div>
          <div>
            <label htmlFor="nroActivo">Número de activo:</label>
            <Field type="text" id="nroActivo" name="nroActivo" />
            <ErrorMessage name="nroActivo" component="div" />
          </div>
          <div>
            <label htmlFor="estado">Estado:</label>
            <Field type="text" id="estado" name="estado" />
            <ErrorMessage name="estado" component="div" />
          </div>
          <div>
            <label htmlFor="ubicacion">Ubicacion:</label>
            <Field type="text" id="ubicacion" name="ubicacion" />
            <ErrorMessage name="ubicacion" component="div" />
          </div>
          <div>
            <label htmlFor="unidad">Unidad:</label>
            <Field type="text" id="unidad" name="unidad" />
            <ErrorMessage name="unidad" component="div" />
          </div>
          <div>
            <label htmlFor="marca">Marca:</label>
            <Field type="text" id="marca" name="marca" />
            <ErrorMessage name="marca" component="div" />
          </div>
          <div>
            <label htmlFor="detalle">Detalle:</label>
            <Field type="text" id="detalle" name="detalle" />
            <ErrorMessage name="detalle" component="div" />
          </div>
          {/* Repite lo mismo para los demás campos */}
          {/* ... */}
          <button type="submit">Enviar</button>
        </Form>
      </Formik>
      
    </div>
  );
};

export default FormComputadora;
