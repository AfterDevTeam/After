/** @format */

import React, { useState, useEffect } from 'react';
import DashboardSquare from './DashboardSquare';
import { useSelector, useDispatch } from 'react-redux';
import '../css/Dashboard.css';
import { userInfoState } from '../slices/userInfoSlice';
import { updateRitesPlanLoginReducer } from '../slices/selectPlanSlice';
import { updateServiceLoginReducer } from '../slices/chooseServiceSlice';
import { updateChecklistLoginReducer } from '../slices/futureChecklistSlice';
import axios from 'axios';

const Dashboard = () => {
  const state = useSelector(userInfoState);
  const dispatch = useDispatch();

  const [squareHidden, toggleSquareHidden] = useState({
    burialPlan: null,
    service: null,
    futureChecklist: null,
  });
  const userId = state.userInfo.userId;

  const getPlanInfo = () => {
    return axios
      .post('/api/planSummary', {
        userInfo: state.userInfo,
      })
      .then((res) => {
        dispatch(updateRitesPlanLoginReducer(res.data.burialPlan));
      });
  };

  const getServiceInfo = () => {
    return axios
      .post('/api/serviceSummary', {
        userInfo: state.userInfo,
      })
      .then((res) => {
        dispatch(updateServiceLoginReducer(res.data.service));
      });
  };

  const getChecklistInfo = () => {
    return axios
      .post('/api/checklistSummary', {
        userInfo: state.userInfo,
      })
      .then((res) => {
        dispatch(updateChecklistLoginReducer(res.data.checklist));
      });
  };

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
      )
      .then(() => {
        getPlanInfo();
        getServiceInfo();
        getChecklistInfo();
      });
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
