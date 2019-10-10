import React from 'react';
import ReactDom from 'react-dom'

import './index.css';

const User = ({name, surname}) => {

  return (
    <>
      <h1>This is a User</h1>
      <h3>name: {name}</h3>
      <h3>surname: {surname}</h3>
    </>
  )
} 

function App() {
  return (
    <>
      <h2>React</h2>
      <User name='Sam' surname='Asatryan'/>
      <User name='Ash' surname='Poghosyan'/>
    </>
  );
}

ReactDom.render(<App/>, document.getElementById('root'))
