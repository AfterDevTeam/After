/** @format */

import React from 'react';
import {
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  TextField,
} from '@material-ui/core';

const ServiceQuestions = ({ service, setService }) => {
  const { funeralService, gravesideService, memorialService } = service;
  const funeralHidden = !funeralService;
  const gravesideHidden = !gravesideService;
  const memorialHidden = !memorialService;

  const handleChange = (event) => {
    setService({ ...service, [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <FormControl component='fieldset'>
        <FormLabel component='legend'>Select your services.</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={funeralService}
                onChange={handleChange}
                name='funeralService'
              />
            }
            label='I want a funeral service before the burial/cremation.'
          />
          {funeralHidden === false && (
            <TextField
              placeholder='Location'
              onChange={(e) => {
                setService({
                  ...service,
                  funeralServiceLocation: e.target.value,
                });
              }}
            />
          )}
          <FormControlLabel
            control={
              <Checkbox
                checked={gravesideService}
                onChange={handleChange}
                name='gravesideService'
              />
            }
            label='I want a graveside service.'
          />
          {gravesideHidden === false && (
            <TextField
              placeholder='Location'
              onChange={(e) => {
                setService({
                  ...service,
                  gravesideServiceLocation: e.target.value,
                });
              }}
            />
          )}
          <FormControlLabel
            control={
              <Checkbox
                checked={memorialService}
                onChange={handleChange}
                name='memorialService'
              />
            }
            label='I want a memorial service after the burial/cremation.'
          />
          {memorialHidden === false && (
            <TextField
              placeholder='Location'
              onChange={(e) => {
                setService({
                  ...service,
                  memorialServiceLocation: e.target.value,
                });
              }}
            />
          )}
        </FormGroup>
      </FormControl>
    </div>
  );
};

export default ServiceQuestions;
