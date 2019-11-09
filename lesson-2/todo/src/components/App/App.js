import React, {useState} from 'react'
import TodoList from '../todo-list'
import SearchPanel from '../search-panel'
import ItemStatusFilter from '../item-status-file'
import AppHeader from '../app-header'
import AddItem from "../Additem"
import './app.css'

const App = () => {
  let maxId = 100
  const createTodoItem = (label) => {
    return {
      label,
      important: false,
      done: false,
      id: maxId++
    }
  }
  const [todoData, setTodoData] = useState([
    createTodoItem('Drink Coffee'),
    createTodoItem('Make awesome App'),
    createTodoItem('Have a lunch')
  ])
  const deleteItem = (id) => {
    const idx = todoData.findIndex((el) => el.id === id)
    const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)]
    setTodoData(newArray)
  }
  const addItem = (text) => {
    const newItem = createTodoItem(text)
    console.log(newItem)
    const newArr = [...todoData, newItem]
    setTodoData(newArr)
  }

  const onToggleImportant = (id) => {
    setTodoData((todoData) => {
      return toggleProperty(todoData, id, 'important')
    })
  }
  const toggleProperty = (arr, id, propName) => {
    const idx = arr.findIndex((el) => el.id === id)
    const oldItem = arr[idx]

    const newItem = {...oldItem, [propName]: !oldItem[propName]}
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)]

  }
  const onToggleDone = (id) => {
    setTodoData((todoData) => {
      return toggleProperty(todoData, id, 'done')
    })

  }
  const doneCount = todoData.filter((el) => el.done).length
  const todoCount = todoData.length - doneCount
  return (
    <div className="todo-app">
      <AppHeader toDo={todoCount} done={doneCount}/>
      <SearchPanel/>
      <ItemStatusFilter/>
      <TodoList
        todos={todoData}
        onDeleted={deleteItem}
        onToggleImportant={onToggleImportant}
        onToggleDone={onToggleDone}

      />
      <AddItem onItemAdded={addItem}/>
    </div>
  )
}


export default App