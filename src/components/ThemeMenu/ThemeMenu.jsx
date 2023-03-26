import React from 'react'
import './ThemeMenu.css'

const ThemeMenu = () => {


  return (
        <div className='theme-container'>
            <h5 className='theme-category__title'>
                Theme
            </h5>
            <div className='theme-container__items'>
                <div className='theme-item'>
                    <div className='theme-item__name'>
                        Dark
                    </div>
                    </div>
                <div className='theme-item'>
                    <div className='theme-item__name'>
                        Crimson
                    </div>
                </div>
                <div className='theme-item'>
                    <div className='theme-item__name'>
                        Light
                        </div>
                    </div>
            </div>
        </div>
    )
}

export {ThemeMenu}