/** @format */

import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import '../css/Login.css';
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
} from '../slices/checkDataSlice';
import { updateServiceSummaryReducer } from '../slices/chooseServiceSlice';
import { updateRitesPlanSummaryReducer } from '../slices/selectPlanSlice';
import { updateChecklistSummaryReducer } from '../slices/futureChecklistSlice';
import { loggedInReducer } from '../slices/loggedStatusSlice';

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
        console.log('data in login', data);
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
          if (typeof data.checklist === 'object') {
            dispatch(updateChecklistSummaryReducer(data.checklist));
            dispatch(checklistCompleteReducer());
          }
          // check for value
          if (typeof data.burialPlan === 'object') {
            dispatch(updateRitesPlanSummaryReducer(data.burialPlan));
            dispatch(planCompleteReducer());
            // check for value
          }
          if (typeof data.service === 'object') {
            dispatch(updateServiceSummaryReducer(data.service));
            dispatch(serviceCompleteReducer());
          }
          dispatch(loggedInReducer(true));
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
        <div className='input-container'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            value={inputUsername}
            placeholder='username'
            onChange={(event) => handleChangeLoginUserName(event)}
          />
        </div>
        <div className='input-container'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            value={inputPassword}
            placeholder='password'
            onChange={(event) => handleChangeLoginPassword(event)}
          />
        </div>
        <div id='login-buttons'>
          <button type='submit'>Log In</button>
          <button onClick={() => history.push('/signup')}>
            Create An Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
