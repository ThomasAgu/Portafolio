import React from 'react'
import { useState, useEffect } from 'react';
/* Iconst */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
/* react */
/* Style */
import '../styles/nav.css'



const NavBar = () => {
  const [offset, setOffset] = useState(0);
  const sections = document.querySelectorAll("section");
  const navLi = document.querySelectorAll("ul li");
  /* reactive menu */
  const [active, setActive] = useState(false);

  useEffect(() => {
    
    const onScroll = () => setOffset(window.pageYOffset);
    var current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (offset >= sectionTop - 88) {
        current = section.getAttribute("id");
      }
    });

    navLi.forEach((li) => {
      li.classList.remove("active");
      if (li.classList.contains(current)) {
        li.classList.add("active");
      }
    });
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);
  

 
  const clickActive = () =>{
    setActive(!active)
  }
 
  return (
    <div id='navbar'>       
        <ul id='navbar-list' className={`navbar-list ${active ? 'active' : ''}`}>
            <li id='navbar-list-item' className='inicio active' onClick={clickActive}> <a href="#inicio" > Inicio </a></li>
            <li id='navbar-list-item' className='aboutme' onClick={clickActive}><a href="#anclaSobreMi">Sobre mí </a></li>
            <li id='navbar-list-item' className='projectos' onClick={clickActive}><a href="#anclaprojectos">Proyectos </a></li>
            <li id='navbar-list-item' className='tecnologias' onClick={clickActive}><a href="#anclaTecnologies">Tecnologías </a></li>
            <li id='navbar-list-item' className='contacto' onClick={clickActive}><a href="#contacto">Contacto </a></li>        
            <li onClick={clickActive}><FontAwesomeIcon icon={faBars}  id="nav-icon" /></li>
        </ul>  
        
    </div>
  )
}

export default NavBar