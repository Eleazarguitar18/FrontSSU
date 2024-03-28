import { useState } from "react";

import "./App.css";
import AppRoutes from "./routes/AppRoutes";
function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      {/* <HomePage /> */}
      <div className="bg-background border-background">
        <AppRoutes />
      </div>
      {/* <Formulario /> */}
    </>
  );
}

export default App;
