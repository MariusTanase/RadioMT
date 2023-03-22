import React from 'react'
import {faBackward} from '@fortawesome/free-solid-svg-icons'
import setArtist from '../../lib/setArtist'

const BackButton = ({id}) => {
    const previousRadio = (id) => {
        if(id === 1) {
            setRadioID(list.length)
        } else {
            setRadioID(id - 1)
        }
        setTitle(list[id - 1].title)
        setArtist(list[id - 1].artist)
        setImage(list[id - 1].image)
        audioRef.current.src = list[id - 1].url
        playAudio()
}



  return (
    <button className="control-button previous" onClick={() =>{
        previousRadio(id)
    }}>
    <FontAwesomeIcon icon={faBackward} />
    </button>
  )
}

export default BackButton