import React from 'react'

const SkillsCard = ({title,image,description,level}) => {
  return (
    <div className='skills__card' >
    <h3>{title}</h3>
    <img className='skills__card--image' src={image} alt={title + " image"} />
    <p>{description}</p>
    <div className="skills__progress-bar">
      <div className="skills__progress-fill" style={{width: `${level}%`}}></div>
    </div>
  </div>
  )
}

export default SkillsCard