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
    result: 'Based in Madrid. Software Engineer. Worst engineer at the company but third coolest.'
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

const PATH_PREFIX = "C:\\users\\guest";

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
          {commandHistory.map((cmd, i) => (
            <div className="terminal__screen-row" key={`${cmd}${i}`}>
              <p className="terminal__command">{`${PATH_PREFIX} - ${cmd}`}</p>
              <p className="terminal__result">{commands[cmd] && commands[cmd].result || 'Command not found. Type "help" for more info.'}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="terminal__actions" onKeyDown={handleKeyPressed}>
          <span className="terminal__actions-symbol">{`$ ${PATH_PREFIX}`}</span>
        <input tabIndex="0" autoFocus className="terminal__actions-command" type="text" value={command} onChange={handleInputChange}/>
      </div>
    </div>
  )
}

export default Terminal;
