import React, { useEffect } from 'react'
import './ThemeMenu.css'

const ThemeMenu = () => {
    // save in localstorage the theme selected
    const handleTheme = (theme) => {
        localStorage.setItem('theme', theme)

        // set the theme in media prefer color scheme
        window.matchMedia(`(prefers-color-scheme: ${theme})`);
    }

    useEffect(() => {
        // get the theme saved in localstorage
        const theme = localStorage.getItem('theme')
        // if there is no theme saved, set the default theme
        if (!theme) {
            localStorage.setItem('theme', 'Blue')

            window.matchMedia('(prefers-color-scheme: Blue)');
        } else {
            // if there is a theme saved, set the theme
            window.matchMedia(`(prefers-color-scheme: ${theme})`);
        }
    }, [])


  return (
        <div className='theme-container'>
            <h5 className='theme-category__title'>
                Theme
            </h5>
            <div className='theme-container__items'>
                <div className='theme-item'>
                        <div className='theme-item__name' onClick={() => handleTheme('Dark')}>
                            Dark
                        </div>
                    </div>
                <div className='theme-item'>
                        <div className='theme-item__name' onClick={() => handleTheme('Crimson')}>
                            Crimson
                        </div>
                </div>
                <div className='theme-item'>
                        <div className='theme-item__name' onClick={() => handleTheme('Light')}>
                            Light
                        </div>
                </div>
                <div className='theme-item'>
                        <div className='theme-item__name' onClick={() => handleTheme('Blue')}>
                            Blue
                        </div>
                </div>
            </div>
        </div>
    )
}

export {ThemeMenu}