import Background from "./components/background/background"
import Player from "./components/player/Player"
import Intro from "./components/intro/intro"
import RadioList from "./components/radiosList/RadioList"

function App() {

  return (
    <div className="App">
      {/* <Intro /> */}
      <Background/>
      <RadioList />
    </div>
  )
}

export default App
