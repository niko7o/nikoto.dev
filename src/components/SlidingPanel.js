import React from 'react';
import PropTypes from 'prop-types';

import Onboarding from './Onboarding';

const renderStep = step => {
  switch(step) {
    case 'onboarding': 
      return <Onboarding />
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