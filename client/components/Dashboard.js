/** @format */

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import DashboardSquare from './DashboardSquare';
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

  //check database using userId to see if dashboard square is rendered or not
  

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
