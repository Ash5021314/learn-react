import React from 'react'
import useForm from './useForm'

const Login = () => {
  // let stored = JSON.parse(localStorage.getItem("itemsArray") || '[]')
  //
  // if (stored.filter(({email, password}) => {
  //   return email === values.email && password === values.password
  // }).length) {
  //   alert("Login is successful")
  // } else {
  //   alert("wrong email or password")
  // }

  const {values, handleChange, handleSubmit} = useForm(Login)
  return (
    <form className="loginForm" onSubmit={handleSubmit}>
      <div className="field">
        <input type='email' autoComplete="off" placeholder="Email Address" name='email' onChange={handleChange}
               value={values.email}/>
      </div>
      <div className="field">
        <input type='password' placeholder="password" name='password' onChange={handleChange}
               value={values.password}/>
      </div>
      <button type="submit" className="button is-block is-info is-fullwidth">Login</button>
    </form>

  )
}
export default Login