import React, { useEffect } from 'react'
import './background.css';


const Background = () => {

    // change the background image to a random image from the images folder
    // all the iamges are in assets/images
    // the images are in an array
    // the array is in the background module

    console.log('background component')

    const imagesArray = [
        '../../assets/images/bgImage1.jpg',
        '../../assets/images/bgImage2.jpg',
        '../../assets/images/bgImage3.jpg',
    ]
    const randomImage = imagesArray[Math.floor(Math.random() * imagesArray.length)]

    // the image will be changed to background class
    // the background class is in background.module.css
    // the background class is in the div tag


    useEffect(() => {
        let background = document.querySelector('.background');
        background.style.backgroundImage = `url(${randomImage})`;
    }, [])

  return (
    <div className='background'>

        <h1>This is BG</h1>
    </div>
  )
}

export default Background