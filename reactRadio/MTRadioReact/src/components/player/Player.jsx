import React, { useState, useEffect, useRef } from 'react';
import './Player.css'

const Player = () => {


    const [title, setTitle] = useState('Title')
    const [artist, setArtist] = useState('Artist')
    const [image, setImage] = useState('https://via.placeholder.com/150')
    
    const audioRef = useRef(null)

    const playAudio = () => {
        audioRef.current.play()
    }

    const pauseAudio = () => {
        audioRef.current.pause()
    }

    const playPauseAudio = () => {
        if (audioRef.current.paused) {
            playAudio()
        } else {
            pauseAudio()
        }
    }

    const randomRadio = () => {
        const radios = [
            {
                title: 'Radio 1',
                artist: 'Artist 1',
                image: 'https://via.placeholder.com/150',
                url: 'https://streaming.radio.co/sd0f1b1b5d/listen'
            },
            {
                title: 'Radio 2',
                artist: 'Artist 2',
                image: 'https://via.placeholder.com/150',
                url: 'https://streaming.radio.co/sd0f1b1b5d/listen'
            },
            {
                title: 'Radio 3',
                artist: 'Artist 3',
                image: 'https://via.placeholder.com/150',
                url: 'https://streaming.radio.co/sd0f1b1b5d/listen'
            }
        ]
        const randomRadio = radios[Math.floor(Math.random() * radios.length)]
        setTitle(randomRadio.title)
        setArtist(randomRadio.artist)
        setImage(randomRadio.image)
        audioRef.current.src = randomRadio.url
        playAudio()
      }

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
            <button className="control-button shuffle" onClick={() => { 
              randomRadio()
            }}>
                <i className="fas fa-random"></i>
            </button>
            <button className="control-button previous">
                <i className="fas fa-step-backward"></i>
            </button>
            <button className="control-button play">
                <i className="fas fa-play"></i>
            </button>
            <button className="control-button next">
                <i className="fas fa-step-forward"></i>
            </button>
            <button className="control-button repeat">
                <i className="fas fa-redo"></i>
            </button>
        </div>
    </div>
  )
}

export default Player