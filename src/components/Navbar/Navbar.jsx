import React from 'react';
import './Navbar.css';
import myPhoto from '../Header/header_images/myphoto.PNG'
import spanishFlag from '../Intro/intro_images/spain_flag.png'
import englishFlag from '../Intro/intro_images/uk_flag.png'
import githubLogo from '../Contact/contact_images/github_logo.png';
import linkedinLogo from '../Contact/contact_images/linkedin_logo.png';
import NavbarLinks from './NavbarLinks';


const Navbar = ({ setLanguage, language }) => {

  const flagSrc = language === 'spanish' ? spanishFlag : englishFlag;

  return (
    <nav className="navbar">
      <div className='navbar--name'>
        <img className='navbar--name--image' src={myPhoto} alt="myPhoto" />
        <p>Iago Soler veira</p>
      </div>

      <NavbarLinks />

      <div className='navbar--language'>
        <img className='navbar--language--flag' src={flagSrc} alt={language + "Flag"} />
        <select className='navbar--language--selector' onChange={(e) => setLanguage(e.target.value)}>
          <option value="spanish"> Español</option>
          <option value="english">Inglés</option>
        </select>
      </div>


      <div className='navbar--contact'>
        <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer">
          <img className='navbar--contact--github__image' src={githubLogo} alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/iago-soler-veira-73a2a9188" target="_blank" rel="noopener noreferrer">
          <img className='navbar--contact--linkedin__image' src={linkedinLogo} alt="LinkedIn" />
        </a>
      </div>

    </nav>
  );
};

export default Navbar;
