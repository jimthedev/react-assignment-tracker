import React, { Component } from 'react';

export default class AssignmentPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      assignments: this.props.assignments,
      newInputValue: 'hello, Sam'
    }
  }
  onAssignmentClick(index, e) {
    var head = this.state.assignments.slice(0, index);
    var tail = this.state.assignments.slice(index + 1, this.state.assignments.length);
    this.setState({
      assignments: head.concat(tail)
    })
  }
  onNewItemSubmit(e) {
    e.preventDefault();
    var newAssignments = this.state.assignments.concat([this.state.newInputValue])
    this.setState({
      assignments: newAssignments,
      newInputValue: ''
    })
  }
  onNewInputChange(e) {
    e.preventDefault();
    this.setState({
      newInputValue: e.target.value
    });
  }

  render() {
    return(
      <div>
        Instructor: {this.props.instructor}
        <form onSubmit={this.onNewItemSubmit.bind(this)}>
        <input onChange={this.onNewInputChange.bind(this)} placeholder="put poopy things here" value={this.state.newInputValue} />
          <button>push this thing.</button>
        </form>
        <ul>
          {this.state.assignments.map((assignment, index) => {
            return (
              <li key={index} onClick={this.onAssignmentClick.bind(this, index)}>{assignment}</li>
            )
          })}
        </ul>
      </div>
    )
  }
}
