import React from 'react';
import { useSelector } from 'react-redux';
import { checklistState } from '../../slices/futureChecklistSlice';

const ChecklistSubmit = () => {
  const state = useSelector(checklistState);
  console.log('state', state);
  const submitToDb = () => {
    fetch('/api/plan', {
      method: 'POST',
      headers: {
        'Content-type': 'Application/JSON',
      },
      body: JSON.stringify(state.checklist),
    });
  };

  return (
    <div>
      Are you ready to submit your checklist?
      <button onClick={submitToDb}>Submit</button>
    </div>
  );
};

export default ChecklistSubmit;
