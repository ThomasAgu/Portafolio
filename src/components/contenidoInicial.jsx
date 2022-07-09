import React from 'react'

import Sobremi from './sobremi'
import Curriculum from './curriculum'

/* style */
import '../styles/aboutme&cv.css'
const contenidoInicial = () => {
  return (
    <div id='main-content'>
        <Sobremi />
        <Curriculum />

    </div>
  )
}

export default contenidoInicial