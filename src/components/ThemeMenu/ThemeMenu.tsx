import React, { useEffect, useState } from 'react'
import './ThemeMenu.css'

// @ts-ignore
const ThemeMenu = ({ content }) => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') ?? 'blue');
    // @ts-ignore
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
                <p>Select Theme</p>
            </h5>
            <div className='theme-container__items'>
                {
                    Object.keys(content).map((key) => {
                        return (
                            <div key={key} className='theme-item' onClick={() => handleThemeChange(key.toLowerCase())}>
                                <span className='theme-item__name' >
                                    {key}
                                </span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export { ThemeMenu }