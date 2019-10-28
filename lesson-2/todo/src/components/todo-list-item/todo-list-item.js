import React, {Component, useState} from 'react'

import './todo-list-item.css'

const TodoListItem = ({label, onDeleted}) => {
  const [done, setDone] = useState(false)
  const [important, setImportant] = useState(false)
  const handleChanges = () => {
    setDone(!done)
  }
  const handleImportant = () => {
    setImportant(!important)
  }

  let classNames = 'todo-list-item'
  if (important) {
    classNames += ' important'
  }
  if (done) {
    classNames += ' done'
  }
  return (
    <span className={classNames}>
      <span
        className="todo-list-item-label "
        onClick={handleChanges}>{label}</span>

      <button type="button"
              onClick={handleImportant} className="btn btn-outline-success btn-sm float-right">
        <i className="fa fa-exclamation"/>
      </button>

      <button type="button"
              onClick={onDeleted}
              className="btn btn-outline-danger btn-sm float-right"
      >
        <i className="fa fa-trash-o"/>
      </button>
    </span>
  )
}


// class TodoListItem extends Component {
//   state = {
//     done: false
//   };
//   onlabelClick = () => {
//     this.setState({
//       done: true
//     });
//   };

//   render() {

//     const { label, important = false } = this.props;
//     const { done } = this.state;
//     let classNames = 'todo-list-item';
//     // if (important) {
//     //   classNames += ' important';
//     // }
//     if (done) {
//       classNames += ' done';
//     }
//     return (
//       <span className={classNames} >
//         <span
//           className="todo-list-item-label "
//           onClick={this.onlabelClick}>{label}</span>

//         <button type="button"
//           className="btn btn-outline-success btn-sm float-right">
//           <i className="fa fa-exclamation"></i>
//         </button>

//         <button type="button"
//           className="btn btn-outline-danger btn-sm float-right"
//         >
//           <i className="fa fa-trash-o"></i>
//         </button>
//       </span>
//     );
//   }
// }


export default TodoListItem
