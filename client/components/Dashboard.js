import React from 'react';
import DashboardSquare from './DashboardSquare';
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
      <button>Export</button>
    </div>
  )
}

export default Dashboard;