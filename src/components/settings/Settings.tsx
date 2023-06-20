import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import './Settings.css'
import { faGear } from '@fortawesome/free-solid-svg-icons'
// @ts-ignore
import { ThemeMenu } from '@/components/ThemeMenu/ThemeMenu'
// @ts-ignore

import BackgroundMenu from '@/components/BackgroundMenu/BackgroundMenu'
import CustomButton from '../reusableComponents/CustomButton'


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

  const showMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="settings-container">
      <button className={`settings-button ${isMenuOpen ? 'hidden' : ''}`} onClick={showMenu}>
        <FontAwesomeIcon icon={faGear} className="spin" />
      </button>
      <div className={`settings-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="settings-menu-wrapper">
          <ThemeMenu category="Theme" content={themeContent} />
          <BackgroundMenu />
          <CustomButton title="Hide Interface" className="settings-button__close" action={toggleUI} />
        </div>

          <CustomButton title="Close Menu" className="settings-button__close" action={closeMenu} />

      </div>
    </div>
  );
}

export default Settings