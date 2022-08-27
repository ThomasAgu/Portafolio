import React from 'react'

import Sobremi from './Sobremi'
import Curriculum from './Curriculum'

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