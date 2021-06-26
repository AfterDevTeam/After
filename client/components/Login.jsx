import React from 'react';
import { useState } from 'react';
import { Button } from '@material-ui/core';
import '../css/login.css';

const Login = (props) => {

  // usestate hook to update state
  const [ inputUsername, setInputUsername ] = useState('');
  const [ inputPassword, setInputPassword ] = useState('');

  // function to handle submission
  const handleSubmitLogin = ((event) => {
    event.preventDefault();
    alert('You have logged in!');
  });

  //function to handle change username
  const handleChangeLoginUserName = ((event) => {
    setInputUsername(event.target.value);
    // return state to an empty string after running some functionality test to database
    // setInputUsername('');
  })

  // function to handle change password
  const handleChangeLoginPassword = ((event) => {
    setInputPassword(event.target.value);
    // return state to an empty string after running some functionality test to database
    // setInputPassword('');
  })

  return (
    <div className='loginContainer'>
      <h2>
        Log In
      </h2>
      <form onSubmit={handleSubmitLogin}>
        <div>
          <label>
            Email
            <input 
              type='email' 
              value={inputUsername} 
              placeholder='username' 
              onChange={(event) => handleChangeLoginUserName(event)} 
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
              type='text' 
              value={inputPassword} 
              placeholder='password'
              onChange={(event) => handleChangeLoginPassword(event)} 
            />
          </label>
        </div>
        <div>
          <Button type='submit'>Log in</Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
