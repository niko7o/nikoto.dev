import React from 'react';

const availableCommands = ['about', 'team', 'skills', 'projects', 'clear'];

export const commandHelperHints = {
  'help': {
    result: 
    <>
      <p>[available commands are]:</p>
      <p>- home</p>
      <p>- about</p>
      <p>- contact</p>
      <p>- team</p>
      <p>- skills</p>
      <p>- projects</p>
      <p>- clear</p>
    </>
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
  'contact': {
    result: 'Liked this experiment? Send me an invite on linkedin with the code word "terminalsrock" and we can connect.'
  },
  'whois weapon': {
    result: <img src="./images/avatar-niko.jpg" alt="weapon" width="100"/>
  },
  'home': {
    result: 'Navigated to home.'
  },
  'projects': {
    result: 'Navigated to projects. This section is still under construction. Feel free to check back on it later! You can go back to the first screen by writing "home"'
  }
}