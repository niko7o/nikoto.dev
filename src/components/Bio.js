import React from 'react';

import './Bio.scss';

const CURRENT_COMPANY = 'Spotahome';

const Bio = () => (
  <div className="bio">
    <p className="bio__text">Heya! I'm</p>
    <p className="bio__name">nikoto</p>
    <p className="bio__occupation">Software Engineer @ {CURRENT_COMPANY}</p>
  </div>
)

export default Bio;