/** @format */

import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { planState } from '../../slices/selectPlanSlice';

const BurialPlanSubmit = () => {
  const state = useSelector(planState);
  const history = useHistory();

  const submitToDb = () => {
    fetch('/api/plan', {
      method: 'POST',
      headers: {
        'Content-type': 'Application/JSON',
      },
      body: JSON.stringify(state),
    });

    history.push('/dashboard');
  };

  return (
    <div id="submit-carousel">
      <span>Are you ready to submit your arrangements?</span>
      <button onClick={submitToDb}>Submit</button>
    </div>
  );
};

export default BurialPlanSubmit;
