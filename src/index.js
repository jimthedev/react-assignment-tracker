import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import moment from 'moment';
import uuid from 'uuid/v4';
import './index.css';

let lastSeen = JSON.parse(localStorage.getItem('assignmenttracker:lastseen'));
var lastMoment = moment(lastSeen);
var thisMoment = moment();
var numDaysBetween = moment.duration(lastMoment.diff(thisMoment)).asDays();

let assignments = JSON.parse(localStorage.getItem('assignmenttracker:assignments'));
if(!assignments || assignments.length===0 || (numDaysBetween && numDaysBetween <= -1)) {
  assignments = [
    'Create react app ',
    'Forget jquery',
    'Prepare for presentation'
  ];

  //

  assignments = [
    {
      text: 'Create react app',
      completed: false,
      id: uuid()
    }, {
      text: 'Forget jquery',
      completed: false,
      id: uuid()
    }, {
      text: 'Prepare for presentation',
      completed: false,
      id: uuid()
    }
  ];
}

ReactDOM.render(
  <App assignments={assignments} />,
  document.getElementById('root')
);

window.setInterval(function(){
  localStorage.setItem('assignmenttracker:lastseen', JSON.stringify(moment()));
}, 2000)
