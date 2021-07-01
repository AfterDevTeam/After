/** @format */

import { HistorySharp } from '@material-ui/icons';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  checklistState,
  updateChecklistSummaryReducer,
} from '../../slices/futureChecklistSlice';

const ChecklistSubmit = () => {
  const state = useSelector(checklistState);
  const dispatch = useDispatch();
  const history = useHistory();

  const submitToDb = () => {
    fetch('/api/future', {
      method: 'POST',
      headers: {
        'Content-type': 'Application/JSON',
      },
      body: JSON.stringify(state),
    });

    dispatch(updateChecklistSummaryReducer(state.checklist));
    history.push('/dashboard');
  };

  return (
    <div id='submit-carousel'>
      <span>Are you ready to submit your checklist?</span>
      <button onClick={submitToDb}>Submit</button>
    </div>
  );
};

export default ChecklistSubmit;
