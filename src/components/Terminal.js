import React, { useState } from 'react';

import './Terminal.scss';

const commands = {
  'help': {
    result: '[available commands are]: skills, about'
  },
  'whois weapon': {
    result: <img src="./images/avatar-niko.jpg" width="100"/>
  },
  'about': {
    result: 'Software Engineer from Belgium. Data freak. Clean code fanatic.'
  },
  'skills': {
    result: 
    <>
      <p>Frontend: React, React Native, Redux</p>
      <p>Backend & DB: Node.js + Mongo</p>
      <p>Testing: Jest, Cypress, Detox</p>
      <p>Other: Test driven development, BDD, Kibana, Grafana</p>
    </>
  },
  'clear': {
    result: ''
  }
}

const Terminal = () => {
  const [commandHistory, setCommandHistory] = useState([]);
  const [command, setCommand] = useState('');

  const handleInputChange = e => setCommand(e.target.value);

  const clearCommandEmitter = () => setCommand('');

  const handleKeyPressed = ({ key }) => {
    if (key === 'Enter') {
      commandHistory.push(command);
      clearCommandEmitter();
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
            <div className="terminal__screen-row" key={`${pastCommand}${i}`}>
              <p className="terminal__command">C:\users\guest - {pastCommand}</p>
              <p className="terminal__result">{commands[pastCommand] && commands[pastCommand].result || 'Command not found. Type "help" for more info.'}</p>
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
