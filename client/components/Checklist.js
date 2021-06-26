import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Slide } from '@material-ui/core';
import PetsQuestion from './ChecklistQuestions/PetsQuestion';
import BillsQuestion from './ChecklistQuestions/BillsQuestion';
import ExtrasQuestion from './ChecklistQuestions/ExtrasQuestion';
import {
  petsReducer,
  billsReducer,
  extrasReducer
} from '../slices/futureChecklistSlice';

const Checklist = () => {
  const dispatch = useDispatch();
  const [checklistQuestionIdx, setChecklistQuestionIdx] = useState(0);

  const [checklist, setChecklist] = useState({
    petsBool: false,
    petsList: '',
    billsBool: false,
    billsList: '',
    extras: ''
  });

  const { petsBool, petsList, billsBool, billsList, extras } = checklist;
  
  const checklistQuestions = [
    <PetsQuestion checklist={checklist} setChecklist={setChecklist} />,
    <BillsQuestion checklist={checklist} setChecklist={setChecklist} />,
    <ExtrasQuestion checklist={checklist} setChecklist={setChecklist} />
  ]

  return (
    <div id="checklist-container">
      <Slide in={true} direction="left" mountOnEnter unmountOnExit>
        <div>
          {checklistQuestions[checklistQuestionIdx]}
        </div>
      </Slide>
      <button
        onClick={() =>
          setChecklistQuestionIdx(checklistQuestionIdx > 0 ? checklistQuestionIdx - 1 : 0)
        }
      >
        Previous
      </button>
      <button
        onClick={() => {
          //dispatch state to redux store depending on which question in the carousel
          if (checklistQuestionIdx === 0 && petsBool === true) dispatch(petsReducer(petsList));
          else if (checklistQuestionIdx === 1 && billsBool === true) dispatch(billsReducer(billsList));
          else if (checklistQuestionIdx === 3 && extras !== '') dispatch(extrasReducer(extras));

          setChecklistQuestionIdx(
            checklistQuestionIdx < checklistQuestions.length - 1
              ? checklistQuestionIdx + 1
              : checklistQuestions.length - 1
          );
        }}
      >
        Next
      </button>
    </div>
  )
}

export default Checklist;