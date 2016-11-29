import React, { Component } from 'react';
import './List.css';

export default class List extends Component {
  render() {
    return (
      <div className="List">
        {this.props.items && this.props.items.length < 1 ? <div>You have no assignments.</div> : null }
        <ul className="List__items">
          {this.props.items.map((item, index) => {
            // Return a new li for each item
            return (<li
              className="List__item"
              key={index}
              onClick={this.props.onItemClick.bind(this, index)}>
                {item}
              </li>)
          })}
        </ul>
      </div>
    );
  }
}
