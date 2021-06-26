/** @format */

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Slide } from '@material-ui/core';
import GuestList from './ServicePlanQuestions/GuestList';
import Participants from './ServicePlanQuestions/Participants';
import Music from './ServicePlanQuestions/Music';
import Readings from './ServicePlanQuestions/Readings';

import {
  guestListReducer,
  musicPlayedReducer,
  participantsReducer,
  prayersReadReducer,
} from '../slices/chooseServiceSlice';

const ServicePlan = () => {
  const dispatch = useDispatch();
  const [SPQuestionIdx, setSPQuestionIdx] = useState(0);

  const [guestList, setGuestList] = useState(null);
  const [participants, setParticipants] = useState(null);

  const [serviceItems, setServiceItems] = useState({
    prayersBool: false,
    prayersRead: [],
    musicBool: false,
    musicPlayed: [],
    cateringBool: false,
    cateringService: '',
    extras: '',
  });
  console.log('guestList', guestList);

  const ServicePlanQuestions = [
    <GuestList setGuestList={setGuestList} />,
    <Participants setParticipants={setParticipants} />,
    <Music serviceItems={serviceItems} setServiceItems={setServiceItems} />,
    <Readings serviceItems={serviceItems} setServiceItems={setServiceItems} />,
  ];

  return (
    <div id='service-plan-container'>
      <Slide in={true} direction='left'>
        <div>{ServicePlanQuestions[SPQuestionIdx]}</div>
      </Slide>
      <button
        onClick={() =>
          setSPQuestionIdx(SPQuestionIdx > 0 ? SPQuestionIdx - 1 : 0)
        }
      >
        Previous
      </button>
      <button
        onClick={() => {
          if (SPQuestionIdx === 0) dispatch(guestListReducer(guestList));
          if (SPQuestionIdx === 1) dispatch(participantsReducer(participants));
          if (SPQuestionIdx === 2 && serviceItems.musicBool === true)
            dispatch(musicPlayedReducer(serviceItems.musicPlayed));
          if (SPQuestionIdx === 3 && serviceItems.prayersBool === true)
            dispatch(prayersReadReducer(serviceItems.prayersRead));
          setSPQuestionIdx(
            SPQuestionIdx < ServicePlanQuestions.length - 1
              ? SPQuestionIdx + 1
              : ServicePlanQuestions.length - 1
          );
        }}
      >
        Next
      </button>
    </div>
  );
};

export default ServicePlan;
