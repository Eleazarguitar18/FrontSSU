import AppRoutes from "./routes/AppRoutes";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useData } from "./Components/context/DataContext";
import { Login } from "./Components/login/Login";
function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="bg-slate-200 h-screen">
      <AppRoutes />
    </div>
  );
}

export default App;
