import React, { Component } from 'react';
import logo from './pencil.svg';
import './App.css';
import List from './List';
import uuid from 'uuid/v4';

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
    const newAssignments = this.state.assignments.slice(0).concat([{
      text: this.state.newItemValue,
      completed: false,
      id: uuid()
    }]);
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
  onItemCompleteClick(id, e) {
    console.log('You completed item with id ', id);
    var newAssignments = this.state.assignments.slice(0).map((item)=>{
      if(item.id === id) {
        return Object.assign(item, {
          completed: !item.completed
        })
      } else {
        return item;
      }
    });

    this.setState({
      assignments: newAssignments
    });
    localStorage.setItem('assignmenttracker:assignments', JSON.stringify(newAssignments));
  }
  onItemDeleteClick(id, e) {

    // // Determine which items to keep
    // var head = this.state.assignments.slice(0, index);
    // var tail = this.state.assignments.slice(index+1);
    //
    // // Join the items we're keeping in an array
    // var newAssignments = head.concat(tail);
    var newAssignments = this.state.assignments.filter((item) => {
      return item.id !== id;
    });

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
        <List
          items={this.state.assignments}
          onItemDeleteClick={this.onItemDeleteClick.bind(this)}
          onItemCompleteClick={this.onItemCompleteClick.bind(this)}
          />
      </div>
    );
  }
}

export default App;
