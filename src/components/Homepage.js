import React from 'react';

import SlidingPanel from './SlidingPanel';
import Terminal from './Terminal';

import './Homepage.scss';

const Onboarding = () => (
  <div className="homepage">
    <SlidingPanel step={'onboarding'} />
    <Terminal />
  </div>
)

export default Onboarding;