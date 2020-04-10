import React, { useState } from 'react';

import './Terminal.scss';

const commands = {
  'help': {
    result: 'What do you need help with?'
  },
  'marco': {
    result: 'polo'
  }
}

const Terminal = () => {
  const [commandHistory, setCommandHistory] = useState([]);
  const [command, setCommand] = useState('');

  const handleInputChange = e => setCommand(e.target.value);

  const clearCommandEmitter = () => setCommand('');

  let result;

  const handleKeyPressed = ({ key }) => {
    switch(key) {
      case 'Enter':
        commandHistory.push(command);
        console.log(commands[command].result)
        clearCommandEmitter();
        break;
      default: 
        return;
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
          {commandHistory.map((pastCommand, i) => (
            <div className="terminal__screen-row" key={`com-${pastCommand}-${i}`}>
              <p className="terminal__command">C:\users\guest\{pastCommand}</p>
              <p className="terminal__result">{commands[pastCommand].result || ''}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="terminal__actions" onKeyDown={handleKeyPressed}>
        <span className="terminal__actions-symbol">$ C:\users\guest</span>
        <input tabIndex="0" autoFocus className="terminal__actions-command" type="text" value={command} onChange={handleInputChange}/>
      </div>
    </div>
  )
}

export default Terminal;
