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
        <div className='background-container'>
            <h5 className='background-category__title'>
            <p>Current background: {background.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())
                // first letter of background to uppercase
                
            
            }</p>
            </h5>
            <div className='background-container__items'>
                <div className='background-item' onClick={() => handlebackgroundChange('dark')}>
                        <div className='background-item__name' >
                            Dark
                        </div>
                    </div>
                <div className='background-item' onClick={() => handlebackgroundChange('crimson')}>
                        <div className='background-item__name' >
                            Crimson
                        </div>
                </div>
                <div className='background-item' onClick={() => handlebackgroundChange('light')}>
                        <div className='background-item__name' >
                            Light
                        </div>
                </div>
                <div className='background-item' onClick={() => handlebackgroundChange('blue')}>
                        <div className='background-item__name' >
                            Blue
                        </div>
                </div>
            </div>
        </div>
    )
}

export {ThemeMenu}