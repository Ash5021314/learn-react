import React from 'react'
import useSignUpForm from './CustomHooks'
import './Style.css'

let registeredUsers

let retrievedObject
const Form = () => {
  const signup = () => {
    let onlyLetters = /^[a-zA-Z]*$/
    let mailReg = /^[^@]+@[^@]+$/
    if (inputs.firstname === "" || inputs.lastName === "" || inputs.email === "" || inputs.password1 === '' || inputs.password2 === "") {
      alert(`Please Fill in all the fields`)
      return
    } else if (inputs.password !== inputs.password2) {
      alert("Password must be the same with re-password")
      return
    } else if (inputs.password.length <= 7) {
      alert("Password must be more than 7 characters")
      return
    } else if (inputs.password.match(onlyLetters)) {
      alert("you must enter at least one character except letters")
      return
    } else if (!inputs.email.match(mailReg)) {
      alert("please enter valid email")
      return
    } else {
      alert(`User created!
      Name: ${inputs.firstname} ${inputs.password}
      Email: ${inputs.email}`)
    }
    registeredUsers = {
      email: inputs.email,
      password: inputs.password
    }
    retrievedObject = JSON.parse(localStorage.getItem('itemsArray')) || []
    retrievedObject.push(registeredUsers)
    localStorage.setItem('itemsArray', JSON.stringify(retrievedObject))
  }
  const { inputs, handleInputChange, handleInputSubmit } = useSignUpForm(signup)
  return (
    <>
      <form className="regForm" onSubmit={handleInputSubmit}>
        <input type='text' autoComplete="off" placeholder="First Name" name='firstname' onChange={handleInputChange}
          value={inputs.firstName} />
        <input type='text' autoComplete="off" placeholder="Last Name" name='lastname' onChange={handleInputChange}
          value={inputs.lastName} />
        <input type='text' autoComplete="off" placeholder="Email Address" name='email' onChange={handleInputChange}
          value={inputs.email} />
        <input type='password' placeholder="password" name='password' onChange={handleInputChange}
          value={inputs.password1} />
        <input type='password' placeholder="re-password" name='password2' onChange={handleInputChange}
          value={inputs.password2} />
        <button type='submit'>Sign In</button>
      </form>
    </>
  )
}

export default Form