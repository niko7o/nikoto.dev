import React from 'react';

const availableCommands = ['about', 'team', 'skills'];

export const commandHelperHints = {
  'help': {
    result: `[available commands are]: ${Object.values(availableCommands)}`
  },
  'about': {
    result: 'Based in Madrid. Software Engineer. Worst engineer at the company but third coolest.'
  },
  'team': {
    result: <img loading="eager" src="./images/broccoli.png" alt="brocolli" width="50"/>
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
  },
  'whois weapon': {
    result: <img src="./images/avatar-niko.jpg" alt="weapon" width="100"/>
  },
}