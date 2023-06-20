import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
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
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

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