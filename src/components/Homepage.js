import React from 'react';

import Bio from './Bio';

import './Homepage.scss';
import Terminal from './Terminal';

const Onboarding = () => (
  <div className="homepage">
    <Bio />
    <Terminal />
  </div>
)

export default Onboarding;