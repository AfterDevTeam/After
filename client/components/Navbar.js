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

const Navbar = () => {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
              <MenuItem onClick={() => {
                fetch('/user/logout', {
                  method: 'PUT'
                })
                history.push('/')}}>Logout</MenuItem>
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
