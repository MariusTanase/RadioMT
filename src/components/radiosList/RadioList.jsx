import React from 'react'
import { radios } from '../../radios'
import './RadioList.css'

const RadioList = () => {
  const changeRadio = (radio) => {
    // change the source of the audio player
    const {url, title, genre, image} = radio
    // console.log(element);
    const audioPlayer = document.querySelector('audio')
    const playerTitle = document.querySelector('.title')
    const genreTitle = document.querySelector('.artist')
    const playerImage = document.querySelector('.artwork')
    
    playerTitle.innerHTML = title
    genreTitle.innerHTML = genre
    playerImage.src = image

    audioPlayer.src = url;

    audioPlayer.play()
  }


  return (
    <div className='radios-container'>
      {/* create a widget container that will contain all the radios from {radios} */}
        <ul className='radios-list'>
          {/* map through the radios list and create a list item for each radio */}
          {radios.map((radio) => {
            const { id, title, url, genre} = radio
            return (
              <li key={id} className='radio-element' onClick={() => changeRadio(radio)}>
                <div className='radio-image'>
                  <img src={radio.image} alt={title} />
                </div>
                <div className='radio-info'>
                  <h4>{title}</h4>
                </div>
              </li>
            )
          })
        }
        </ul>
      </div>
  )
}

export default RadioList