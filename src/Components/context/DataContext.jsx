// DataContext.js
import React, { createContext, useContext, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [dataDispositivo, setDataDispositivo] = useState(null);
  const [dataHistorial, setDataHistorial] = useState(null);
  const [dataRed, setDataRed] = useState(null);

  // variable para mantenimiento
  const [dataMantenimiento, setDataMantenimiento] = useState(null);
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
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
