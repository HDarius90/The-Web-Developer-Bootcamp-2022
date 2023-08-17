import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Slot from './Slot'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Slot val1="🍒" val2="🍒" val3="🍒" />
      <Slot val1="🍒" val2="🍌" val3="🍒" />
    </>
  )
}

export default App
