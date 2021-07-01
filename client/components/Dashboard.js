/** @format */

import React, { useState, useEffect } from 'react';
import DashboardSquare from './DashboardSquare';
import { useSelector, useDispatch } from 'react-redux';
import '../css/Dashboard.css';
import { userInfoState } from '../slices/userInfoSlice';
import { updateRitesPlanSummaryReducer } from '../slices/selectPlanSlice';
import { updateServiceSummaryReducer } from '../slices/chooseServiceSlice';
import { updateChecklistSummaryReducer } from '../slices/futureChecklistSlice';

const Dashboard = () => {
  const state = useSelector(userInfoState);
  const dispatch = useDispatch();

  const [squareHidden, toggleSquareHidden] = useState({
    burialPlan: null,
    service: null,
    futureChecklist: null,
  });
  const userId = state.userInfo.userId;

  //check database using userID to see if dashboard square is rendered or not
  useEffect(() => {
    fetch('/api/dashboard-check', {
      method: 'POST',
      headers: {
        'Content-type': 'Application/JSON',
      },
      body: JSON.stringify({
        userId: userId,
      }),
    })
      .then((res) => res.json())
      .then((dashboardStatus) =>
        toggleSquareHidden({
          burialPlan: dashboardStatus.burialPlan,
          service: dashboardStatus.service,
          futureChecklist: dashboardStatus.futureChecklist,
        })
      );
    dispatch(updateRitesPlanSummaryReducer(state.plan));
    dispatch(updateServiceSummaryReducer(state.service));
    dispatch(updateChecklistSummaryReducer(state.checklist));
  }, []);

  //conditionally renders each dashboard square depending on carousel completion status
  return (
    <div id='dashboard-container'>
      <h1>Your Journey</h1>
      <div id='dashboard-squares-container'>
        {squareHidden.burialPlan === false && (
          <DashboardSquare
            title='Select Your Burial/Rites Plan'
            route='/burial-plan'
          />
        )}
        {squareHidden.burialPlan === true && (
          <DashboardSquare title='Edit Burial/Rites Plan' route='/summary' />
        )}
        {squareHidden.service === false && (
          <DashboardSquare title='Plan Your Service' route='/service-plan' />
        )}
        {squareHidden.service === true && (
          <DashboardSquare title='Edit Service Plan' route='/summary' />
        )}
        {squareHidden.futureChecklist === false && (
          <DashboardSquare title='Notes For The Future' route='/checklist' />
        )}
        {squareHidden.futureChecklist === true && (
          <DashboardSquare title='Edit Future Checklist' route='/summary' />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
