import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useRef } from 'react'
import './Settings.css'
import { faGear } from '@fortawesome/free-solid-svg-icons'
// @ts-ignore
import { ThemeMenu } from '@/components/ThemeMenu/ThemeMenu'
// @ts-ignore

import BackgroundMenu from '@/components/BackgroundMenu/BackgroundMenu'


type SettingsProps = {
  toggleUI: () => void
}

const themeContent = {
  Light: 'Light',
  Dark: 'Dark',
  Crimson: 'Crimson',
  Blue: 'Blue',
};

const Settings = ({ toggleUI }: SettingsProps) => {


  const settingsContainer = document.querySelector('.settings-container')

  const handleMenu = () => {
    // @ts-ignore
    settingsContainer.backgroundColor = 'red';
    const button = document.querySelector('.settings-button')
    // @ts-ignore
    button.classList.add('hidden')

    const settingsMenu = document.querySelector('.settings-menu')
    // @ts-ignore
    settingsMenu.classList.add('open')


    const closeButton = document.querySelector('.settings-button__close')
    // @ts-ignore
    closeButton.classList.remove('hidden')
    // @ts-ignore


  }

  const closeMenu = () => {

    const closeButton = document.querySelector('.settings-button__close')
    // @ts-ignore
    closeButton.classList.toggle('hidden')
    // @ts-ignore
    const settingsMenu = document.querySelector('.settings-menu')
    // @ts-ignore
    settingsMenu.classList.remove('open')

    const button = document.querySelector('.settings-button')
    // @ts-ignore
    button.classList.remove('hidden')
  }

  return (
    <div className='settings-container'>
      <button className='settings-button' onClick={
        () => {
          handleMenu()
        }
      }>
        <FontAwesomeIcon icon={faGear} className='spin' />
      </button>
      <div className='settings-menu'>
        <div className='settings-menu-wrapper'>
          <ThemeMenu category={'Theme'} content={themeContent} />
          <BackgroundMenu />
        </div>

        <div>
          <button className='settings-button__close' onClick={toggleUI}>HidePlayer</button>
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