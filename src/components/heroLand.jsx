import React from 'react'
import NavBar from './navBar'

/* images */
import Img from '../img/twimg.jpg'
/* styles */
import '../styles/heroLand.css'
const heroLand = () => {
  return (
    <div>
        <section id='inicio'>
            <div id='my-identity' >
                <div id='presentation' >
                    <p id='presentation-name' data-aos="fade-right" data-aos-duration="1000">Thomas <br/> Aguado</p>
                    <p id='presentation-work' data-aos="fade-right" data-aos-duration="2500">Full-stack developer</p>
                </div>
                <div id='profile-img-div'>
                    <img src={Img} alt="" id='profile-img' />
                </div>
            </div>
        </section>
    </div>
  )
}

export default heroLand