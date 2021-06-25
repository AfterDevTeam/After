import React from 'react';
import '../css/DashboardSquare.css';

const DashboardSquare = (props) => {
  return (
    <div className="dashboard-square">
      {props.title}
    </div>
  )
}

export default DashboardSquare;