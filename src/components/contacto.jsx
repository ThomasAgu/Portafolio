import React from 'react'

/* Icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
/* Styles */
import '../styles/contact.css'
const contacto = () => {
  return (
    <section id='contacto' data-aos='fade-up-left' data-aos-duration="1000">
      <h3 id='contacto-title'>Conctacto</h3>
      <div id='contacto-flex'>
          <button className='contacto-item' onClick={() => window.location = 'mailto:thomas40651@gmail.com' }> <FontAwesomeIcon className='contact-icon' icon={faEnvelope}/> </button>
          <button className='contacto-item' onClick={() => window.open("https://www.linkedin.com/in/thomas-aguado-422137210/", "_blank")}> <FontAwesomeIcon className='contact-icon' icon={faLinkedin}/> </button>
          <button className='contacto-item' onClick={() => window.open('https://github.com/ThomasAgu', "_blank") }> <FontAwesomeIcon className='contact-icon' icon={faGithub}/> </button>
      </div>
    </section>
  )
}

export default contacto