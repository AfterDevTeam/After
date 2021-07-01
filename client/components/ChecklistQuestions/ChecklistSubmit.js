/** @format */

import { HistorySharp } from '@material-ui/icons';
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { checklistState } from '../../slices/futureChecklistSlice';

const ChecklistSubmit = () => {
  const state = useSelector(checklistState);
  const history = useHistory();

  //submits checklist information to database and redirects to dashboard
  const submitToDb = () => {
    fetch('/api/future', {
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
      <span>Are you ready to submit your checklist?</span>
      <button onClick={submitToDb}>Submit</button>
    </div>
  );
};

export default ChecklistSubmit;
