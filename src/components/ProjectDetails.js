import React from 'react';

import AnimatedButton from './AnimatedButton';

import LazyImage from './LazyImage';

import './ProjectDetails.scss';

const ProjectDetails = ({ project }) => (
  <div className="project-details">
    <h2 className="project-details__title">{project.name}</h2>
    
    <div className="project-details__container">
      <div className="project-details__demo">
        <a href={project.link} target="blank" rel="noopener noreferrer">
          <AnimatedButton buttonText={'View Demo'} className="project-details__button"/>
        </a>
      </div>

      <LazyImage imageUrl={project.image} className="project-details__image" />
    
    </div>

    <div className="project-details__description">
      <span className="project-details__description-badge">Technologies</span>
      <span className="project-details__description-info">{project.technologies}</span>
    </div>
  </div>
)

export default ProjectDetails;