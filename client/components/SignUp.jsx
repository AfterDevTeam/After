import React from 'react';
import { Container, Grid, TextField, Button, Link } from '@material-ui/core';

const SignUp = () => {

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
                name='firstName'
                variant='outlined'
                required
                fullWidth
                id='firstName'
                label='First Name'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name='lastName'
                variant='outlined'
                required
                fullWidth
                id='lastName'
                label='Last Name'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name='username'
                variant='outlined'
                required
                fullWidth
                id='username'
                label='User Name'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name='email'
                variant='outlined'
                required
                fullWidth
                id='email'
                label='Email Address'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name='password'
                variant='outlined'
                required
                fullWidth
                id='password'
                label='Password'
              />
            </Grid> 
            <Button
              type='submit'
              variant='contained'
              fullWidth
            >
              Sign Up
            </Button>
            <Grid item>
              <Link>
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
