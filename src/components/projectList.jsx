import React from 'react'
import Proyecto from './proyecto'
import Img from '../img/heropageb.jpg'

/* icons */
import { faReact, faHtml5, faGit, faJava} from '@fortawesome/free-brands-svg-icons'
/* styles */
import '../styles/projectList.css'

const projectList = () => {
  return (
    <section id='projectos'>
      <h3 id='anclaprojectos'>Proyectos</h3>
      <div id='project-list'>
          <Proyecto nombre={'prueba'} img={Img} type={'propio solo'} descripcion={'dioahjsoi da* * RUYWEI AUBWEIURYAWOE IU RYWEOIRUFYV NWIOEURYVEIO  TOIeuwrtyowe ifya woeifuyawoiufyawioefuyw fioyawiouf yaweoiruybawe0i7 tb'} tecnologias={[faReact, faHtml5]}/>
          <Proyecto nombre={'prueba'} img={Img} type={'propio grupal'} descripcion={'proyecto descripcion'} tecnologias={[faReact, faHtml5, faJava]}/>
          <Proyecto nombre={'prueba'} img={Img} type={'profesional'} descripcion={'proyecto descripcion'} tecnologias={[faReact, faHtml5]}/>
          <Proyecto nombre={'prueba'} img={Img} type={'profesional'} descripcion={'proyecto descripcion'} tecnologias={[faReact, faHtml5]}/>
          <Proyecto nombre={'prueba'} img={Img} type={'profesional'} descripcion={'proyecto descripcion'} tecnologias={[faReact, faHtml5]}/>
          <Proyecto nombre={'prueba'} img={Img} type={'propio solo'} descripcion={'proyecto descripcion'} tecnologias={[faReact, faHtml5]}/>
          <Proyecto nombre={'prueba'} img={Img} type={'propio solo'} descripcion={'proyecto descripcion'} tecnologias={[faReact, faHtml5]}/>
          <Proyecto nombre={'prueba'} img={Img} type={'propio grupal'} descripcion={'proyecto descripcion'} tecnologias={[faReact, faHtml5]}/>
          <Proyecto nombre={'prueba'} img={Img} type={'profesional'} descripcion={'proyecto descripcion'} tecnologias={[faReact, faHtml5]}/>
          <Proyecto nombre={'prueba'} img={Img} type={'propio grupal'} descripcion={'proyecto descripcion'} tecnologias={[faReact, faHtml5]}/>
          <Proyecto nombre={'prueba'} img={Img} type={'propio solo'} descripcion={'proyecto descripcion'} tecnologias={[faReact, faHtml5]}/>
          <Proyecto nombre={'prueba'} img={Img} type={'propio grupal'} descripcion={'proyecto descripcion'} tecnologias={[faReact, faHtml5]}/>
      </div> 
    </section> 
  )
}

export default projectList