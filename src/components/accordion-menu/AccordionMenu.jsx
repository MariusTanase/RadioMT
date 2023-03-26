import React from 'react'
import './AccordionMenu.css'

const AccordionMenu = ({category, content}) => {
  return (
        <div>
            <label htmlFor='state'>
                <h5 className='menu-category'>
                    Button
                </h5>
            </label>
            <input type='checkbox' id='state' hidden/>
            <div className='content'>
                <div className='inner'>
                    <p>Content</p>
                    <p>COntent</p>
                    <p>Content</p>
                </div>
            </div>
        </div>
    )
}

export {AccordionMenu}