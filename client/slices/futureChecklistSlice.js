/** @format */

import { createSlice } from '@reduxjs/toolkit';

export const checklist = createSlice({
  name: 'checklist',
  initialState: {
    petsbool: false,
    pets: [],
    billsbool: false,
    bills: [],
    extras: '',
  },
  reducers: {
    petsReducer: (state, action) => {
      // console.log('action.payload in petsReducer', action.payload);
      state.petsbool = true;
      state.pets = action.payload;
    },
    billsReducer: (state, action) => {
      // console.log('action.payload in billsReducer', action.payload);
      state.billsbool = true;
      state.bills = action.payload;
    },
    extrasReducer: (state, action) => {
      // console.log('action.payload in extrasReducer', action.payload);
      state.extras = action.payload;
    },
    updateChecklistSummaryReducer: (state, action) => {
      console.log('Checklist Summary Reducer: ', action.payload);
      state.petsbool = action.payload.petsbool;
      state.pets = action.payload.pets;
      state.billsbool = action.payload.billsbool;
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
