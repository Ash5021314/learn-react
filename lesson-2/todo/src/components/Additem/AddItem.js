import React, {useState} from 'react'
import './Additem.css'

const AddItem = ({onItemAdded}) => {
  const [targetValue, setTargetValue] = useState({
    label: ''
  })
  const onLabelChange = (e) => {
    setTargetValue({
      label: e.target.value
    })
  }
  const onSubmit = (e) => {
    e.preventDefault()
    onItemAdded(targetValue.label)
    setTargetValue({
      label: ''
    })
  }
  return (
    <form onSubmit={onSubmit}>

      <input type="text" className="form-control" onChange={onLabelChange} placeholder='what need to be done'
             value={targetValue.label}/>
      <button className='addItem'>Add item</button>
    </form>
  )
}
export default AddItem