import React from 'react'
import Background from '../components/background/background'
import Footer from '../components/footer/Footer'
import Player from '../components/player/Player'
import RadioList from '../components/radiosList/RadioList'
import Settings from '../components/settings/Settings'
import { radios } from '../radios'

const Main = () => {
  return (
    <>
        <Background/>
        <Player list={radios}/>
        <RadioList />
        <Settings />
        <Footer />
    </>
  )
}

export default Main