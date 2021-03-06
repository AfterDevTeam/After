/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import '../css/DashboardSquare.css';

const DashboardSquare = (props) => {
  const history = useHistory();

  return (
    <div 
      className='dashboard-square' 
      onClick={() => history.push(props.route)}
    >
      <Link to={props.route}>{props.title}</Link>
    </div>
  );
};

export default DashboardSquare;
