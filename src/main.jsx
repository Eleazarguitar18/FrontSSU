import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { FormSubmitProvider } from "./Components/context/DispositivoContext.jsx";
import { DataProvider } from "./Components/context/DataContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FormSubmitProvider>
      <DataProvider>
        <App />
      </DataProvider>
    </FormSubmitProvider>
  </React.StrictMode>
);
