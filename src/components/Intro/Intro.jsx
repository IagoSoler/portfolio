import React, { useState } from 'react';
import './Intro.css';

const Intro = ({ setLanguage }) => {
  const [exiting, setExiting] = useState(false);

  const handleLanguageChange = (lang) => {
    setExiting(true);
    setTimeout(() => {
      setLanguage(lang);
    }, 1000); // Duración de la animación
  };
  return (
    <div className='intro'>
      <h1 className={`intro__text ${exiting ? 'exiting__right' : 'left'}`}>Bienvenido</h1>
      <h1 className={`intro__text ${exiting ? 'exiting__left' : 'right'}`}>Welcome</h1>
      <div className={`intro__buttons ${exiting ? 'exiting__down' : 'entering__up'}`}>
        <button className='intro__button' onClick={() => handleLanguageChange("spanish")}>
          <img src={require('./intro_images/spain_flag.png')} alt='Bandera Española' className='intro__flag-icon' />
          Español
        </button>
        <button className='intro__button' onClick={() => handleLanguageChange("english")}> 
        <img src={require('./intro_images/uk_flag.png')} alt='Bandera Española' className='intro__flag-icon' />
          English 
        </button>
      </div>
    </div>
  );
}

export default Intro;