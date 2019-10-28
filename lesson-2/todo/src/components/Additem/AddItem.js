import React from 'react'
import './Additem.css'

const AddItem = ({onItemAdded}) => {
  return (

    <button onClick={() => onItemAdded("hello World")} className='addItem'>Add item</button>
  )
}
export default AddItem