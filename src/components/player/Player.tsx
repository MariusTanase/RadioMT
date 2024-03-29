import React, { useState, useEffect, useRef } from 'react';
import './Player.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShuffle, faForward, faBackward, faPlay, faPause } from '@fortawesome/free-solid-svg-icons'
// @ts-ignore
import { startRadio, stopRadio, setRadio, setRadioGenre, setRadioImage, setRadioName, setRadioVolume } from '@/utils/radio'


const Player = ({ list, toggleUI }: any) => {
  const [state, setState] = useState({
    radioId: 0,
    audioIsRunning: false,
    volume: 0.1,
  });

  const audioRef = useRef(null);

  // if a key is pressed, check if it is a spacebar key and if the audio is running or not and play or pause the audio
  useEffect(() => {
    const handleKeyDown = (event: any) => {
      event.code === 'Space' && state.audioIsRunning ? pauseAudio() : playAudio();
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [state.audioIsRunning]);


  const playAudio = () => {
    startRadio();
    setState((prevState) => ({ ...prevState, audioIsRunning: true }));
  };

  const pauseAudio = () => {
    stopRadio();
    setState((prevState) => ({ ...prevState, audioIsRunning: false }));
  };

  const changeRadio = (id: number) => {
    const radio = list[id];
    setRadio(radio.url);
    setRadioName(radio.title);
    setRadioGenre(radio.artist);
    setRadioImage(radio.image, radio.title, radio.genre);
  };

  const playRadio = (id: number) => {
    changeRadio(id);
    playAudio();
    setState((prevState) => ({ ...prevState, radioId: id }));
  };

  const randomRadio = () => {
    const randomId = Math.floor(Math.random() * list.length);
    playRadio(randomId);
  };

  const previousRadio = () => {
    let { radioId } = state;
    radioId = radioId === 0 ? list.length - 1 : radioId - 1;
    playRadio(radioId);
  };

  const nextRadio = () => {
    let { radioId } = state;
    radioId = radioId === list.length - 1 ? 0 : radioId + 1;
    playRadio(radioId);
  };

  const volumeControl = (value: number) => {
    setRadioVolume(value);
    setState((prevState) => ({ ...prevState, volume: value }));
  };

  useEffect(() => {
    volumeControl(0.1);
    randomRadio();
  }, []);

  const playerContainer = useRef(null);

  useEffect(() => {
    // @ts-ignore
    toggleUI ? playerContainer.current.classList.add('hidden') : playerContainer.current.classList.remove('hidden');
  }, [toggleUI])



  return (
    <div ref={playerContainer} className="audio-player">
      <div className="track-info">
        <img
          className="artwork"
        />
        <h2 className="title"></h2>
        <h3 className="genre"></h3>
      </div>
      <div className="controls">
        <div className='controls-buttons'>


          <button className="control-button previous" onClick={() => {
            previousRadio()
          }}>
            <FontAwesomeIcon icon={faBackward} />
          </button>

          {/* if audio is paused, show playbutton, else if audio is running show stop button */}
          {state.audioIsRunning ? (
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
            className='volume-slider'
            // @ts-ignore
            value={audioRef.current ? audioRef.current.volume : 0}
            onChange={
              (e) => volumeControl(Number(e.target.value))
            } />
        </div>
      </div>

      <audio ref={audioRef} src={list[2].url} autoPlay={true} />

    </div>
  )
}

export default Player