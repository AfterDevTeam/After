/** @format */

import render from 'dom-serializer';
import React from 'react';
import {
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  TextField,
} from '@material-ui/core';

const BillsQuestion = ({ checklist, setChecklist }) => {
  const { billsBool } = checklist;
  const petsHidden = !billsBool;

  const handleChange = (event) => {
    setChecklist({ ...checklist, [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <FormControl component='fieldset'>
        <FormLabel component='legend'>
          Do you have any outstanding bills or expenses that need to be taken
          care of?
        </FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={billsBool}
                onChange={handleChange}
                name='billsBool'
              />
            }
            label='Yes, I have outstanding bills and/or expenses.'
          />
          {petsHidden === false && (
            <TextField
              placeholder='List bills/expenses, separated by commas.'
              onChange={(e) => {
                setChecklist({
                  ...checklist,
                  billsList: e.target.value
                    .split(',')
                    .map((elem) => elem.trim()),
                });
              }}
            />
          )}
        </FormGroup>
      </FormControl>
    </div>
  );
};

export default BillsQuestion;
