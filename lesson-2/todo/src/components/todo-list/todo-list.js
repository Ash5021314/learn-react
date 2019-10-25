import React, { useState } from 'react';
import TodoListItem from '../todo-list-item/todo-list-item';
import './todo-list.css'
const TodoList = ({ todos }) => {
    const items = ['learn react', 'Bulid Awesome App'];
    // const [important, setImportant] = useState(false)
    // const handleOnChange = (event) => {
    //     setImportant(event.target.checked);
    // }
    const elements = todos.map((item) => {
        const { id, ...itemProps } = item;
        return (
            <li key={id} className="list-group-item">
                <TodoListItem {...itemProps} />
                {/* <input type="checkbox" name="coffee" onChange={handleOnChange} /> */}
            </li>
        )
    })
    return (
        <ul className="list-group todo-list">
            {elements}
        </ul>
    )
}
export default TodoList;