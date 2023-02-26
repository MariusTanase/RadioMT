import React from 'react'
import './Player.css'

const Player = () => {
  return (
    <div className='player__container'>
        <div className='player__container-title'>
            <h1>MT Radio</h1>
        </div>
        <div className='player__container-player'>
            <audio controls>
                <source src="https://streaming.radio.co/sd1b1b1b1b/listen" type="audio/mpeg" />
            </audio>
        </div>

    </div>
  )
}

export default Player