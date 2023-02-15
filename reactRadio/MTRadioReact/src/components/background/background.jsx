import React from 'react'
import './background.css';


const Background = () => {

    // change the background image to a random image from the images folder
    // all the iamges are in assets/images
    // the images are in an array
    // the array is in the background module

    const imagesArray = [
        require('../../assets/images/bgImage1.jpg'),
        require('../../assets/images/bgImage2.jpg'),
        require('../../assets/images/bgImage3.jpg'),
    ]
    const randomImage = imagesArray[Math.floor(Math.random() * imagesArray.length)]
    const backgroundStyle = {
        backgroundImage: `url(${randomImage})`
    }
    
    // the image will be changed to background class
    // the background class is in background.module.css
    // the background class is in the div tag

    document.body.style.backgroundImage = `url(${randomImage})`


  return (
    <div className='background'></div>
  )
}

export default Background