import React, { useEffect, useState } from 'react'; 
import './Header.css'
import { scrollToSection } from '../../utils/scrollUtils';
import myPhoto from '../../assets/header_images/myphoto.PNG'
import { chooseLanguage } from '../../utils/otherUtils';
import { spanish, english } from '../../data/HeaderData';



const Header = ({ language}) => {
  const [isVisible, setIsVisible] = useState(true);
  const textData = chooseLanguage(language, english, spanish);

  useEffect(() => {
    const handleFirstScroll = (e) => {
      if (e.wheelDeltaY < 0 && isVisible) {
        
        setIsVisible(false);
        setTimeout(() => {
          scrollToSection('about');
        }, 100); 

        setTimeout(() => {
          document.getElementById('header').style.display = 'none';
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
      <img className='header--image' src={myPhoto} alt="myphoto" />
      <div className='header--title'>
        <h1 className='header--title--text'>{textData.title}</h1>
        <h3 className='header--subtitle'>{textData.subtitle}</h3>
      </div>
    </div>
  )
}

export default Header