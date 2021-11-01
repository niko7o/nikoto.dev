import React from 'react';

import { motion } from "framer-motion";

import './Onboarding.scss';

const Onboarding = ({ isVisible }) => (
  isVisible && (
      <motion.div
        initial={{ y: -400 }} 
        animate={{ y: 0 }}
        transition={{
          y: { 
            type: "spring", 
            stiffness: 100 
          },
          default: { duration: 1 },
        }}
      >
        <div className="onboarding">
          <div className="onboarding__information-basic">
            <p className="onboarding__name">Heya! 
              <span role="img" className="onboarding__waving-hand" aria-label="wave">👋</span> 
              I'm <span className="onboarding__name--heavy">nikoto.</span>
            </p>
            <p className="onboarding__occupation">
              Senior Software Engineer<br />
              @ Spotahome  <img className="onboarding__spotahome" src="./images/spotahome.jpg" alt="spotahome logo" />
            </p>
          </div>

          <code className="onboarding__teaser">
            Want to know me better? Use the terminal. <br />
            Start by typing "<span className="onboarding__teaser-command">help</span>" and pressing enter.
          </code>

          <div className="onboarding__information-socials">
            <a 
              href="https://github.com/nikotomad" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="onboarding__information-socials-link"
            >
              <img 
                className="onboarding__information-icon" 
                src="./images/socials/icon-github.svg" 
                width="40"
                alt="github"
              />
              Github
            </a>
            <a 
              href="https://www.linkedin.com/in/nikolaasverlee/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="onboarding__information-socials-link"
            >
              <img 
                className="onboarding__information-icon" 
                src="./images/socials/icon-linkedin.webp" 
                width="40"
                alt="linkedin"
              />
              Linkedin
            </a>
          </div>
        </div>
      </motion.div>
    )
  );

export default Onboarding;
