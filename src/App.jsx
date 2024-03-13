import { useState } from 'react'

import './App.css'
import NavBar from './Components/NavBar'
import FormComputadora from './Components/FormComputadora'
import FormPeriferico from './Components/FormPeriferico'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <FormComputadora/>
    <FormPeriferico/>
    </>
  )
}

export default App
