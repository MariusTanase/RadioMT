import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import './Settings.css'
import { faGear } from '@fortawesome/free-solid-svg-icons'
// @ts-ignore
import { ThemeMenu } from '@/components/ThemeMenu/ThemeMenu'
// @ts-ignore
import BackgroundMenu from '@/components/BackgroundMenu/BackgroundMenu'
import CustomButton from '../reusableComponents/CustomButton'
import { SettingsProps } from '../../types/types'

const themeContent = {
  Light: 'Light',
  Dark: 'Dark',
  Crimson: 'Crimson',
  Blue: 'Blue',
};

const Settings = ({ toggleUI }: SettingsProps) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isUIHidden, setUIHidden] = useState(false);

  const showMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleUIVisibility = () => {
    setUIHidden(!isUIHidden);
    toggleUI()
  };


  return (
    <div className={`settings-container ${isMenuOpen ? "noBackground" : ''}`}>
      <button className={`settings-button ${isMenuOpen ? 'hidden' : ''}`} onClick={showMenu}>
        <FontAwesomeIcon icon={faGear} className="spin" />
      </button>
      <div className={`settings-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="settings-menu-wrapper">
          <ThemeMenu category="Theme" content={themeContent} />
          <BackgroundMenu />
          <h5 className='settings-category__title'>
            Extra
          </h5>
          <CustomButton title={!isUIHidden ? "Hide UI" : "Show UI"} className="settings-button__close" action={toggleUIVisibility}/>
        </div>
        <CustomButton title="Close" className="settings-button__close-menu" action={closeMenu} />
      </div>
    </div>
  );
}

export default Settings