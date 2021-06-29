/** @format */

import React, { useState } from 'react';
import DashboardSquare from './DashboardSquare';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import '../css/Dashboard.css';
import { userInfoState } from '../slices/userInfoSlice';

const Dashboard = () => {
  const state = useSelector(userInfoState);
  const history = useHistory();

  const [squareHidden, toggleSquareHidden] = useState({
    burialPlan: false,
    service: false,
    futureChecklist: false
  })
  const userId = state.userInfo.userId; 

  //check database using userID to see if dashboard square is rendered or not
  fetch('/api/dashboard-check', {
    method: 'POST',
    headers: {
      'Content-type': 'Application/JSON',
    },
    body: JSON.stringify({
      userId: userId
    })
  })
    .then((res) => res.json())
    .then((dashboardStatus) => console.log(dashboardStatus));

  return (
    <div id='dashboard-container'>
      <h1>Your Journey</h1>
      <div id='dashboard-squares-container'>
        <DashboardSquare title='Select Your Burial Plan' route='/burial-plan' />
        <DashboardSquare title='Plan Your Service' route='/service-plan' />
        <DashboardSquare title='Notes For The Future' route='/checklist' />
      </div>
      <Button id='export-button'>Export</Button>
    </div>
  );
};

export default Dashboard;
