import React, { useState } from 'react';

import './Terminal.scss';

const Terminal = () => {
  const [isActive, setIsActive] = useState(false);
  const [commandHistory, setCommandHistory] = useState([]);
  const [command, setCommand] = useState('');
  const [hint, setHint] = useState('Type "help" if you are lost');

  const handleInputChange = e => setCommand(e.target.value);

  return (
    <div className="terminal">
      <div className="terminal__navbar">
        <span className="terminal__navbar-close" />
      </div>
      <div className="terminal__screen">
        <p className="terminal__screen-hint"></p>
        <div className="terminal__screen-results"></div>
      </div>
      <div className="terminal__actions">
        <span className="terminal__actions-symbol">$ C:\users\guest</span>
        <input autofocus="true" className="terminal__actions-command" type="text" value={command} onChange={handleInputChange}/>
      </div>
    </div>
  )
}

export default Terminal;
