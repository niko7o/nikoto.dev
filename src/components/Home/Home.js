import React, { useState } from 'react';

import SlidingPanel from '../SlidingPanel/SlidingPanel';
import Terminal from '../Terminal';
import Footer from '../Footer';

import { PanelProvider } from '../../contexts/panel-context';

import './Home.scss';

const DEFAULT_INITIAL_STEP = 'onboarding';

const Home = () => {
  const [currentStep, setCurrentStep] = useState(DEFAULT_INITIAL_STEP);

  const panelContext = {
    step: currentStep,
    updateStep: desiredStep => setCurrentStep(desiredStep)
  }
  
  return (
    <PanelProvider value={panelContext}>
      <div className="home">
        <SlidingPanel panelContext={panelContext} />
        <Terminal panelContext={panelContext} />
        <Footer />
      </div>
    </PanelProvider>
  )
}

export default Home;
