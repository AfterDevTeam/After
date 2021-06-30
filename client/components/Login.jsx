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
  userIdReducer,
} from '../slices/userInfoSlice';
import {
  planCompleteReducer,
  serviceCompleteReducer,
  checklistCompleteReducer,
} from '../checkDataSlice';

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
    fetch('/user/login', {
      method: 'POST',
      headers: {
        'Content-type': 'Application/JSON',
      },
      body: JSON.stringify({
        email: inputUsername,
        password: inputPassword,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        //if response is an object, successful retrieval from database
        console.log(data);
        if (typeof data === 'object') {
          //save the data in the Redux store
          // check for value
          if (typeof data.userInfo === 'object') {
            const { firstName, lastName, email, userId } = data.userInfo;
                dispatch(firstNameReducer(firstName));
                dispatch(lastNameReducer(lastName));
                dispatch(emailReducer(email));
                dispatch(userIdReducer(userId));
          }
          // check for value
          if (typeof date.checklist === 'object')  
            const { petsBool, pets, billsBool, bills, extras } = data.checklist;
          // check for value
          if (typeof date.plan === 'object')  
            const { rite, funeralHome, funeralBeforeRites, funeralLocation, graveSideServices } = plan.service;
          // check for value
          if (typeof date.service === 'object')  
            const { guestList, participants, prayersBool, prayersRead, musicBool } = data.service;



          // dispatch(serviceCompleteReducer(burialPlan));
          // dispatch(checklistCompleteReducer(service));
          // dispatch(planCompleteReducer(futureChecklist));
          // reset the inputs to empty strings
          
          // fetch request service
            // update everything in redux
          // fetch request for checklist
            // update everything in redux
          // fetch request for plan
            // update everything in redux


          setInputUsername('');
          setInputPassword('');
          //redirect to dashboard
          history.push('/dashboard');
        }
        //if string, failure to login
        if (typeof data === 'string') {
          //redirect to signup
          history.push('/signup');
        }
      });
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
