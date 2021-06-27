/** @format */

import React from 'react';
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from '@material-ui/core';

const ExtrasQuestion = ({ checklist, setChecklist }) => {
  return (
    <div>
      <FormControl>
        <InputLabel htmlFor='checklist-extras'>Extra Tasks</InputLabel>
        <Input
          id='checklist-extras'
          aria-describedby='checklist-extras-helper-text'
          onChange={(e) =>
            setChecklist({
              ...checklist,
              extras: e.target.value,
            })
          }
        />
        <FormHelperText id='funeral-home-helper-text'>
          Write any extra tasks that needed to be completed after your passing.
        </FormHelperText>
      </FormControl>
    </div>
  );
};

export default ExtrasQuestion;
