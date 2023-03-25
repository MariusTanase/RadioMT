import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React from 'react'
import './Settings.css'
import { faGear } from '@fortawesome/free-solid-svg-icons'



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
                handleMenu()
            }
        }>            
            <FontAwesomeIcon icon={faGear} className='spin'/>
        </button>

    </div>
  )
}

export default Settings