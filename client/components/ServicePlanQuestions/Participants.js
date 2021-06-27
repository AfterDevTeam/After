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

const Participants = ({ serviceItems, setServiceItems }) => {
  // console.log('setGuestList', props);

  return (
    <div>
      <FormControl>
        <InputLabel htmlFor='participant-list'>Participants</InputLabel>
        <Input
          id='participant-list'
          aria-describedby='participant-list-helper-text'
          onChange={(e) => {
            setServiceItems({
              ...serviceItems,
              participants: e.target.value
                .split(',')
                .map((elem) => elem.trim()),
            });
          }}
        />
        <FormHelperText id='participant-list-helper-text'>
          Please provide a participant list of those you would like to
          facilitate your service.
        </FormHelperText>
      </FormControl>
      {/* {Guests} */}
    </div>
  );
};

export default Participants;
