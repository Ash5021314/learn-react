import React from 'react';
import useForm from './useForm';
import useSignUpForm from './CustomHooks';

let a = new Array();
const Form = () => {
  function login() {
    if (values.email === inputs.email && values.password === inputs.password) {
      alert("aaa");
    }
    else {
      alert("bbb")
    }

  }
  const { values, handleChange, handleSubmit } = useForm(login);

  const signup = () => {
    alert(`User created!
    Name: ${inputs.firstname} ${inputs.password}
    Email: ${inputs.email}`)

    a.push(inputs.email, inputs.password);
    // console.log(a)
  }
  const { inputs, handleInputChange, handleInputSubmit } = useSignUpForm(signup);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Email address</label>
          <input type='email' name='email' onChange={handleChange} value={values.email} required />

        </div>
        <div className="field">
          <label className="label">Password</label>
          <input type='password' name='password' onChange={handleChange} value={values.password} required />
        </div>
        <button type="submit" className="button is-block is-info is-fullwidth">Login</button>
      </form>


      <form onSubmit={handleInputSubmit} >
        <div>
          <label>First Name</label>
          <input type='text' name='firstname' onChange={handleInputChange} value={inputs.firstName} required />
          <label>Last Name</label>
          <input type='text' name='lastname' onChange={handleInputChange} value={inputs.lastName} required />
        </div>
        <div>
          <label>Email Address</label>
          <input type='email' name='email' onChange={handleInputChange} value={inputs.email} required />
        </div>
        <div>
          <label>Password</label>
          <input type='password' name='password' onChange={handleInputChange} value={inputs.password1} required />
        </div>
        <div>
          <label>Re-assword</label>
          <input type='password' name='password2' onChange={handleInputChange} value={inputs.password2} required />
        </div>
        <button type='submit'>Sign In</button>
      </form>
    </>
  );
};

export default Form;