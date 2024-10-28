import React from 'react'
import './About.css'

import searchIcon from './about_images/search_icon.png'
const About = () => {
  return (
    <div id="about" className='about'>
        <div className='about--text'>
          <h2>Mi situación actual:</h2>
          <p>
            Estoy estudiando el  Ciclo Formativo de Grado Superior en Desarrollo de Aplicaciones Web(DAW).
            Actualmente estoy buscando una empresa donde realizar las prácticas curriculares
            correspondientes. Actualmente vivo en Oleiros, A Coruña.
          </p>
          <h4>
            Qué busco:
          </h4> <p>
            Cualquier empresa que se relacione con ese sector, sea su actividad presencial o en remoto.
            Por supuesto se agradece que exista un entorno agradable para el aprendizaje
            y desarrollo de competencias correspondientes.
          </p>
        </div>
        <img className='about--image' src={searchIcon} alt="Search Icon" />
      

    </div>

  )
}

export default About