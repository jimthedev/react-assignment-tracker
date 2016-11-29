import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App assignments={[
    'Create react app',
    'Forget jquery',
    'Prepare for presentation'
  ]} />,
  document.getElementById('root')
);
