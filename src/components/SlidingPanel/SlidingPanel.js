import React from 'react';

import Onboarding from '../Panels/Onboarding';
import Projects from '../Panels/Projects';

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
