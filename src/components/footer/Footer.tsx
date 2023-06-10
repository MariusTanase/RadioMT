import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className='footer'>
      <p>Created by <a href='https://mariustanase.com'>Marius Tanase</a></p>

      <div className='footer__socials'>
        {/* @ts-ignore */}
        <a href='https://www.github.com/mariustanase'><FontAwesomeIcon icon={faGithub} style={{ color: "var(--text-color)", }} /></a>
        {/* @ts-ignore */}
        <a href='https://www.linkedin.com/in/marius-tanase/'><FontAwesomeIcon icon={faLinkedinIn} style={{ color: "var(--text-color)", }} /></a>
      </div>
    </div>
  )
}

export default Footer