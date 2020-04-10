import React from 'react';

import Onboarding from './panels/Onboarding';
import Projects from './panels/Projects';

import { PanelConsumer } from '../contexts/panel-context';

import './SlidingPanel.scss';

const SlidingPanel = () => {
  const renderStep = step => {
    switch(step) {
      case 'onboarding': 
        return <Onboarding />
      case 'projects':
        return <Projects />
      default:
        return <Onboarding />
    }
  }

  return (
    <PanelConsumer>
      {panelContext => (
        <div className="sliding-panel">
          {renderStep(panelContext.step)}
        </div>
      )}
    </PanelConsumer>
  );
}

export default SlidingPanel;