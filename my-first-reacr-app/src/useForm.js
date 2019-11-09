import {useState} from 'react'

const useForm = (callback) => {

  const [values, setValue] = useState({})
  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault()
    }
    let stored = JSON.parse(localStorage.getItem("itemsArray") || '[]')

    if (stored.filter(({email, password}) => {
      return email === values.email && password === values.password
    }).length) {
      alert("Login is successful")
    } else {
      alert("wrong email or password")
    }
    callback()
  }
  const handleChange = (event) => {
    event.persist()
    setValue(values => ({...values, [event.target.name]: event.target.value}))
  }
  return {
    handleChange,
    handleSubmit,
    values
  }
}
export default useForm