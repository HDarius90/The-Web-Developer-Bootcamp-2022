import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Clicker from './Clicker'
import Clicker2 from './Clicker2'
import Form from './Form'
import Toggler from './Toggler'
import ToggleCounter from './ToggleCounter'
import ColorBoxGrid from './ColorBoxGrid'

function App() {
  const [count, setCount] = useState(0)

  const colors = [
    "#E53935",
    "#E91E63",
    "#9C27B0",
    "#673AB7",
    "#3F51B5",
    "#2196F3",
    "#03A9F4",
    "#00BCD4",
    "#009688",
    "#4CAF50",
    "#8BC34A",
    "#CDDC39",
    "#FFEB3B",
    "#FFC107",
    "#FF9800",
    "#FF5722",
  ];

  return (
    <>
      {/* <Form />
      <Clicker message="HI!!!" buttonText="please Click Me"/> 
      <Clicker2 />
      <ToggleCounter />*/}
      <ColorBoxGrid colors={colors} />
    </>
  )
}

export default App
