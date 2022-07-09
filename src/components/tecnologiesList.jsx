import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHtml5, faCss3, faJs, faReact, faBootstrap, faPython } from '@fortawesome/free-brands-svg-icons'


/* style */
import '../styles/tecnologiesList.css'
const tecnologiesList = () => {
  return (
    <section id='tecnologias' data-aos='fade-up-right' data-aos-duration="1000">
        <h3 id='anclaTecnologies'>Tecnologias</h3>
        <div id='tecnologiesList' >
            <FontAwesomeIcon icon={faHtml5} className="tecnology" />
            <FontAwesomeIcon icon={faCss3} className="tecnology" />
            <FontAwesomeIcon icon={faJs} className="tecnology" />
            <FontAwesomeIcon icon={faReact} className="tecnology" />
            <FontAwesomeIcon icon={faBootstrap} className="tecnology" />   
            <FontAwesomeIcon icon={faPython} className="tecnology" />   
 
        </div>
    </section>
  )
}

export default tecnologiesList