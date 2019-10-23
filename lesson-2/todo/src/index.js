import React from 'react';
import ReactDom from 'react-dom';
import AppHeader from './components/app-header';
import SearchPannel from './components/search-pannel';
import TodoList from './components/todo-list';



const App = () => {
    const todoData = [
        {label: 'Drink Cofee', important: false},
        {label: 'Make awesome App', important: true},
        {label: 'Have a lunch', important: false},
    ];
    return (
        <div>
            <AppHeader />
            <SearchPannel />
            <TodoList  todos = {todoData}/>
        </div>
    )
}

ReactDom.render(<App />, document.getElementById('root'))