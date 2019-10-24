import React from 'react';
import useForm from './useForm';
import useSignUpForm from './CustomHooks';
import Style from './Style.css'

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
    let onlyLetters = /^[a-zA-Z]*$/;
    let mailReg = /^[^@]+@[^@]+$/
    if (inputs.firstname == "" || inputs.lastName == "" || inputs.email == "" || inputs.password1 == '' || inputs.password2 == "") {
      alert(`Please Fill in all the fields`);
      return
    }
    else if (inputs.password !== inputs.password2) {
      alert("Password must be the same with re-password");
      return
    }
    else if (inputs.password.length <= 7) {
      alert("Password must be more than 7 characters");
      return
    }
    else if (inputs.password.match(onlyLetters)) {
      alert("you must enter at least one character except letters");
      return
    }
    else if (!inputs.email.match(mailReg)) {
      alert("please enter valid email");
      return
    }
    else {
      alert(`User created!
      Name: ${inputs.firstname} ${inputs.password}
      Email: ${inputs.email}`)
    }

    a.push(inputs.email, inputs.password);
    // console.log(a)
  }
  const { inputs, handleInputChange, handleInputSubmit } = useSignUpForm(signup);
  return (
    <>
      <form className="loginForm" onSubmit={handleSubmit}>
        <div className="field">
          <input type='email' autoComplete="off" placeholder="Email Address" name='email' onChange={handleChange} value={values.email} />
        </div>
        <div className="field">
          <input type='password' placeholder="password" name='password' onChange={handleChange} value={values.password} />
        </div>
        <button type="submit" className="button is-block is-info is-fullwidth">Login</button>
      </form>

      <form className="regForm" onSubmit={handleInputSubmit} >

        <input type='text' autoComplete="off" placeholder="First Name" name='firstname' onChange={handleInputChange} value={inputs.firstName} />
        <input type='text' autoComplete="off" placeholder="Last Name" name='lastname' onChange={handleInputChange} value={inputs.lastName} />
        <input type='text' autoComplete="off" placeholder="Email Address" name='email' onChange={handleInputChange} value={inputs.email} />
        <input type='password' placeholder="password" name='password' onChange={handleInputChange} value={inputs.password1} />
        <input type='password' placeholder="re-password" name='password2' onChange={handleInputChange} value={inputs.password2} />
        <button type='submit' >Sign In</button>
      </form>
    </>
  );
};

export default Form;