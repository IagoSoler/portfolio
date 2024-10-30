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
      <div className='description--portfolio'>
        <div className='description--text'>
          <h2>{textData.title}</h2>
          <p>{textData.firstParragraph} </p>
          <h4>{textData.firstSubtitle}</h4>
          <p>{textData.secondParragraph}  </p>
          <p>{textData.thirdParragraph} </p>
          <button className='description--button' onClick={() => scrollToSection('contact', 55)}>{textData.contactButton} </button>
        </div>
        <img className='description--portfolio--image' src={reactIcon} alt="React Icon" />
      </div>
    </div>
  )
}

export default Description