/** @format */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  serviceState,
  updateServiceSummaryReducer,
} from '../../slices/chooseServiceSlice';

const ServicePlanSubmit = () => {
  const state = useSelector(serviceState);

  const dispatch = useDispatch();
  const history = useHistory();

  const submitToDb = () => {
    fetch('/api/service', {
      method: 'POST',
      headers: {
        'Content-type': 'Application/JSON',
      },
      body: JSON.stringify(state),
    }).then(() => {
      dispatch(updateServiceSummaryReducer(state.service));
      history.push('/dashboard');
    });
  };

  return (
    <div id='submit-carousel'>
      <span>Are you ready to submit your arrangements?</span>
      <button onClick={submitToDb}>Submit</button>
    </div>
  );
};

export default ServicePlanSubmit;
