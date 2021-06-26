/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import '../css/DashboardSquare.css';

const DashboardSquare = (props) => {
  return (
    <div className='dashboard-square'>
      <Link to={props.route || '/'}>{props.title}</Link>
    </div>
  );
};

export default DashboardSquare;
