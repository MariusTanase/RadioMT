import React from 'react'
import './ThemeMenu.css'

const ThemeMenu = ({category, content}) => {

    const randomKey = () => {
        return Math.random() * 999999
    }

  return (
        <div className='theme-container'>
            <h5 className='theme-category'>
                {category}
            </h5>
            <div className='theme-container__items'>
                {
                    Object.keys(content).map((item) => {
                        return (     
                                <button key={randomKey()} className='theme-item'>{item}</button>
                        )
                    })
                }
            </div>
        </div>
    )
}

export {ThemeMenu}