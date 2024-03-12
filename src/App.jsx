import { useState } from 'react'

import './App.css'
import Formulario from "./Components/Formulario"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Formulario></Formulario> 
    </>
  )
}

export default App
