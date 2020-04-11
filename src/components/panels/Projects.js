import React from 'react';

import { motion } from "framer-motion";

const Projects = ({ isVisible }) => (
  isVisible && (
    <motion.div
      initial={{ y: -400 }} 
      animate={{ y: 0 }} 
      transition={{
        y: { type: "spring", stiffness: 100 },
        default: { duration: 1 },
      }}
    >
      <div className="projects">
        <h1>Projects</h1>
      </div>
    </motion.div>
  )
);

export default Projects;
