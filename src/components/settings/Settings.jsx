import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React from 'react'
import './Settings.css'
import { faGear } from '@fortawesome/free-solid-svg-icons'



const Settings = () => {

  const handleMenu = () => {
    const button = document.querySelector('.settings-button')
    button.classList.add('hidden')
  
    const settingsMenu = document.querySelector('.settings-menu')
    settingsMenu.classList.remove('hidden')
  
    const closeButton = document.querySelector('.settings-button__close')
    closeButton.classList.remove('hidden')
  }
  
  const closeMenu = () => {
    const closeButton = document.querySelector('.settings-button__close')
    closeButton.classList.toggle('hidden')
  
    const settingsMenu = document.querySelector('.settings-menu')
    settingsMenu.classList.add('hidden')
  
    const button = document.querySelector('.settings-button')
    button.classList.remove('hidden')
  }


  return (
    <div className='settings-container'>
        {/* button with fa setting that will open and close as a menu */}
        {/* menu with the following options: */}
        {/* - change background */}
        {/* - change theme */}
        {/* - change language */}
        {/* - change volume */}
        {/* - change player size */}
        {/* - change player position */}
        {/* - change player color */}
        {/* - change player opacity */}
        {/* - change player animation */}
        {/* - change player animation speed */}
        {/* - change player animation direction */}
        {/* - change player animation opacity */}
        {/* - change player animation sync */}
        <button className='settings-button' onClick={
            () => {
                handleMenu()
            }
        }>       
            <FontAwesomeIcon icon={faGear} className='spin'/>
        </button>
        <div className='settings-menu hidden'>
            <div className='settings-menu-item'>
                <p>Change Background</p>
            </div>
            <div className='settings-menu-item'>
                <p>Change Theme</p>
                <div className='settings-menu__item-options'>
                    <div className='settings-menu-item-option'>
                        <p>Dark</p>
                        <p>Crimson</p>
                        <p>Light</p>
                    </div>
                </div>
            </div>

            <button className='settings-button__close' onClick={
            () => {
              closeMenu()
            }}>Close</button>
      </div>
    </div>
  )
}

export default Settings