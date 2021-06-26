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

const PetsQuestion = ({ checklist, setChecklist }) => {
  const { petsBool } = checklist;
  const petsHidden = !petsBool; 

  const handleChange = (event) => {
    setChecklist({ ...checklist, [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <FormControl component='fieldset'>
        <FormLabel component='legend'>Do you have pets that need to be cared for?</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={petsBool}
                onChange={handleChange}
                name='petsBool'
              />
            }
            label='Yes, I have pets that need to be cared for.'
          />
          {petsHidden === false && (
            <TextField
              placeholder='List pets, separated by commas.'
              onChange={(e) => {
                setChecklist({
                  ...checklist,
                  petsList: (e.target.value).split(',').map(elem => elem.trim())
                });
              }}
            />
          )}
        </FormGroup>
      </FormControl>
    </div>
  )
}

export default PetsQuestion;