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

const GuestList = ({ serviceItems, setServiceItems }) => {
  console.log('service items', serviceItems);

  return (
    <div>
      <FormControl>
        <InputLabel htmlFor='guest-list'>Guest List</InputLabel>
        {
          <Input
            id='guest-list'
            aria-describedby='guest-list-helper-text'
            onChange={(e) => {
              setServiceItems({
                ...serviceItems,
                guestList: e.target.value.split(',').map((elem) => elem.trim()),
              });
            }}
          />
        }
        <FormHelperText id='guest-list-helper-text'>
          Please provide a guest list of those you would like to attend.
        </FormHelperText>
      </FormControl>
    </div>
  );
};

export default GuestList;
