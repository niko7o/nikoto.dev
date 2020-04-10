import React from 'react';
import PropTypes from 'prop-types';

import Onboarding from './Onboarding';
import Projects from './Projects';

import './SlidingPanel.scss';

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

const SlidingPanel = ({ step, children }) => (
  <>
    {renderStep(step)}
  </>
);

SlidingPanel.propTypes = {
  step: PropTypes.string
}

SlidingPanel.defaultProps= {
  step: 'onboarding'
}

export default SlidingPanel;