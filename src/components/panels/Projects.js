import React from 'react';

import { motion, AnimatePresence } from "framer-motion"

const Projects = () => (
  <AnimatePresence>
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
    >
      <h1>Projects</h1>
    </motion.div>
  </AnimatePresence>
);

export default Projects;
