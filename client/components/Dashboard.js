import React from 'react';
import DashboardSquare from './DashboardSquare';
import { Button } from '@material-ui/core';
import '../css/Dashboard.css';

const Dashboard = () => {
  return (
    <div id="dashboard-container">
      <h1>Your Journey</h1>
      <div id="dashboard-squares-container">
        <DashboardSquare title="Select Your Burial Plan" />
        <DashboardSquare title="Plan Your Service" />
        <DashboardSquare title ="Notes For The Future" />
      </div>
      <Button id="export-button">Export</Button>
    </div>
  )
}

export default Dashboard;