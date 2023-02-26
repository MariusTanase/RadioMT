import Background from "./components/background/background"
import Player from "./components/player/Player"

function App() {

  return (
    <div className="App">
      <Background settingsInterval={60000} />
      <Player />
    </div>
  )
}

export default App
