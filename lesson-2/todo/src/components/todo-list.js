import React, { useState } from 'react';
import TodoListItem from './todo-list-item';
const TodoList = ({ todos }) => {
    const items = ['learn react', 'Bulid Awesome App'];
    // const [important, setImportant] = useState(false)
    // const handleOnChange = (event) => {
    //     setImportant(event.target.checked);
    // }
    const elements = todos.map((item) => {
        return (
            <li>
                <TodoListItem {...item} />
                {/* <input type="checkbox" name="coffee" onChange={handleOnChange} /> */}
            </li>
        )
    })
    return (
        <ul>
            {elements}
        </ul>
    )
}
export default TodoList;