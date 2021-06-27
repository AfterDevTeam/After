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
  },
});

export const { petsReducer, billsReducer, extrasReducer } = checklist.actions;

export default checklist.reducer;

export const checklistState = (state) => state;
