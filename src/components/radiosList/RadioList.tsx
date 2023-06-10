import React, { useEffect, useRef } from 'react'
// @ts-ignore: 'radios' is declared but its value is never read.
import { radios } from '@/radios'
// @ts-ignore: 'setRadio, setRadioName, startRadio, setRadioGenre, setRadioImage' is declared but its value is never read.
import { setRadio, setRadioName, startRadio, setRadioGenre, setRadioImage } from '@/utils/radio'
import './RadioList.css'
type toggleType = {
  toggleUI: boolean
}

interface RadioObject {
  id: number,
  title: string,
  genre: string,
  image: string,
  url: string
}

const RadioList = ({ toggleUI }: toggleType) => {

  const changeRadio = (radio: any) => {
    // change the source of the audio player
    const { url, title, genre, image } = radio

    setRadio(url)
    setRadioName(title)
    setRadioGenre(genre)
    setRadioImage(image, title)
    startRadio()
  }

  const radioPlaylistContainer = useRef(null);

  useEffect(() => {
    // @ts-ignore: 'radioPlaylistContainer.current' is possibly 'null'
    toggleUI ? radioPlaylistContainer?.current.classList.add('hidden') : radioPlaylistContainer?.current.classList.remove('hidden');
  }, [toggleUI])


  return (
    <div ref={radioPlaylistContainer} className='radios-container'>
      {/* create a widget container that will contain all the radios from {radios} */}
      <ul className='radios-list'>
        {/* map through the radios list and create a list item for each radio */}
        {radios.map((radio: RadioObject) => {
          // extract the id and title to generate the elements of the 'buttons'
          const { id, title } = radio
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