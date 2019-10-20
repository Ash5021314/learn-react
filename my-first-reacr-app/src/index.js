import React from 'react';
import ReactDom from 'react-dom';

import App from './App';

// function ToDoItem() {
//     return (
//         <form>
//             <label>Username</label>
//             <input type="text" />
//             <label> Passworld</label>
//             <input type="password" />
//             <button type="password">Login</button>
//         </form>
//     );
// }

// function ToDoList() {
//     return (<ToDoItem />
//     );
// }

ReactDom.render(<App />, document.getElementById('root'));