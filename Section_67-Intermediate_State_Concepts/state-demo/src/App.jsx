import './App.css'
import Counter from './Counter'
import Dumbo from './Dumbo'
import ScoreKeeper from './ScooreKeeper'
import EmojiClicker from './EmojiClicker'

function App() {


  return (
    <>
      {/* <Counter/> 
      <Dumbo />
      
      <EmojiClicker />*/}
      <ScoreKeeper numPlayers={3} target={5} />
    </>
  )
}

export default App
