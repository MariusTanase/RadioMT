import React from 'react'
import Player from '../player/Player'
import { radios } from '../../radios'
import './RadioList.css'

const RadioList = () => {
  return (
    <div className='radios-container'>
      {/* create a widget container that will contain all the radios from {radios} */}
        <ul className='radios-list'>
          {/* map through the radios list and create a list item for each radio */}
          {radios.map((radio) => {
            const { id, title, genre, image } = radio
            return (
              <li key={id} className='radio-element'>
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