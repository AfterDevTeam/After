/** @format */

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import GuestList from './ServicePlanQuestions/GuestList';
import Participants from './ServicePlanQuestions/Participants';
import Music from './ServicePlanQuestions/Music';
import Readings from './ServicePlanQuestions/Readings';
import Catering from './ServicePlanQuestions/Catering';

import {
  cateringServiceReducer,
  extrasReducer,
  guestListReducer,
  musicPlayedReducer,
  participantsReducer,
  prayersReadReducer,
} from '../slices/chooseServiceSlice';
import ServicePlanSubmit from './ServicePlanQuestions/ServicePlanSubmit';
import ExtrasServiceQuestion from './ServicePlanQuestions/ExtrasServiceQuestion';

import '../css/Carousel.css';

const ServicePlan = () => {
  const dispatch = useDispatch();
  const [SPQuestionIdx, setSPQuestionIdx] = useState(0);

  const [guestList, setGuestList] = useState(null);
  const [participants, setParticipants] = useState(null);

  const [serviceItems, setServiceItems] = useState({
    guestList: [],
    participants: [],
    prayersBool: false,
    prayersRead: [],
    musicBool: false,
    musicPlayed: [],
    cateringBool: false,
    cateringService: '',
    extras: '',
  });
  // console.log('guestList', guestList);

  const ServicePlanQuestions = [
    <GuestList serviceItems={serviceItems} setServiceItems={setServiceItems} />,
    <Participants
      serviceItems={serviceItems}
      setServiceItems={setServiceItems}
    />,
    <Music serviceItems={serviceItems} setServiceItems={setServiceItems} />,
    <Readings serviceItems={serviceItems} setServiceItems={setServiceItems} />,
    <Catering serviceItems={serviceItems} setServiceItems={setServiceItems} />,
    <ExtrasServiceQuestion
      serviceItems={serviceItems}
      setServiceItems={setServiceItems}
    />,
    <ServicePlanSubmit />,
  ];

  return (
    <div className="carousel-container">
      <div>{ServicePlanQuestions[SPQuestionIdx]}</div>
      <div className="carousel-buttons">
        <button
          disabled={SPQuestionIdx === 0}
          onClick={() =>
            setSPQuestionIdx(SPQuestionIdx > 0 ? SPQuestionIdx - 1 : 0)
          }
        >
          Previous
        </button>
        <button
          disabled={SPQuestionIdx === 6}
          onClick={() => {
            if (SPQuestionIdx === 0)
              dispatch(guestListReducer(serviceItems.guestList));
            if (SPQuestionIdx === 1)
              dispatch(participantsReducer(serviceItems.participants));
            if (SPQuestionIdx === 2 && serviceItems.musicBool === true)
              dispatch(musicPlayedReducer(serviceItems.musicPlayed));
            if (SPQuestionIdx === 3 && serviceItems.prayersBool === true)
              dispatch(prayersReadReducer(serviceItems.prayersRead));
            if (SPQuestionIdx === 4 && serviceItems.cateringBool === true)
              dispatch(cateringServiceReducer(serviceItems.cateringService));
            if (SPQuestionIdx === 5) dispatch(extrasReducer(serviceItems.extras));
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
    </div>
  );
};

export default ServicePlan;
