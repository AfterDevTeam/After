/** @format */

import { createSlice } from '@reduxjs/toolkit';

export const checklist = createSlice({
  name: 'checklist',
  initialState: {
    petsBool: false,
    pets: [],
    billsBool: false,
    bills: [],
    extras: '',
    checklistComplete: false,
  },
  reducers: {
    petsReducer: (state, action) => {
      console.log('action.payload in petsReducer', action.payload);
      state.petsBool = true;
      state.pets.push(action.payload);
    },
    billsReducer: (state, action) => {
      console.log('action.payload in billsReducer', action.payload);
      state.billsBool = true;
      state.bills.push(action.payload);
    },
    extrasReducer: (state, action) => {
      console.log('action.payload in extrasReducer', action.payload);
      state.extras = action.payload;
    },
    updateChecklistSummaryReducer: (state, action) => {
      state.petsBool = action.payload.petsBool;
      state.pets = action.payload.pets;
      state.billsBool = action.payload.billsBool;
      state.bills = action.payload.bills;
      state.extras = action.payload.extras;
    },
  },
});

export const {
  petsReducer,
  billsReducer,
  extrasReducer,
  updateChecklistSummaryReducer,
} = checklist.actions;

export default checklist.reducer;

export const checklistState = (state) => state;
