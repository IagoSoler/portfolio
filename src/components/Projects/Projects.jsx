import React from 'react'
import './Projects.css'
import {spanish, english} from '../../data/ProjectsData'
import { chooseLanguage } from '../../utils/otherUtils';

const Projects = ({language}) => {
  const textData = chooseLanguage(language, english, spanish);
  const projectsElements = () => {
    
    return textData.projects.map(item => (
      <div className='projects--grid--card'
        key={item.title}
        onClick={() => window.open(item.link, '_blank')}
        >
        <h3>{item.title}</h3>
        <img className='projects--grid--card--image' src={item.image} alt={item.title + " image"} />
        <p>{item.description}</p>
      </div>
    ));
  }

  return (
    <div id="projects">
      <h2>{textData.title}</h2>
      <div className='projects--grid'>
        {projectsElements()}
      </div>
    </div>
  );
}

export default Projects
