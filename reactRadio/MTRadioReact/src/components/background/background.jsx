import React, { useEffect, useRef } from 'react'
import './background.css';
import image1 from '../../assets/images/bgImage1.jpg'
import image2 from '../../assets/images/bgImage2.jpg'
import image3 from '../../assets/images/bgImage3.jpg'

const Background = ({settingsInterval}) => {

    const background = useRef(null);
    const title = useRef(null);

    const imagesArray = [
        image1, image2, image3
    ]


    useEffect(() => {

       const interval = setInterval(() => {
            const randomImage = imagesArray[Math.floor(Math.random() * imagesArray.length)]
            background.current.style.backgroundImage = `url(${randomImage})`
        }, settingsInterval)

        return () => {
            clearInterval(interval)
        }
    }, [])

  return (
    <div ref={background} className='background'>

        <h1 ref={title}>This is BG</h1>
    </div>
  )
}

export default Background