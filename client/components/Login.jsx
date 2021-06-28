/** @format */

import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import '../css/login.css';
import { useDispatch } from 'react-redux';
import {
  firstNameReducer,
  lastNameReducer,
  emailReducer,
} from '../slices/userInfoSlice';


const Login = (props) => {
  //history for routing
  const history = useHistory();

  // dispatch for redux state
  const dispatch = useDispatch();

  // usestate hook to update state
  const [inputUsername, setInputUsername] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  // function to handle submission
  const handleSubmitLogin = (event) => {
    event.preventDefault();
    // make a fetch request
    fetch ('/users/login', {
        method: 'POST',
        headers: {
          'Content-type': 'Application/JSON'
        },
        body: JSON.stringify(inputUsername, inputPassword)
    })
      // if successful
        // destructure the response to get user firstName, lastName, and id
        // dispatch(firstNameReducer(firstName));
        // dispatch(lastNameReducer(lastName));
        // dispatch(emailReducer(email));
        // reset the inputs to empty strings
        setInputUsername('');
        setInputPassword('')
        history.push('/dashboard');  
  };

  //function to handle change username
  const handleChangeLoginUserName = (event) => {
    setInputUsername(event.target.value);
  };

  // function to handle change password
  const handleChangeLoginPassword = (event) => {
    setInputPassword(event.target.value);
  };

  return (
    <div className='loginContainer'>
      <h2>Log In</h2>
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
        <Link to='/SignUp'>Click here to make an account.</Link>
      </form>
    </div>
  );
};

export default Login;
