/** @format */

import React, { useState } from 'react';
import { Slide } from '@material-ui/core';
import RitesQuestion from './BurialPlanQuestions/RitesQuestion';
import FuneralHomeQuestion from './BurialPlanQuestions/FuneralHomeQuestion';
import ServiceQuestions from './BurialPlanQuestions/ServiceQuestions';
import BurialPlanSubmit from './BurialPlanQuestions/BurialPlanSubmit';

const BurialPlan = () => {
  const [BPQuestionIdx, setBPQuestionIdx] = useState(0);

  const BurialPlanQuestions = [
    <RitesQuestion />,
    <FuneralHomeQuestion />,
    <ServiceQuestions />,
    <BurialPlanSubmit />,
  ];

  return (
    <div id='burial-plan-container'>
      <Slide in={true} direction='left' mountOnEnter unmountOnExit>
        <div>{BurialPlanQuestions[BPQuestionIdx]}</div>
      </Slide>
      <button
        onClick={() =>
          setBPQuestionIdx(BPQuestionIdx > 0 ? BPQuestionIdx - 1 : 0)
        }
      >
        Previous
      </button>
      <button
        onClick={() => {
          setBPQuestionIdx(
            BPQuestionIdx < BurialPlanQuestions.length - 1
              ? BPQuestionIdx + 1
              : BurialPlanQuestions.length - 1
          );
        }}
      >
        Next
      </button>
    </div>
  );
};

export default BurialPlan;
