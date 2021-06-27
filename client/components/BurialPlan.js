import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Slide } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import RitesQuestion from './BurialPlanQuestions/RitesQuestion';
import FuneralHomeQuestion from './BurialPlanQuestions/FuneralHomeQuestion';
import ServiceQuestions from './BurialPlanQuestions/ServiceQuestions';
import BurialPlanSubmit from './BurialPlanQuestions/BurialPlanSubmit';
import {
  chooseRitesReducer,
  funeralHomeReducer,
  funeralLocationReducer,
  graveSideLocationReducer,
  memorialLocationReducer,
} from '../slices/selectPlanSlice';

const BurialPlan = () => {
  const dispatch = useDispatch();
  const [BPQuestionIdx, setBPQuestionIdx] = useState(0);
  const [toDashboard, setToDashboard] = useState(false);
  const [rite, setRite] = useState(null);
  const [funeralHome, setFuneralHome] = useState(null);


  const [service, setService] = useState({
    funeralService: false,
    funeralServiceLocation: '',
    gravesideService: false,
    gravesideServiceLocation: '',
    memorialService: false,
    memorialServiceLocation: '',
  });

  const BurialPlanQuestions = [
    <RitesQuestion setRite={setRite} />,
    <FuneralHomeQuestion setFuneralHome={setFuneralHome} />,
    <ServiceQuestions service={service} setService={setService} />,
    <BurialPlanSubmit />,
  ];

  if(toDashboard === true){
    return <Redirect to='/dashboard' />
  }

  return(
    <div id="burial-plan-container">
      <Slide in={true} direction="left" mountOnEnter unmountOnExit>
        <div>
          {BurialPlanQuestions[BPQuestionIdx]}
        </div>
      </Slide>
      <button
        onClick={() => setBPQuestionIdx(BPQuestionIdx > 0 ? BPQuestionIdx - 1 : setToDashboard(true))
        }
      >
        Previous
      </button>
      <button
        onClick={() => {
          //dispatch state to redux store depending on which question in the carousel
          if (BPQuestionIdx === 0) dispatch(chooseRitesReducer(rite));
          else if (BPQuestionIdx === 1)
            dispatch(funeralHomeReducer(funeralHome));
          else if (BPQuestionIdx === 2) {
            if (service.funeralService === true)
              dispatch(funeralLocationReducer(service.funeralServiceLocation));
            if (service.gravesideService === true)
              dispatch(
                graveSideLocationReducer(service.gravesideServiceLocation)
              );
            if (service.memorialService === true) {
              dispatch(
                memorialLocationReducer(service.memorialServiceLocation)
              );
            }
          }

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
  )
}

export default BurialPlan;