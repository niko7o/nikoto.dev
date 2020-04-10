import React, { useState } from 'react';

import SlidingPanel from './SlidingPanel';
import Terminal from './Terminal';

import { PanelProvider } from '../contexts/panel-context';

import './Homepage.scss';

const DEFAULT_INITIAL_STEP = 'onboarding';

const Homepage = () => {
  const [currentStep, setCurrentStep] = useState(DEFAULT_INITIAL_STEP);

  const panelContext = {
    step: currentStep,
    updateStep: desiredStep =>
      setCurrentStep(desiredStep)
  }
  
  return (
    <PanelProvider value={panelContext}>
      <div className="homepage">
        <SlidingPanel panelContext={panelContext} />
        <Terminal panelContext={panelContext} />
      </div>
    </PanelProvider>
  )
}

export default Homepage;