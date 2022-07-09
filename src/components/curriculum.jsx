import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFilePdf} from '@fortawesome/free-solid-svg-icons'

/* archivo */
import Arc from '../arc/cv.pdf'
const curriculum = () => {
  return (
    <div id='cv'>
          <a href={Arc} download="curriculúm" id='cvanchor'><FontAwesomeIcon icon={faFilePdf} /> Descargar CV</a>
    </div>
  )
}

export default curriculum