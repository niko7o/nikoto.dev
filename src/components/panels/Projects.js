import React from 'react';

import { motion } from "framer-motion";

import ProjectDetails from '../ProjectDetails/ProjectDetails';

import './Projects.scss';

const projects = {
  digitalRain: {
    name: 'digital rain.',
    link: 'https://nikotomad.github.io/matrix-rain',
    image: './images/projects/matrix-rain-min.gif',
    technologies: 'P5.JS, Canvas, Javascript'
  }
}

const Projects = ({ isVisible }) => (
  isVisible && (
    <>
      <motion.div
        initial={{ y: -1000 }} 
        animate={{ y: 0 }} 
        transition={{
          y: { 
            type: "spring", 
            stiffness: 100 
          },
          default: { duration: 1 },
        }}
      >
        <div className="projects">
          <ProjectDetails project={projects.digitalRain} />
        </div>
      </motion.div>
     </>
  )
);

export default Projects;
