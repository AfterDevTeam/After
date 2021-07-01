/** @format */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  planState,
  updateRitesPlanSummaryReducer,
} from '../../slices/selectPlanSlice';

const BurialPlanSubmit = () => {
  const dispatch = useDispatch();
  const state = useSelector(planState);
  const history = useHistory();

  //submits burial/rite information to database and redirects to dashboard
  const submitToDb = () => {
    fetch('/api/plan', {
      method: 'POST',
      headers: {
        'Content-type': 'Application/JSON',
      },
      body: JSON.stringify(state),
    });
    dispatch(updateRitesPlanSummaryReducer(state.plan));

    history.push('/dashboard');
  };

  return (
    <div id='submit-carousel'>
      <span>Are you ready to submit your arrangements?</span>
      <button onClick={submitToDb}>Submit</button>
    </div>
  );
};

export default BurialPlanSubmit;
