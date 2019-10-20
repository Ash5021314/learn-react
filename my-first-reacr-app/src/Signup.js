// import React from 'react';
// import useSignUpForm from './CustomHooks';
// let a;
// const Signup = () => {
//     const signup = () => {
//         alert(`User created!
//                 Name: ${inputs.firstname} ${inputs.password}
//                 Email: ${inputs.email}`)
//         a = new Array();
//         a.push(inputs.email, inputs.password);
//     }
//     const { inputs, handleInputChange, handleSubmit } = useSignUpForm(signup);
//     return (
//         <form onSubmit={handleSubmit} >
//             <div>
//                 <label>First Name</label>
//                 <input type='text' name='firstname' onChange={handleInputChange} value={inputs.firstName} required />
//                 <label>Last Name</label>
//                 <input type='text' name='lastname' onChange={handleInputChange} value={inputs.lastName} required />
//             </div>
//             <div>
//                 <label>Email Address</label>
//                 <input type='email' name='email' onChange={handleInputChange} value={inputs.email} required />
//             </div>
//             <div>
//                 <label>Password</label>
//                 <input type='password' name='password' onChange={handleInputChange} value={inputs.password1} required />
//             </div>
//             <div>
//                 <label>Re-assword</label>
//                 <input type='password' name='password2' onChange={handleInputChange} value={inputs.password2} required />
//             </div>
//             <button type='submit'>Sign In</button>
//         </form>
//     );
// }
// export default Signup;