/** @format */

import React from 'react';
import { useSelector } from 'react-redux';
import { planState } from '../../slices/selectPlanSlice';

const BurialPlanSubmit = () => {
  const state = useSelector(planState);
  console.log('state', state);
  const submitToDb = () => {
    fetch('/api/plan', {
      method: 'POST',
      headers: {
        'Content-type': 'Application/JSON',
      },
      body: JSON.stringify(state.plan),
    });
  };

  return (
    <div>
      Are you ready to submit your arrangements?
      <button onClick={submitToDb}>Submit</button>
    </div>
  );
};

export default BurialPlanSubmit;
