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
  const { musicbool } = serviceItems;
  const musicHidden = !serviceItems.musicbool;

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
                checked={musicbool}
                onChange={handleChange}
                name='musicbool'
              />
            }
            label='I want some special music played at my service'
          />
          {musicbool === true && (
            <TextField
              placeholder='Music'
              onChange={(e) => {
                setServiceItems({
                  ...serviceItems,
                  musicplayed: e.target.value,
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
