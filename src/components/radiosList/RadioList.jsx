import React from 'react'
import { radios } from '../../radios'
import { setRadio, setRadioName, startRadio, setRadioGenre, setRadioImage } from '../../utils/radio'
import './RadioList.css'

const RadioList = () => {
  const changeRadio = (radio) => {
    // change the source of the audio player
    const {url, title, genre, image} = radio

    setRadio(url)
    setRadioName(title)
    setRadioGenre(genre)
    setRadioImage(image, title)
    startRadio()
  }


  return (
    <div className='radios-container'>
      {/* create a widget container that will contain all the radios from {radios} */}
        <ul className='radios-list'>
          {/* map through the radios list and create a list item for each radio */}
          {radios.map((radio) => {
            // extract the id and title to generate the elements of the 'buttons'
            const { id, title} = radio
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