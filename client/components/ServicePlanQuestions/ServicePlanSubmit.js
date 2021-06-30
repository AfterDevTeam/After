/** @format */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { serviceState } from '../../slices/chooseServiceSlice';

const ServicePlanSubmit = () => {
  const state = useSelector(serviceState);
  console.log('serviceState', state);
  const dispatch = useDispatch();
  const history = useHistory();
  console.log('state in submit component', state);
  const submitToDb = () => {
    fetch('/api/service', {
      method: 'POST',
      headers: {
        'Content-type': 'Application/JSON',
      },
      body: JSON.stringify(state),
    });

    history.push('/dashboard');
  };

  return (
    <div>
      Are you ready to submit your arrangements?
      <button onClick={submitToDb}>Submit</button>
    </div>
  );
};

export default ServicePlanSubmit;
