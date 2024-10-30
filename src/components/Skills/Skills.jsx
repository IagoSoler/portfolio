import React from 'react'
import './Skills.css'
import {spanish,english} from '../../data/SkillsData'
import SkillsCard from './SkillsCard.jsx'
import { chooseLanguage } from '../../utils/otherUtils';
const Skills = ({language}) => {
  const textData = chooseLanguage(language, english, spanish);
const skillsElements = (skillsArray) => {
    
    return skillsArray.map(item => (
      <SkillsCard
        key={item.title}
        title={item.title}
        image={item.image}
        description={item.description}
        level={item.level}
      />
    ));
  }

  return (
    <div id="skills">
      <h1>{textData.languagesTitle}</h1>
      <div className='skills__grid'>
        {skillsElements(textData.languages)}
      </div>
      <h1>Frontend:</h1>
      <div className='skills__grid'>
        {skillsElements(textData.frontend)}
      </div>
      <h1>{textData.backendTitle}</h1>
      <div className='skills__grid'>
        {skillsElements(textData.backend)}
      </div>
    </div>
  );
}

export default Skills
