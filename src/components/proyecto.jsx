import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGitAlt } from '@fortawesome/free-brands-svg-icons'
import {faUpRightFromSquare} from '@fortawesome/free-solid-svg-icons'

import Img from '../img/computer.jpg'


/* provisorio la imagen */
const proyecto = ({nombre,img, type, descripcion, tecnologias}) => {
  
  const defineColor = () =>{
    if(type === 'propio solo'){
      return '#2EA690'
    }
    else if (type === 'propio grupal'){
      return '#F29863'
    }
    else{
      return '#373740'
    }
  }
  
  return (
    <div className='card-project' data-aos="flip-up" data-aos-duration="1000">  
      <div ><img src={Img} alt="" className='card-img' /></div>
      <div className='card-project-mainContent'>
        <h4 className='card-typeOfProject' style={{color: defineColor()}}>{type}</h4>
        <h2 className='card-name'>{nombre}</h2>
        <p className='card-description'>{descripcion}</p>
      </div>


      <div className='project-tecnologies' style={{backgroundColor: defineColor()}}>
      {tecnologias.map((el) => <FontAwesomeIcon icon={el} className="project-icon"/>)}
      </div>
    </div>
  )
}

export default proyecto