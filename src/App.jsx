import { useState } from "react";

import "./App.css";
import Formulario from "./Components/Formulario";
import Cabezera from "./Components/Cabezera";
import AppRoutes from "./routes/AppRoutes";
import HomePage from "./Components/HomePage";
function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      {/* <HomePage /> */}
      <AppRoutes />
      {/* <Formulario /> */}
    </>
  );
}

export default App;
