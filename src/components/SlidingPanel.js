import React from 'react';

import Onboarding from './panels/Onboarding';
import Projects from './panels/Projects';

import './SlidingPanel.scss';

const SlidingPanel = ({ panelContext: { step } }) => {
  return (
    <div className="sliding-panel">
      <Onboarding isVisible={step === 'onboarding'} />
      <Projects isVisible={step === 'projects'} />
    </div>
  )
}

export default SlidingPanel;