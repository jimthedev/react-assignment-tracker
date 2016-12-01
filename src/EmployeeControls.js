import React, { Component } from 'react';

export class Copy extends Component {
  render() {
    return (
      <button>Copy</button>
    )
  }
}

export class Move extends Component {
  render() {
    return (
      <button>Move</button>
    )
  }
}

export class Delete extends Component {
  render() {
    return (
      <button>Delete</button>
    )
  }
}

export default class EmployeeControls extends Component {
  render() {
    return (
      <div style={{color: '#1560fb'}}>
        Employee only controls: 
        <Copy />
        <Move />
        <Delete />
      </div>

    )
  }
}
