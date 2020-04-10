import React from 'react';

import './Onboarding.scss';

const Bio = () => (
  <div className="bio">
    <div className="bio__information-basic">
      <p className="bio__name">Heya! <span role="img" className="bio__waving-hand" aria-label="wave">👋</span> I'm <span className="bio__name--heavy">nikoto.</span></p>
      <p className="bio__occupation">Software Engineer<br />@ Spotahome <img className="bio__spotahome" src="./images/spotahome.jpg" alt="spotahome logo" /></p>
    </div>

    <code className="bio__teaser">Want to know me better? Use the terminal. <br />Start by typing "help" and pressing enter.</code>

    <div className="bio__information-socials">
      <a href="https://github.com/nikotomad" target="_blank" className="bio__information-socials-link">
        <img className="bio__information-icon" src="./images/icon-github.svg" width="40"/>
        Github
      </a>
      <a href="https://www.linkedin.com/in/nikolaasverlee/" target="_blank" className="bio__information-socials-link">
        <img className="bio__information-icon" src="./images/icon-linkedin.webp" width="40"/>
        Linkedin
      </a>
    </div>
  </div>
)

export default Bio;