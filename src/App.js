import './App.css';

import HeroLand from './components/HeroLand';
import Footer from './components/Footer';
import Contacto from './components/Contacto';
import PojectList from './components/ProjectList'
import ContenidoInicial from './components/ContenidoInicial';
import TecnologiesList from './components/TecnologiesList';
import NavBar from './components/NavBar';
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
