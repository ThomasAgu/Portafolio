import React from 'react'
/* Iconst */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import '../styles/navbar-responsive.css'

const NavbarResponsive = () => {
  return (
    <div id='nav-res-component'>
      <ul id='nav-res-ul' >
        <li id=''> <a href="#heroland-big-div" > Inicio </a></li>
        <li id=''><a href="#anclaSobreMi">Sobre mí </a></li>
        <li id=''><a href="#anclaprojectos">Proyectos </a></li>
        <li id=''><a href="#anclaTecnologies">Tecnologías </a></li>
        <li id='' ><a href="#anclaContacto">Contacto </a></li>        
      </ul>      
    </div>
  )
}

export default NavbarResponsive