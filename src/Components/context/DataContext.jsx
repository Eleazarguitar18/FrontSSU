// DataContext.js
import React, { createContext, useContext, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [dataDispositivo, setDataDispositivo] = useState(null);
  const [dataHistorial, setDataHistorial] = useState(null);
  const [dataRed, setDataRed] = useState(null);
  const [dataAsignacion, setDataAsignacion] = useState(null);
  // ! dato para la confirmacion de eliminacion
  const [confirmDelete, setConfirmDelete] = useState(false);
  // variable para mantenimiento
  const [dataMantenimiento, setDataMantenimiento] = useState(null);
  const [dataLogin, setDataLogin] = useState(true);
  const [dataPersonal, setDataPersonal] = useState(null);
  const [dataPersonalEntrega, setDataPersonalEntrega] = useState(null);
  const [dataPersonalRecepcion, setDataPersonalRecepcion] = useState(null);
  const [dataPersonalSolicitante, setDataPersonalSolicitante] = useState(null);

  return (
    <DataContext.Provider
      value={{
        dataDispositivo,
        setDataDispositivo,
        dataHistorial,
        setDataHistorial,
        dataRed,
        setDataRed,
        dataMantenimiento,
        setDataMantenimiento,
        dataAsignacion,
        setDataAsignacion,
        confirmDelete,
        setConfirmDelete,
        dataLogin,
        setDataLogin,
        dataPersonal,
        setDataPersonal,
        dataPersonalEntrega,
        setDataPersonalEntrega,
        dataPersonalRecepcion,
        setDataPersonalRecepcion,
        dataPersonalSolicitante,
        setDataPersonalSolicitante,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
