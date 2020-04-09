import React from 'react';

import './Bio.scss';

const CURRENT_COMPANY = 'Spotahome';

const Bio = () => (
  <div className="bio">
    <div className="bio__information-basic">
      <p className="bio__name">Heya! I'm <span className="bio__name--heavy">nikoto</span></p>
      <p className="bio__occupation">Software Engineer<br />@ {CURRENT_COMPANY}</p>
    </div>

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