import React from 'react';

import SlidingPanel from './SlidingPanel';
import Terminal from './Terminal';

import './Homepage.scss';

const Homepage = () => (
  <div className="homepage">
    <SlidingPanel step={'onboarding'} />
    <Terminal />
  </div>
)

export default Homepage;