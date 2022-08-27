import React from 'react'
import Proyecto from './Proyecto'
import Img from '../img/heropageb.jpg'

//project imgs
import todoImg from '../img/todoImg.jpg'
import tempImg from '../img/temperaturaApp.jpg'

/* icons */
import { faReact, faHtml5, faGit, faJava, faCss3} from '@fortawesome/free-brands-svg-icons'
/* styles */
import '../styles/projectList.css'

const projectList = () => {
  return (
    <section id='projectos'>
      <h3 id='anclaprojectos'>Proyectos</h3>
      <div id='project-list'>
          <Proyecto nombre={'To Do List'} img={todoImg} type={'propio solo'} descripcion={'Just a simple toDoList with some style & effects'} tecnologias={[faReact, faHtml5, faCss3]} link={"https://ThomasAgu.github.io/ToDoList"}/>
          <Proyecto nombre={'Time App'} img={tempImg} type={'propio solo'} descripcion={'Use the geoAPI and an API to have all the information about temperature where the user click'} tecnologias={[faReact, faHtml5, faCss3]} link={"https://ThomasAgu.github.io/Temperatura"}/>
          
         </div> 
    </section> 
  )
}

export default projectList