import React from 'react';

import { motion } from "framer-motion";

import 'AnimatedButton.scss';

const AnimatedButton = ({ buttonText }) => (
  <motion.button
    className="animated-button"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.90 }}
  >
    <img className="icon-eye" src="./images/icons/eye.png" alt="demo" />
    {buttonText}
  </motion.button>
)

export default AnimatedButton;