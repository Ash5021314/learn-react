import React, { Component } from 'react';

import './todo-list-item.css';
class TodoListItem extends Component {
  onlabelClick = () => {

    console.log(`Done ${this.props.label}`);
  }

  render() {

    const { label, important = false } = this.props;

    let classNames = 'todo-list-item';
    // if (important) {
    //   classNames += ' important';
    // }
    // if (done) {
    //   classNames += ' done';
    // }
    return (
      <span className={classNames} >
        <span
          className="todo-list-item-label"
          onClick={this.onlabelClick}>{label}</span>

        <button type="button"
          className="btn btn-outline-success btn-sm float-right">
          <i className="fa fa-exclamation"></i>
        </button>

        <button type="button"
          className="btn btn-outline-danger btn-sm float-right"
        >
          <i className="fa fa-trash-o"></i>
        </button>
      </span>
    );
  }
}

export default TodoListItem;
