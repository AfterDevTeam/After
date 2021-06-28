import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Grid, TextField, Button, Link } from '@material-ui/core';
import {useHistory} from 'react-router-dom'
import {
  firstNameReducer,
  lastNameReducer,
  emailReducer,
  showPasswordReducer,
} from '../slices/userInfoSlice';


const SignUp = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  // use react hook, useState, to capture local state
  const [signUpInputs, setSignUpInputs] = useState({
    firstName: '',
    lastName: '',
    email: '',
    showPassword: false,
  });

  console.log('signUpInputs ', signUpInputs);

  // function to update state upon textfield user input
  const handleChangeSignUp = (prop) => (event) => {
    setSignUpInputs({...signUpInputs, [prop]: event.target.value});
    console.log('signUpInput ${prop}: ', prop);
  };

  // function to not/show password
  const handleClickShowPassword = (() => {
    setSignUpInputs({...signUpInputs, showPassword: !signUpInputs.showPassword})
  });

  // POST Sign Up info to server
  const submitToServer = (firstName, lastName, email, password) => {
    const info = {firstName, lastName, email, password};
    if(firstName&&lastName&&email&&password){
      fetch('/user/signup', {
        method: 'POST',
        headers: {
          'Content-type': 'Application/JSON',
        },
        body: JSON.stringify(info),
      })
    }else{
      alert('you forgot something')
    };
  }


  return (
    <Container maxWidth='xs'>
      <div>
        <h2>
          Sign up to start planning for what comes after.
        </h2>
        <form className='signUpForm'>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField 
                onChange= {handleChangeSignUp('firstName')}
                firstName='firstName'
                id='firstName'
                label='First Name'
                value={signUpInputs.firstName}
                required
                variant='outlined'
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
              onChange= {handleChangeSignUp('lastName')}
                lastName='lastName'
                id='lastName'
                label='Last Name'
                value={signUpInputs.lastName}
                required
                variant='outlined'
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange= {handleChangeSignUp('email')}
                name='email'
                id='email'
                label='Email Address'
                value={signUpInputs.email}
                required
                variant='outlined'
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name='password'
                id='password'
                label='Password'
                value={signUpInputs.password}
                required
                variant='outlined'
                fullWidth
              />
            </Grid>
              <Button
                type='button'
                variant='contained'
                fullWidth
                onClick = {() => {
                  dispatch(firstNameReducer(signUpInputs.firstName));
                  dispatch(lastNameReducer(signUpInputs.lastName));
                  dispatch(emailReducer(signUpInputs.email));

                  history.push('/dashboard'); 
                  submitToServer(signUpInputs.firstName, signUpInputs.lastName, signUpInputs.email, document.getElementById('password').value)
                  }
                }
              >
                Sign Up
              </Button>
            <Grid item>
              <Link to='/login'>
                Already have an account? Sign in
              </Link>
            </Grid> 
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default SignUp;
