import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Settings = () => {
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
                console.log('settings button clicked')
            }
        }>
        <FontAwesomeIcon icon="fa-solid fa-gear" />
        </button>

    </div>
  )
}

export default Settings