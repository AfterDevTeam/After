/** @format */

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { guestListReducer } from '../../slices/chooseServiceSlice';
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
} from '@material-ui/core';

const GuestList = ({ setGuestList }) => {
  // console.log('setGuestList', props);

  return (
    <div>
      <FormControl>
        <InputLabel htmlFor='guest-list'>Guest List</InputLabel>
        <Input
          id='guest-list'
          aria-describedby='guest-list-helper-text'
          onChange={(e) => setGuestList(e.target.value)}
        />
        <FormHelperText id='guest-list-helper-text'>
          Please provide a guest list of those you would like to attend.
        </FormHelperText>
      </FormControl>
      {/* {Guests} */}
    </div>
  );
};

export default GuestList;
