import { HistorySharp } from '@material-ui/icons';
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { checklistState } from '../../slices/futureChecklistSlice';

const ChecklistSubmit = () => {
  const state = useSelector(checklistState);
  const history = useHistory();

  const submitToDb = () => {
    fetch('/api/future', {
      method: 'POST',
      headers: {
        'Content-type': 'Application/JSON',
      },
      body: JSON.stringify(state.checklist),
    });

    history.push('/dashboard');
  };

  return (
    <div>
      Are you ready to submit your checklist?
      <button onClick={submitToDb}>Submit</button>
    </div>
  );
};

export default ChecklistSubmit;
