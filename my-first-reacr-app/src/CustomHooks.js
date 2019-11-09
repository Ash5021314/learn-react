import {useState} from 'react'

const useSignUpForm = (callback) => {
  const [inputs, setInputs] = useState({})
  const handleInputSubmit = (event) => {
    if (event) {
      event.preventDefault()
    }
    callback()

  }
  const handleInputChange = (event) => {
    event.persist()
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value
    }))
  }

  return {
    handleInputSubmit,
    handleInputChange,
    inputs
  }

}
export default useSignUpForm