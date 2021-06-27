/** @format */

import React from 'react';
import DashboardSquare from './DashboardSquare';
import { Button } from '@material-ui/core';
import '../css/Dashboard.css';

const Dashboard = () => {
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
