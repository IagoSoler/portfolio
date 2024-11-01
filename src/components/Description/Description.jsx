import React from 'react'
import './Description.css'
import { scrollToSection } from '../../utils/scrollUtils';
import reactIcon from '../../assets/description_images/React_icon.PNG'
import { chooseLanguage } from '../../utils/otherUtils';
import {spanish, english} from '../../data/DescriptionData'
const Description = ({language}) => {
  const textData = chooseLanguage(language, english, spanish);
  return (
    <div id="description">
        <div className='description--container'>
          <h2>{textData.title}</h2>
          <p>{textData.firstParragraph} </p>
          <h4>{textData.firstSubtitle}</h4>
          <p>{textData.secondParragraph}  </p>
          <p>{textData.thirdParragraph} </p>
          <button className='description--container--button' onClick={() => scrollToSection('contact', 55)}>{textData.contactButton} </button>
        </div>
        <img className='description--container--image' src={reactIcon} alt="React Icon" />
    </div>
  )
}

export default Description