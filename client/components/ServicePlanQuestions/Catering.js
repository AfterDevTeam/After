/** @format */

import React, { useState } from 'react';
import {
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Radio,
  TextField,
} from '@material-ui/core';
import { service } from '../../slices/chooseServiceSlice';

const Catering = ({ serviceItems, setServiceItems }) => {
  const { cateringbool } = serviceItems;
  const cateringHidden = !serviceItems.cateringBool;

  const handleChange = (event) => {
    setServiceItems({
      ...serviceItems,
      [event.target.name]: event.target.checked,
    });
  };
  return (
    <div>
      <FormControl component='fieldset'>
        <FormLabel component='legend'>
          Would you like a catering service arranged for your event??
        </FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={cateringbool}
                onChange={handleChange}
                name='cateringbool'
              />
            }
            label='I would like someone to cater my service'
          />
          {cateringbool === true && (
            <TextField
              placeholder='Caterer'
              onChange={(e) => {
                setServiceItems({
                  ...serviceItems,
                  cateringservice: e.target.value,
                });
              }}
            />
          )}
        </FormGroup>
      </FormControl>
    </div>
  );
};

export default Catering;
