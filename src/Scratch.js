import React, { Component } from 'react';
import EmployeeControls, { Move, Delete } from './EmployeeControls';

class Scratch extends Component {
  render() {
    return (
      <div>
        <button>Hello customer person</button>
        <EmployeeControls />
        <ul>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </ul>
        <Move /><Delete />
      </div>
    )
  }
}
export default Scratch;
