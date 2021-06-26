/** @format */

import React, { useState } from 'react';
import { Slide } from '@material-ui/core';
import GuestList from './ServicePlanQuestions/GuestList';

const ServicePlan = () => {
  const [SPQuestionIdx, setSPQuestionIdx] = useState(0);

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

  const ServicePlanQuestions = [<GuestList />];

  return (
    <div id='service-plan-container'>
      <Slide in={true} direction='left'>
        <div>{ServicePlanQuestions}</div>
      </Slide>
      <button
        onClick={() =>
          setSPQuestionIdx(SPQuestionIdx > 0 ? SPQuestionIdx - 1 : 0)
        }
      >
        Previous
      </button>
      <button
        onClick={() =>
          setSPQuestionIdx(
            SPQuestionIdx < ServicePlanQuestions
              ? SPQuestionIdx + 1
              : ServicePlanQuestions
          )
        }
      >
        Next
      </button>
    </div>
  );
};

export default ServicePlan;
