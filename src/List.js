import React, { Component } from 'react';
import './List.css';

export default class List extends Component {
  render() {
    return (
      <div className="List">
        {this.props.items && this.props.items.length < 1 ? <div>You have no assignments.</div> : null }
        <ul className="List__items">
          {this.props.items.slice(0).reverse().map((item, index) => {
            // Return a new li for each item
            return (<li
              className="List__item"
              key={index}
              >
                <span className="item__text" style={{textDecoration: item.completed ? 'line-through' : 'none'}} onClick={this.props.onItemCompleteClick.bind(this, item.id)}>{item.text}</span>
                <i className="ion-trash-a" onClick={this.props.onItemDeleteClick.bind(this, item.id)}></i>
              </li>)
          })}
        </ul>
      </div>
    );
  }
}
