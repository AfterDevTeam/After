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

const Readings = ({ serviceItems, setServiceItems }) => {
  const { prayersBool } = serviceItems;
  const prayersHidden = !serviceItems.prayersBool;

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
          Do you want prayers/readings performed at your service?
        </FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={prayersBool}
                onChange={handleChange}
                name='prayersBool'
              />
            }
            label='I want some prayers or readings performed at my service.'
          />
          {prayersBool === true && (
            <TextField
              placeholder='Prayers'
              onChange={(e) => {
                setServiceItems({
                  ...serviceItems,
                  prayersRead: e.target.value,
                });
              }}
            />
          )}
        </FormGroup>
      </FormControl>
    </div>
  );
};

export default Readings;
