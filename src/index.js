import React from 'react';
import ReactDOM from 'react-dom';

import Homepage from './components/Homepage';

import './resets.css';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Homepage />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
