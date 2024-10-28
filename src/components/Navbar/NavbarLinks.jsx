import React, { useState, useEffect } from 'react';
import { scrollToSection,handleScroll } from '../../utils/scrollUtils';

const NavbarLinks = () => {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
      const scrollHandler = handleScroll(setActiveSection);
      window.addEventListener('scroll', scrollHandler);
      return () => window.removeEventListener('scroll', scrollHandler);
    }, []);
  

  return (
    <ul>
    <li>
      <button
        onClick={() => scrollToSection('about')}
        className={activeSection === 'about' ? 'active' : ''}
      >
        About
      </button>
    </li>
    <li>
      <button
        onClick={() => scrollToSection('career')}
        className={activeSection === 'career' ? 'active' : ''}
      >
        Career
      </button>
    </li>

    <li>
      <button
        onClick={() => scrollToSection('skills')}
        className={activeSection === 'skills' ? 'active' : ''}
      >
        Skills
      </button>
    </li>
    <li>
      <button
        onClick={() => scrollToSection('description')}
        className={activeSection === 'description' ? 'active' : ''}
      >
        This Web
      </button>
    </li>
    <li>
      <button
        onClick={() => scrollToSection('projects')}
        className={activeSection === 'projects' ? 'active' : ''}
      >
        Projects
      </button>
    </li>
    <li>
      <button
        onClick={() => scrollToSection('contact')}
        className={activeSection === 'contact' ? 'active' : ''}
      >
        Contact
      </button>
    </li>

  </ul>
  )
}

export default NavbarLinks
