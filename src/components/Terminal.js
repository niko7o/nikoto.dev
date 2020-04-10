/* eslint-disable no-mixed-operators */
import React, { useState } from 'react';

import { commandHelperHints } from '../utils/terminal';

import './Terminal.scss';

const TERMINAL_PATH_PREFIX = "/dev/guest";

const Terminal = ({ panelContext }) => {
  const [commandHistory, setCommandHistory] = useState([]);
  const [command, setCommand] = useState('');

  const handleInputChange = e => 
    setCommand(e.target.value);

  const handleTerminalKeyPressed = ({ key }) => {
    const hasPressedEnter = key === 'Enter';
    
    if (command && key === 'Enter') {
      commandHistory.push(command);
      setCommand('');
    }

    if (command === 'home' && hasPressedEnter) {
      panelContext.updateStep('onboarding')
    }

    if (command === 'projects' && hasPressedEnter) {
      panelContext.updateStep('projects')
    }

    if (command === 'clear' && hasPressedEnter) {
      setCommandHistory([]);
    }
  }

  return (
    <div className="terminal">
      <div className="terminal__navbar">
        <span className="terminal__navbar-close" />
      </div>
      <div className="terminal__screen">
        <p className="terminal__screen-hint"></p>
        <div className="terminal__screen-results">
          {commandHistory && commandHistory.map((cmd, i) => (
            <div className="terminal__screen-row" key={`${cmd}${i}`}>
              <p className="terminal__command">
                {`${TERMINAL_PATH_PREFIX} → ${cmd}`}
              </p>
              <p className="terminal__result">
                {
                  commandHelperHints[cmd] && commandHelperHints[cmd].result 
                  || 'Command not found. Type "help" for more info.'
                }
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="terminal__actions" onKeyDown={handleTerminalKeyPressed}>
          <span className="terminal__actions-symbol">{`$ ${TERMINAL_PATH_PREFIX}`}</span>
          <input 
            autoFocus 
            type="text" 
            className="terminal__actions-command" 
            value={command}
            onChange={handleInputChange}
            tabIndex="0"
          />
      </div>
    </div>
  )
}

export default Terminal;
