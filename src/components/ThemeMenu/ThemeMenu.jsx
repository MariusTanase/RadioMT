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
        document.body.setAttribute('data-theme', theme);

    }, [theme]);


  return (
        <div className='theme-container'>
            <h5 className='theme-category__title'>
            <p>Current Theme: {theme.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())
                // first letter of theme to uppercase
                
            
            }</p>
            </h5>
            <div className='theme-container__items'>
                <div className='theme-item' onClick={() => handleThemeChange('dark')}>
                        <div className='theme-item__name' >
                            Dark
                        </div>
                    </div>
                <div className='theme-item' onClick={() => handleThemeChange('crimson')}>
                        <div className='theme-item__name' >
                            Crimson
                        </div>
                </div>
                <div className='theme-item' onClick={() => handleThemeChange('light')}>
                        <div className='theme-item__name' >
                            Light
                        </div>
                </div>
                <div className='theme-item' onClick={() => handleThemeChange('blue')}>
                        <div className='theme-item__name' >
                            Blue
                        </div>
                </div>
            </div>
        </div>
    )
}

export {ThemeMenu}