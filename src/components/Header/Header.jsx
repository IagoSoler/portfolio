import React, { useEffect, useState } from 'react';
import './Header.css'
import { scrollToSection } from '../../utils/scrollUtils';
import myPhoto from '../../assets/header_images/myphoto.PNG'
import chevronDown from '../../assets/header_images/chevronDown.svg';
import { chooseLanguage } from '../../utils/otherUtils';
import { spanish, english } from '../../data/HeaderData';



const Header = ({ language }) => {
  const [isVisible, setIsVisible] = useState(true);
  const textData = chooseLanguage(language, english, spanish);

  useEffect(() => {
    const handleFirstScroll = (e) => {
      if (e.wheelDeltaY < 0 && isVisible) {


        setTimeout(() => {
          scrollToSection('about');
        }, 100);

        setTimeout(() => {
          setIsVisible(false);
        }, 1000);

      }
    };
    document.addEventListener('wheel', handleFirstScroll);
    return () => {
      document.removeEventListener('wheel', handleFirstScroll);
    };
  }, [isVisible]);

  return (

    <div id='header' className={isVisible ? '' : 'hidden'}>
      <div className='header--container'>
        <img className='header--container--image' src={myPhoto} alt="myphoto" />
        <div className='header--container--title'>
          <h1 className='header--container--title--text'>{textData.title}</h1>
          <h3 className='header--container--subtitle'>{textData.subtitle}</h3>
          
        </div>
      </div>
      <img className='header--chevron__down' src={chevronDown} alt="chevronDown" />
    </div>

  )
}

export default Header