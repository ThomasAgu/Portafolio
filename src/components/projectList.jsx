import React from 'react'
import Proyecto from './Proyecto'
import Img from '../img/heropageb.jpg'

//project imgs'
import tennis from '../img/tennis.png'
import cartas from '../img/cartas.png'
import reto1 from '../img/reto1.png'
import clismo from '../img/clismo.jpg'
import roulete from '../img/roulete.jpg'
import libreria from '../img/libreria.jpg'
/* icons */
import { faReact, faHtml5, faCss3, faPhp, faPython, faAws, faSass, faJs, faNext, faNode} from '@fortawesome/free-brands-svg-icons'
/* styles */
import '../styles/projectList.css'

const projectList = () => {
  return (
    <section id='projectos'>
      <h3 id='anclaprojectos'>Proyectos</h3>
      <div id='project-list'>
        <Proyecto nombre={'Clismo'} img={clismo} type={'propio grupal'} descripcion={'Clismo es una pagina para ciclistas, tanto alumnos como profesores se conectan y se manejan las rutinas, los entrenamientos y los grupos'} tecnologias={[faReact, faPython, faNext]} link={"https://clismo.vercel.app/"}/>
        <Proyecto nombre={'Dribble Roulette'} img={roulete} type={'propio solo'} descripcion={'Un pequeño webscrapper que busca proyectos web de dribble y sobre los mismos ejecuta una ruleta. La idea es programar el ganador'} tecnologias={[faReact, faNode, faSass]} link={"https://github.com/ThomasAgu/Dribble-roulette"}/>
        <Proyecto nombre={'API de libreria'} img={libreria} type={'propio solo'} descripcion={'Una API para el manejo de una libreria, manejo de usuarios, libros, y los prestamos que pueden realizar entre las funcionalidades mas importantes'} tecnologias={[faNode]} link={"https://github.com/ThomasAgu/NAOReto7"}/>
        <Proyecto nombre={'Landing Page'} img={reto1}  type={'propio solo'} descripcion={'Reto 1/6 beca de programacion full-stack. Landing page responsive'} tecnologias={[faHtml5,faCss3, faSass, faJs]} link={"https://carolinasada.vercel.app/"}/>
        <Proyecto nombre={'Tennis App'} img={tennis}  type={'propio grupal'} descripcion={'Aplicacion de tennis que permite manejar canchas, usuarios y reservas provenientes a clases y alquileres'} tecnologias={[faReact, faHtml5,faCss3,faPhp]} link={""}/>
        <Proyecto nombre={'Creador de Cartas'} img={cartas}  type={'propio grupal'} descripcion={'Un proyecto de dos personas, en proceso. Actualmente un creador y listado de cartas que se guardan en una base de datos. Externa'} tecnologias={[faReact, faHtml5,faCss3,faPython, faAws]} link={"https://cardgame-prealpha.vercel.app/"}/>

      </div> 
    </section> 
  )
}

export default projectList