import React from 'react'
import './Header.css'
import { scrollToSection } from '../../utils/scrollUtils';

const Header = () => {

  return (
    <div id ='header' className='header'>
      <img className='header--image' src={require('./header_images/myphoto.PNG')} alt="myphoto" />
      <div className='header--title'>
        <h1 className='header--title--text'>Bienvenido a mi página web. </h1>
        <h3 className='header--title--text header--subtitle'> Mi nombre es Iago Soler Veira,
          y soy estudiante de Desarrollo de Aplicaciones Web.
          A continuación escribo un poco sobre mi situación, habilidades y proyectos.
           Si tienes alguna pregunta, no dudes en enviar un correo o llamar.</h3>
        <button className='header--contact__button' onClick={()=>scrollToSection("contact")}> Contacto</button>

      </div>
    </div>
  )
}

export default Header