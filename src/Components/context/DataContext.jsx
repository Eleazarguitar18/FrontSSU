// DataContext.js
import React, { createContext, useContext, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [dataDispositivo, setDataDispositivo] = useState(null);

  return (
    <DataContext.Provider value={{ dataDispositivo, setDataDispositivo }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
