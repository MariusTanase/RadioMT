import { useState } from 'react'
import Background from '../components/background/background'
import Footer from '../components/footer/Footer'
import Player from '../components/player/Player'
import RadioList from '../components/radiosList/RadioList'
import Settings from '../components/settings/Settings'
// @ts-ignore
import { radios } from '../radios'

const Main = () => {
  let [showUI, setShowUI] = useState(false);

  let toggleUI = () => {
    setShowUI(!showUI)
  }

  return (
    <>
      <Background />
      <Player list={radios} toggleUI={showUI} />
      <RadioList toggleUI={showUI} />
      <Settings toggleUI={toggleUI} />
      <Footer />
    </>
  )
}

export default Main