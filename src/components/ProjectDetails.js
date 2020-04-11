import React from 'react';

import AnimatedButton from './AnimatedButton';

import 'ProjectDetails.scss';

const ProjectDetails = ({ project }) => (
  <div className="project-details">
    <h2 className="project-details__title">{project.name}</h2>
    
    <div className="project-details-container">
      <div className="project-details-demo">
        <a href={project.link} target="blank" rel="noopener noreferrer">
          <AnimatedButton buttonText={'View Demo'}/>
        </a>
      </div>
      <img className="project-details-image" src={project.image} alt={project.name} />
    </div>

    <div className="project-details-description">
      <span className="project-details__description-badge">Technologies</span>
      <span className="project-details__description-info">{project.technologies}</span>
    </div>
  </div>
)

export default ProjectDetails;