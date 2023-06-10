import React from 'react'
import './BackgroundMenu.css'
// @ts-ignore 
import { generateImage } from '@/utils/unsplashBackgroundGeneration'

const BackgroundMenu = () => {

    const handleBackgroundChange = (backgroundTheme: string) => {
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
                <div className='background-item' onClick={() => handleBackgroundChange('cozy')}>
                    <div className='background-item__name' >
                        Cozy
                    </div>
                </div>
                <div className='background-item' onClick={() => handleBackgroundChange('japan')}>
                    <div className='background-item__name' >
                        Japan
                    </div>
                </div>
                <div className='background-item' onClick={() => handleBackgroundChange('cat')}>
                    <div className='background-item__name' >
                        Cat
                    </div>
                </div>
                <div className='background-item' onClick={() => handleBackgroundChange('dog')}>
                    <div className='background-item__name' >
                        Dog
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BackgroundMenu