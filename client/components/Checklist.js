/** @format */

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PetsQuestion from './ChecklistQuestions/PetsQuestion';
import BillsQuestion from './ChecklistQuestions/BillsQuestion';
import ExtrasQuestion from './ChecklistQuestions/ExtrasQuestion';
import ChecklistSubmit from './ChecklistQuestions/ChecklistSubmit';
import {
  petsReducer,
  billsReducer,
  extrasReducer,
} from '../slices/futureChecklistSlice';
import '../css/Carousel.css';

const Checklist = () => {
  const dispatch = useDispatch();

  //state for carousel questions
  const [checklistQuestionIdx, setChecklistQuestionIdx] = useState(0);

  //state for checklist information to send to database
  const [checklist, setChecklist] = useState({
    petsBool: false,
    petsList: '',
    billsBool: false,
    billsList: '',
    extras: '',
  });

  const { petsBool, petsList, billsBool, billsList, extras } = checklist;

  const checklistQuestions = [
    <PetsQuestion checklist={checklist} setChecklist={setChecklist} />,
    <BillsQuestion checklist={checklist} setChecklist={setChecklist} />,
    <ExtrasQuestion checklist={checklist} setChecklist={setChecklist} />,
    <ChecklistSubmit />,
  ];

  return (
    <div className="carousel-container">
      <div>{checklistQuestions[checklistQuestionIdx]}</div>
      <div className="carousel-buttons">
        <button
          disabled={checklistQuestionIdx === 0}
          onClick={() =>
            setChecklistQuestionIdx(
              checklistQuestionIdx > 0 ? checklistQuestionIdx - 1 : 0
            )
          }
        >
          Previous
        </button>
        <button
          disabled={checklistQuestionIdx === 3}
          onClick={() => {
            //dispatch state to redux store depending on which question in the carousel
            if (checklistQuestionIdx === 0 && petsBool === true)
              dispatch(petsReducer(petsList));
            else if (checklistQuestionIdx === 1 && billsBool === true)
              dispatch(billsReducer(billsList));
            else if (checklistQuestionIdx === 2 && extras !== '')
              dispatch(extrasReducer(extras));

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
    </div>
  );
};

export default Checklist;
