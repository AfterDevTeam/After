/** @format */

import React from 'react';
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from '@material-ui/core';

const ExtrasServiceQuestion = ({ serviceItems, setServiceItems }) => {
  return (
    <div>
      <FormControl>
        <InputLabel htmlFor='serviceItems-extras'>Extra Tasks</InputLabel>
        <Input
          id='checklist-extras'
          aria-describedby='serviceItems-extras-helper-text'
          onChange={(e) =>
            setServiceItems({
              ...serviceItems,
              extras: e.target.value,
            })
          }
        />
        <FormHelperText id='serviceItems-extras-helper-text'>
          Write any extra tasks that needed to be completed after your passing.
        </FormHelperText>
      </FormControl>
    </div>
  );
};

export default ExtrasServiceQuestion;
