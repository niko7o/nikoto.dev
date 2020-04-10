import React from 'react';

import './Onboarding.scss';

const Onboarding = () => (
  <div className="onboarding">
    <div className="onboarding__information-basic">
      <p className="onboarding__name">Heya! 
        <span role="img" className="onboarding__waving-hand" aria-label="wave">👋</span> 
        I'm <span className="onboarding__name--heavy">nikoto.</span>
      </p>
      <p className="onboarding__occupation">
        Software Engineer<br />
        @ Spotahome <img className="onboarding__spotahome" src="./images/spotahome.jpg" alt="spotahome logo" />
      </p>
    </div>

    <code className="onboarding__teaser">Want to know me better? Use the terminal. <br />Start by typing "help" and pressing enter.</code>

    <div className="onboarding__information-socials">
      <a href="https://github.com/nikotomad" target="_blank" rel="noopener noreferrer" className="onboarding__information-socials-link">
        <img 
          className="onboarding__information-icon" 
          src="./images/icon-github.svg" 
          width="40"
          alt="github"
        />
        Github
      </a>
      <a href="https://www.linkedin.com/in/nikolaasverlee/" target="_blank" rel="noopener noreferrer" className="onboarding__information-socials-link">
        <img 
          className="onboarding__information-icon" 
          src="./images/icon-linkedin.webp" 
          width="40"
          alt="linkedin"
        />
        Linkedin
      </a>
    </div>
  </div>
)

export default Onboarding;