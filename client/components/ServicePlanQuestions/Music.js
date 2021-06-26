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

const Music = ({ serviceItems, setServiceItems }) => {
  const { musicBool } = serviceItems;
  const musicHidden = !serviceItems.musicBool;

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
          Do you want any special music played?
        </FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={musicBool}
                onChange={handleChange}
                name='musicBool'
              />
            }
            label='I want some special music played at my service'
          />
          {musicBool === true && (
            <TextField
              placeholder='Music'
              onChange={(e) => {
                setServiceItems({
                  ...serviceItems,
                  musicPlayed: e.target.value,
                });
              }}
            />
          )}
        </FormGroup>
      </FormControl>
    </div>
  );
};

export default Music;
