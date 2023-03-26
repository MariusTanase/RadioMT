import React, { useEffect, useState } from 'react'
import './ThemeMenu.css'

const ThemeMenu = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'blue');

    const handleThemeChange = (newTheme) => {
      localStorage.setItem('theme', newTheme);
      setTheme(newTheme);
    };
  
    useEffect(() => {
        // change the window prefered theme to theme
        window.matchMedia(`(prefers-color-scheme: ${theme})`)

    }, [theme]);


  return (
        <div className='theme-container'>
            <h5 className='theme-category__title'>
            <p>Current Theme: {theme}</p>
            </h5>
            <div className='theme-container__items'>
                <div className='theme-item'>
                        <div className='theme-item__name' onClick={() => handleThemeChange('dark')}>
                            Dark
                        </div>
                    </div>
                <div className='theme-item'>
                        <div className='theme-item__name' onClick={() => handleThemeChange('crimson')}>
                            Crimson
                        </div>
                </div>
                <div className='theme-item'>
                        <div className='theme-item__name' onClick={() => handleThemeChange('light')}>
                            Light
                        </div>
                </div>
                <div className='theme-item'>
                        <div className='theme-item__name' onClick={() => handleThemeChange('blue')}>
                            Blue
                        </div>
                </div>
            </div>
        </div>
    )
}

export {ThemeMenu}