import React, {useState} from 'react'
import TodoList from '../todo-list'
import SearchPanel from '../search-panel'
import ItemStatusFilter from '../item-status-file'
import AppHeader from '../app-header'
import AddItem from "../Additem"
import './app.css'

const App = () => {
  let maxId = 100
  const [todoData, setTodoData] = useState([
    {label: 'Drink Coffee', important: false, id: 1},
    {label: 'Make awesome App', important: true, id: 2},
    {label: 'Have a lunch', important: false, id: 3},
  ])
  const deleteItem = (id) => {
    const idx = todoData.findIndex((el) => el.id === id)
    const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)]
    setTodoData(newArray)
  }
  const addItem = (text) => {
    const newItem = {
      label: text,
      important: false,
      id: maxId++
    }

    setTodoData(({todoData}) => {
      const newArr = [
        ...todoData,
        newItem
      ]
      return {
        todoData: newArr
      }
    })
  }
  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3}/>
      <SearchPanel/>
      <ItemStatusFilter/>
      <TodoList
        todos={todoData}
        onDeleted={deleteItem}
      />
      <AddItem onItemAdded={addItem}/>
    </div>
  )
}


// class App extends Component {
//   state = {
//     todoData: [
//       {label: 'Drink Cofee', important: false, id: 1},
//       {label: 'Make awesome App', important: true, id: 2},
//       {label: 'Have a lunch', important: false, id: 3},
//     ]
//   }
//   deleteItem = (id) => {
//     this.setState(({todoData}) => {
//       const idx = todoData.findIndex((el) => el.id === id)
//       const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)]
//       return {
//         todoData: newArray
//       }
//     })
//   }
//
//   render() {
//     return (
//
//       <div className="todo-app">
//         <AppHeader toDo={1} done={3}/>
//         <SearchPanel/>
//         <ItemStatusFilter/>
//         <TodoList
//           todos={this.state.todoData}
//           onDeleted={this.deleteItem}
//         />
//       </div>
//     )
//   }
// }


// const App = () => {
//   const todoData = [
//     {label: 'Drink Cofee', important: false, id: 1},
//     {label: 'Make awesome App', important: true, id: 2},
//     {label: 'Have a lunch', important: false, id: 3},
//   ]
//   return (
//     <div className="todo-app">
//       <AppHeader toDo={1} done={3}/>
//       <SearchPanel/>
//       <ItemStatusFilter/>
//       <TodoList
//         todos={todoData}
//         onDeleted={(id) => console.log('del', id)}
//       />
//     </div>
//   )
// }
export default App