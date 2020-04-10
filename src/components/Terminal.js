/* eslint-disable no-mixed-operators */
import React, { useState } from 'react';

import { commandHelperHints } from '../utils/terminal';

import { PanelConsumer } from '../contexts/panel-context';

import './Terminal.scss';

const PATH_PREFIX = "/dev/guest";

const Terminal = ({ panelContext }) => {
  const [commandHistory, setCommandHistory] = useState([]);
  const [command, setCommand] = useState('');

  const handleInputChange = e => 
    setCommand(e.target.value);

  const clearCommandEmitter = () => 
    setCommand('');

  const handleTerminalKeyPressed = ({ key }) => {
    const hasPressedEnter = key === 'Enter';
    
    if (command && key === 'Enter') {
      commandHistory.push(command);
      clearCommandEmitter();
    }

    if (command === 'about' && hasPressedEnter) {
      panelContext.updateStep('onboarding')
    }

    if (command === 'projects' && hasPressedEnter) {
      panelContext.updateStep('projects')
    }
  }

  return (
    <PanelConsumer>
      {panelContext => (
        <div className="terminal">
          <div className="terminal__navbar">
            <span className="terminal__navbar-close" />
          </div>
          <div className="terminal__screen">
            <p className="terminal__screen-hint"></p>
            <div className="terminal__screen-results">
              {commandHistory.map((cmd, i) => (
                <div className="terminal__screen-row" key={`${cmd}${i}`}>
                  <p className="terminal__command">
                    {`${PATH_PREFIX} → ${cmd}`}
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
              <span className="terminal__actions-symbol">{`$ ${PATH_PREFIX}`}</span>
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
      )}
    </PanelConsumer>
  )
}

export default Terminal;
