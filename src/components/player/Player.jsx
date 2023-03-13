import React, { useState, useEffect, useRef } from 'react';
import './Player.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShuffle, faBackward, faForward, faPlay, faPause } from '@fortawesome/free-solid-svg-icons'

const Player = ({list}) => {


    const [title, setTitle] = useState('Title')
    const [artist, setArtist] = useState('Artist')
    const [image, setImage] = useState('https://via.placeholder.com/150')
    const [radioID, setRadioID] = useState(0)
    const [audioIsRunning, setAudioIsRunning] = useState(false)
    const [volume, setVolume] = useState(0.1)

    console.log()


    const audioRef = useRef(null)

    const playAudio = () => {
        audioRef.current.play()
        setAudioIsRunning(true)
    }

    const pauseAudio = () => {
        audioRef.current.pause()
        setAudioIsRunning(false)
    }

    const randomRadio = () => {

        const randomRadio = list[Math.floor(Math.random() * list.length)]
        setTitle(randomRadio.title)
        setArtist(randomRadio.genre)
        setImage(randomRadio.image)
        setRadioID(randomRadio.id)
        audioRef.current.src = randomRadio.url
        playAudio()
      }

    const volumeControl = (value) => {
        setVolume(value);
        // update the UI to reflect the new volume
        audioRef.current.volume = volume
    }

    const previousRadio = () => {
        if(radioID === 1) {
            setRadioID(list.length)
        } else {
            setRadioID(radioID - 1)
        }
        setTitle(list[radioID - 1].title)
        setArtist(list[radioID - 1].artist)
        setImage(list[radioID - 1].image)
        audioRef.current.src = list[radioID - 1].url
        playAudio()

    }

    const nextRadio = () => {
        if(radioID === list.length) {
            setRadioID(1)
        } else {
            setRadioID(radioID + 1)
        }
        setTitle(list[radioID - 1].title)
        setArtist(list[radioID - 1].artist)
        setImage(list[radioID - 1].image)
        audioRef.current.src = list[radioID - 1].url
        playAudio()

    }

    useEffect(() => {
        volumeControl(0.1)
        // set a random radio on load
        randomRadio()
        playAudio()
    }, [])

  return (
    <div className="audio-player">
        <div className="track-info">
            <img
            className="artwork"
            src={image}
            alt={`track artwork for ${title} by ${artist}`}
            />
            <h2 className="title">{title}</h2>
            <h3 className="artist">Genre: {artist}</h3>
        </div>
        <div className="controls">
            <div className='controls-buttons'>

                <button className="control-button previous" onClick={() =>{
                    previousRadio()
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
                    nextRadio()
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