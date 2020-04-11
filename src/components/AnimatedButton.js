import React from 'react';

import { motion } from "framer-motion";

import './AnimatedButton.scss';

const AnimatedButton = ({ buttonText, className }) => (
  <motion.button
    className={`animated-button ${className ? className : ''}`}
    whileHover={{ scale: 1.08 }}
    whileTap={{ scale: 0.95 }}
  >
    <img className="icon-eye" src="./images/icons/eye.png" alt="demo" />
    {buttonText}
  </motion.button>
)

export default AnimatedButton;