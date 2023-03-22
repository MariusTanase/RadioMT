import React, { useState, useEffect, useRef } from 'react';
import './Player.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShuffle, faForward, faBackward, faPlay, faPause } from '@fortawesome/free-solid-svg-icons'
import { startRadio, stopRadio, setArtist, setRadio, setGenre, setRadioImage,setRadioName, setRadioVolume } from '../../utils/radio'

const Player = ({list}) => {
    const [volume, setVolume] = useState(0.1)
    const [radioId, setRadioID] = useState(0)
    const [audioIsRunning, setAudioIsRunning] = useState(false)

    const audioRef = useRef(null)

    const playAudio = () => {
        startRadio()
        setAudioIsRunning(true)
    }

    const pauseAudio = () => {
        stopRadio()
        setAudioIsRunning(false)
    }

    const randomRadio = () => {

        const randomRadio = list[Math.floor(Math.random() * list.length)]
        setRadioName(randomRadio.title)
        setArtist(randomRadio.artist)
        setRadioImage(randomRadio.image, randomRadio.title, randomRadio.genre)
        setRadioID(randomRadio.id)
        setRadio(randomRadio.url)

        setAudioIsRunning(true)
        playAudio()
      }

    const volumeControl = (value) => {
        setVolume(value);
        // update the UI to reflect the new volume
        audioRef.current.volume = volume
    }

    const previousRadio = (id) => {

    }
 

    const nextRadio = (id) => {

    }

    useEffect(() => {
        setRadioVolume(0.1)
        // set a random radio on load
        randomRadio()
    }, [])

  return (
    <div className="audio-player">
        <div className="track-info">
            <img
            className="artwork"
            />
            <h2 className="title">""</h2>
            <h3 className="artist">Genre: </h3>
        </div>
        <div className="controls">
            <div className='controls-buttons'>


                <button className="control-button previous" onClick={() =>{
                    previousRadio(radioId)
                }}>
                    <FontAwesomeIcon icon={faBackward} />
                </button>

                {/* if audio is paused, show playbutton, else if audio is running show stop button */}
                {audioIsRunning ? (
                    <button className="control-button play" onClick={() => {
                        pauseAudio()
                    }}>
                    <FontAwesomeIcon icon={faPause} />
                    </button>
                ) : (
                    <button className="control-button play" onClick={() => {
                        playAudio()
                    }}>
                    <FontAwesomeIcon icon={faPlay} />
                    </button>
                )}

                <button className="control-button next" onClick={() => {
                    nextRadio(radioId)
                }}>
                    <FontAwesomeIcon icon={faForward} />
                </button>
            </div>
            
            <div className="volume-control">
            <button className="control-button shuffle" onClick={() => { 
                randomRadio()
                }}>
                <FontAwesomeIcon icon={faShuffle} />
                </button>
                {/* value has to change when slide */}
                <input type="range" min="0" max="1" step="0.01"
                value={audioRef.current ? audioRef.current.volume : 0}
                onLoad={() => volumeControl(0.2)}
                onChange={
                (e) => volumeControl(e.target.value)
                }/>
            </div>
        </div>

        <audio ref={audioRef} src={list[2].url} autoPlay={true}/>

    </div>
  )
}

export default Player