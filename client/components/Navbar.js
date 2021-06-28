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
import '../App.css';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

import { MenuItem } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
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
      <AppBar position='static'>
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
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={() => history.push('/summary')}>
                Profile
              </MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>
          <Typography variant='h6' className='title'>
            After
          </Typography>
          <Link to='/login'>
            <Button color='inherit'>Login</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Navbar;
