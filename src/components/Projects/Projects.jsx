import React from 'react'
import './Projects.css'
import projectsData from './ProjectsData.js'

const Projects = () => {
  const projectsElements = () => {
    return projectsData.map(item => (
      <div className='projects__card'
        key={item.title}
        onClick={() => window.open(item.link, '_blank')}
        style={{ cursor: 'pointer' }}>
        <h3>{item.title}</h3>
        <img className='projects__card--image' src={require('./projects_images/' + item.image)} alt={item.title + " image"} />
        <p>{item.description}</p>
      </div>
    ));
  }

  return (
    <div id="projects">
      <h1>Algunos de mis proyectos e ideas:</h1>
      <div className='projects__grid'>
        {projectsElements()}
      </div>
    </div>
  );
}

export default Projects
