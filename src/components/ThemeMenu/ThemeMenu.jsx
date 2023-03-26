import React from 'react'
import './ThemeMenu.css'

const ThemeMenu = ({category, content}) => {

    const randomKey = () => {
        return Math.random() * 999999
    }

  return (
        <div>
            <label htmlFor='state'>
                <h5 className='menu-category'>
                    {category}
                </h5>
            </label>
            <input type='checkbox' id='state' hidden/>
            <div className='content'>
                <div className='inner'>
                    {
                        Object.keys(content).map((item) => {
                            return (
                                <div key={randomKey()}>
                                    <h6 className='menu-item'>{item}</h6>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export {ThemeMenu}