import React from 'react'

import './Header.css'
import { scrollToSection } from '../../utils/scrollUtils';
import myPhoto from '../../assets/header_images/myphoto.PNG'
import { chooseLanguage } from '../../utils/otherUtils';
import {spanish, english} from '../../data/HeaderData'


const Header = ({language}) => {
 const textData = chooseLanguage(language, english, spanish);
  return (
    <div id ='header' className='header'>
      <img className='header--image' src={myPhoto} alt="myphoto" />
      <div className='header--title'>
        <h1 className='header--title--text'>{textData.title }</h1>
        <h3 className='header--title--text header--subtitle'>{textData.subtitle}</h3>
        <button className='header--contact__button' onClick={()=>scrollToSection("contact")}> {textData.contactButton}</button>

      </div>
    </div>
  )
}

export default Header