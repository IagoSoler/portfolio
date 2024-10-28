import React from 'react'
import './Description.css'
import { scrollToSection } from '../../utils/scrollUtils';
import reactIcon from './description_images/React_icon.PNG'
const Description = () => {

  return (
    <div id="description">
      <div className='description--portfolio'>
        <div className='description--text'>
          <h2>Sobre este proyecto:</h2>
          <p>El objetivo fundamental de este portfolio es darme a conocer,
            no solo mediante la información que en él se expone, sino también por su propia creación e implementación.
          </p>
          <h4>Sobre su desarrollo:</h4>
          <p>Esta aplicación web ha sido creada íntegramente por mí (naturalmente, con consultas a distintos medios).
            Principalmente he usado React y node.js, creando su contenido mediante HTML y CSS.

          </p>
          <p>No obstante, en algunos de los proyectos que más abajo se muestran, he usado otros lenguajes, como PHP y SQL.</p>
          <button className='description--button' onClick={() => scrollToSection('projects', 55)}>Contacto</button>
        </div>
        <img className='description--portfolio--image' src={reactIcon} alt="React Icon" />
      </div>
    </div>
  )
}

export default Description