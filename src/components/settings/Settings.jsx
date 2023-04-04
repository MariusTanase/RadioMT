import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React from 'react'
import './Settings.css'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { ThemeMenu } from '@/components/ThemeMenu/ThemeMenu'
import BackgroundMenu from '@/components/BackgroundMenu/BackgroundMenu'



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

  let themeContent = {
    'Light': 'Light',
    'Dark': 'Dark',
    'Crimson': 'Crimson',
  }

  return (
    <div className='settings-container'>
        <button className='settings-button' onClick={
            () => {
                handleMenu()
            }
        }>       
            <FontAwesomeIcon icon={faGear} className='spin'/>
        </button>
        <div className='settings-menu hidden'>
          <div className='settings-menu-wrapper'>
          <ThemeMenu category={'Theme'} content={themeContent}/>
          <BackgroundMenu />
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