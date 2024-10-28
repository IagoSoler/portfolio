import React from 'react'
import './Skills.css'
import skillsData from './SkillsData.js'
import SkillsCard from './SkillsCard.jsx'

const Skills = () => {
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
      <h1>Idiomas</h1>
      <div className='skills__grid'>
        {skillsElements(skillsData.languages)}
      </div>
      <h1>Frontend</h1>
      <div className='skills__grid'>
        {skillsElements(skillsData.frontend)}
      </div>
      <h1> Backend y otras tecnologías </h1>
      <div className='skills__grid'>
        {skillsElements(skillsData.backend)}
      </div>
    </div>
  );
}

export default Skills
