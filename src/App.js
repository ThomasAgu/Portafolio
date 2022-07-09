import './App.css';

import HeroLand from './components/heroLand';
import Footer from './components/footer';
import Contacto from './components/contacto';
import PojectList from './components/projectList'
import ContenidoInicial from './components/contenidoInicial';
import TecnologiesList from './components/tecnologiesList';
import NavBar from './components/navBar';
import NavbarResponsive from './components/navbarResponsive';
import React, { useEffect, useState } from 'react';

/* AOS */
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..



function App() {
  
  

  AOS.init();
  return (
    <div className="App">
      <header className="App-header"></header>

      <main>
        <NavBar />
      
        <HeroLand/>
        <ContenidoInicial />
        <PojectList/>
        <TecnologiesList />
        <Contacto/> 
        <Footer/>
      </main>
    </div>
  );
}

export default App;
