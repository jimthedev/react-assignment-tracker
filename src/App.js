import React, { Component } from 'react';
import logo from './pencil.svg';
import './App.css';
import List from './List';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      assignments: props.assignments,
      newItemValue: ''
    };
  }
  onNewItemFormSubmit(e) {
    e.preventDefault();
    const newAssignments = this.state.assignments.slice(0).concat([this.state.newItemValue]);
    this.setState({
      assignments: newAssignments,
      newItemValue: ''
    });
    // Stores some items
    localStorage.setItem('assignmenttracker:assignments', JSON.stringify(newAssignments));
  }
  onNewItemValueChanged(e) {
    this.setState({
      newItemValue: e.target.value
    })
  }
  onItemClick(index, e) {

    // Determine which items to keep
    var head = this.state.assignments.slice(0, index);
    var tail = this.state.assignments.slice(index+1);

    // Join the items we're keeping in an array
    var newAssignments = head.concat(tail);

    this.setState({
      assignments: newAssignments
    });
    localStorage.setItem('assignmenttracker:assignments', JSON.stringify(newAssignments));
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Assignments</h2>
        </div>
        <form onSubmit={this.onNewItemFormSubmit.bind(this)}>
          <input
            className="App__new-assignment"
            type="text"
            tabIndex="0"
            value={this.state.newItemValue}
            placeholder="Record an assignment..."
            onChange={this.onNewItemValueChanged.bind(this)} />
        </form>
        <List items={this.state.assignments} onItemClick={this.onItemClick.bind(this)} />
      </div>
    );
  }
}

export default App;
