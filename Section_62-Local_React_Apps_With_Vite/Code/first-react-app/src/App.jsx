import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Chicken from './Chicken'
import Greeting from './Greeting'
import Die from './Die'
import ListPicker from './ListPicker'
import './App.css'
import DoubleDice from './DoubleDice'
import Heading from './Heading'
import ColorList from './ColorList'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Heading color='magenta' text="WELCOME!" />
      <Heading color='blue' text="WELCOME!" />
      {/* <Greeting person="Dari" from="Zenda" />
      <Greeting person="Dari" />
      <Greeting from="Zenda" />
      <Die numSides={20} />
      <Die />
      <Die numSides={10} />
      <ListPicker values={[1, 2, 3]} />
      <ListPicker values={['a', 'b', 'c']} /> */}
      <DoubleDice />
      <ColorList colors={["red", "pink", "purple", "blue"]} />
      <ColorList colors={["orange", "teal", "yellow", "green"]} />
    </>
  )
}

export default App
