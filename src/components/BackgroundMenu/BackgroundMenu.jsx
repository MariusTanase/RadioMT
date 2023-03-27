import React from 'react'
import './BackgroundMenu.css'
import { generateImage } from '../../utils/unsplashBackgroundGeneration'

const BackgroundMenu = () => {

    const handleBackgroundChange = (backgroundTheme) => {
        generateImage(backgroundTheme);
    };


  return (
        <div className='background-container'>
            <h5 className='background-category__title'>
            Select Background
            </h5>
            <div className='background-container__items'>
                <div className='background-item' onClick={() => handleBackgroundChange('mountain')}>
                        <div className='background-item__name' >
                            Mountain
                        </div>
                    </div>
                <div className='background-item' onClick={() => handleBackgroundChange('beach')}>
                        <div className='background-item__name' >
                            Beach
                        </div>
                </div>
                <div className='background-item' onClick={() => handleBackgroundChange('sky')}>
                        <div className='background-item__name' >
                            Sky
                        </div>
                </div>
                <div className='background-item' onClick={() => handleBackgroundChange('forest')}>
                        <div className='background-item__name' >
                            Forest
                        </div>
                </div>
            </div>
        </div>
    )
}

export default BackgroundMenu