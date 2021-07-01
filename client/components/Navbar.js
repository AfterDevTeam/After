/** @format */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Menu } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { MenuItem } from '@material-ui/core';
import { GetApp } from '@material-ui/icons';
import { loggedInReducer } from '../slices/loggedStatusSlice';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#E7ECEF',
    color: '#274C77',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
    fontFamily: ['Sacramento', 'cursive'],
    marginTop: '20px',
    marginBottom: '20px',
    marginRight: '100px',
  },
}));

// need to create a state variable to track logged in/out  (create a slice?)
  // when attempting to click my account or your journey, check state - if logged in is false, redirect to login, if true load component
  // upon successful login - logged in is true
  // upon logout - loggin in is set to false, user state is cleared, and history is blocked


const Navbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // create a logout function
  const logOutUser = () => {
    history.push('/');
    dispatch(loggedInReducer(false));
  }

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static' className={classes.root}>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          ></IconButton>
          <div>
            <Button
              aria-controls='simple-menu'
              aria-haspopup='true'
              onClick={handleClick}
            >
              <MenuIcon />
            </Button>
            <Menu
              id='simple-menu'
              classes={{ paper: classes.root }}
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={() => history.push('/')}>Home</MenuItem>
              <MenuItem onClick={() => history.push('/login')}>Login</MenuItem>
              <MenuItem onClick={() => history.push('/signup')}>Signup</MenuItem>
              <MenuItem onClick={() => history.push('/summary')}>
                My Account
              </MenuItem>
              <MenuItem onClick={() => history.push('/dashboard')}>
                Your Journey
              </MenuItem>
              <MenuItem onClick={logOutUser}>Logout</MenuItem>
            </Menu>
          </div>
          <Typography variant='h3' className={classes.title}>
            After
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Navbar;
