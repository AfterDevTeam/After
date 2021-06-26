/** @format */

import React, { useState } from 'react';
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from '@material-ui/core';

const GuestList = () => {
  const [funeralHome, setFuneralHome] = useState(null);

  return (
    <div>
      <FormControl>
        <InputLabel htmlFor='guest-list'>Guest List</InputLabel>
        <Input
          id='guest-list'
          aria-describedby='guest-list-helper-text'
          onChange={(e) => setFuneralHome(e.target.value)}
        />
        <FormHelperText id='guest-list-helper-text'>
          Please provide a guest list of those you would like to attend.
        </FormHelperText>
      </FormControl>
    </div>
  );
};

export default GuestList;
