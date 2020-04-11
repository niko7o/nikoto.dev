import React from 'react';

import { motion } from "framer-motion";

import './Projects.scss';

const Projects = ({ isVisible }) => (
  isVisible && (
    <>
      <motion.div
        initial={{ y: -1000 }} 
        animate={{ y: 0 }} 
        transition={{
          y: { type: "spring", stiffness: 100 },
          default: { duration: 1 },
        }}
      >
        <div className="projects">
          <div className="projects__project">
          <div className="projects__project-header">
            <h2 className="projects__project-title">digital rain.</h2>
            </div>

            <div className="projects__project-image-wrapper">
              <div className="projects__project-demo">
                <a 
                  href="https://nikotomad.github.io/matrix-rain/" 
                  target="blank" 
                  rel="noopener noreferrer">
                    <motion.button
                      className="projects__project-demo-btn"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.90 }}
                    >
                      <img className="icon-eye" src="./images/icons/eye.png" alt="demo" />
                      View Demo
                    </motion.button>
                </a>
              </div>
              <img className="projects__project-image" src="./images/projects/matrix-rain.gif" alt="project_image" />
            </div>

            <div className="projects__project-description">
              <span className="project__technology-badge">Technologies</span>
              <span className="project__technology-info">P5.JS, Canvas, Javascript</span>
            </div>
          </div>
        </div>
      </motion.div>
     </>
  )
);

export default Projects;
