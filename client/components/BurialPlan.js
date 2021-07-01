import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
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
import '../css/Carousel.css';

const BurialPlan = () => {
  const dispatch = useDispatch();
  const [BPQuestionIdx, setBPQuestionIdx] = useState(0);
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


  return(
    <div className="carousel-container">
      <div>
        {BurialPlanQuestions[BPQuestionIdx]}
      </div>
      <div className="carousel-buttons">
        <button
          disabled={BPQuestionIdx === 0}
          onClick={() => setBPQuestionIdx(BPQuestionIdx > 0 ? BPQuestionIdx - 1 : 0)
          }
        >
          Previous
        </button>
        <button
          disabled={BPQuestionIdx === 3}
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
    </div>
  )
}

export default BurialPlan;