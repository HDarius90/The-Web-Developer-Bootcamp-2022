import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Clicker from './Clicker'
import Form from './Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Form />
      <Clicker message="HI!!!" buttonText="please Click Me"/>
    </>
  )
}

export default App
