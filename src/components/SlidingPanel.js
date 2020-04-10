import React from 'react';

import Onboarding from './Onboarding';
import Projects from './Projects';

import { PanelConsumer } from '../contexts/panel-context';

import './SlidingPanel.scss';

const renderStep = (step, updateStep) => {
  switch(step) {
    case 'onboarding': 
      return <Onboarding />
    case 'projects':
      return <Projects />
    default:
      return <Onboarding />
  }
}

const SlidingPanel = () => (
  <PanelConsumer>
    {panelContext => (
      <div className="sliding-panel">
        {renderStep(panelContext.step)}
      </div>
    )}
  </PanelConsumer>
);

export default SlidingPanel;