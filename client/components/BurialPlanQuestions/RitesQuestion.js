/** @format */

import React from 'react';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
  TextField,
} from '@material-ui/core';

const RitesQuestion = ({ setRite }) => {
  return (
    <div>
      <FormControl component='fieldset'>
        <RadioGroup aria-label='select-your-rites'>
          <FormControlLabel
            value='casket'
            control={<Radio />}
            label='Casket'
            onClick={() => setRite('Casket')}
          />
          <FormControlLabel
            value='cremation'
            control={<Radio />}
            label='Cremation'
            onClick={() => setRite('Cremation')}
          />
          <FormControlLabel
            value='other'
            control={<Radio />}
            label={
              <TextField
                style={{width: 250}}
                placeholder='Other: Write your wishes here.'
                onChange={(e) => {
                  setRite('Other: ' + e.target.value);
                }}
              />
            }
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default RitesQuestion;
