import React, { useState, useEffect, useRef } from 'react';
import './Player.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShuffle, faBackward, faForward, faPlay, faPause } from '@fortawesome/free-solid-svg-icons'

const Player = () => {


    const [title, setTitle] = useState('Title')
    const [artist, setArtist] = useState('Artist')
    const [image, setImage] = useState('https://via.placeholder.com/150')

    const [audioIsRunning, setAudioIsRunning] = useState(false)

    const radios = [
        {
            title: 'Lofi',
            artist: 'Radio',
            image: 'https://static.mytuner.mobi/media/tvos_radios/GHmdJJkVyq.png',
            url: 'https://streaming.radio.co/sd0f1b1b5d/listen'
        },
        {
            title: 'Classic',
            artist: 'FM',
            image: 'https://static.mytuner.mobi/media/tvos_radios/LcaRwmxgF9.png"',
            url: 'https://streaming.radio.co/sd0f1b1b5d/listen'
        },
        {
            title: 'Heart',
            artist: 'Dance',
            image: 'https://static.mytuner.mobi/media/tvos_radios/mmvGSBqcQB.png',
            url: 'https://media-ssl.musicradio.com/HeartDance'
        }
    ]

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

        const randomRadio = radios[Math.floor(Math.random() * radios.length)]
        setTitle(randomRadio.title)
        setArtist(randomRadio.artist)
        setImage(randomRadio.image)
        audioRef.current.src = randomRadio.url
        playAudio()
      }

    const volumeControl = (value) => {
        audioRef.current.volume = value
    }

    useEffect(() => {
        volumeControl(0.1)

        return () => {
            pauseAudio()
            setAudioIsRunning(false)
        }
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
            <h3 className="artist">{artist}</h3>
        </div>
        <div className="controls">
            <div className='controls-buttons'>
            <button className="control-button shuffle" onClick={() => { 
              randomRadio()
            }}>
               <FontAwesomeIcon icon={faShuffle} />
            </button>
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

            <button className="control-button next">
                <FontAwesomeIcon icon={faForward} />
            </button>
            </div>
            <div className="volume-control">
            <input type="range" min="0" max="1" step="0.01" 
            onLoad={() => volumeControl(0.2)}
            onChange={
            (e) => volumeControl(e.target.value)
        }/>
        </div>
        </div>

        <audio ref={audioRef} src={radios[0].url} autoPlay={true}/>

    </div>
  )
}

export default Player