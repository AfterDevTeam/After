/** @format */

import { createSlice } from '@reduxjs/toolkit';

export const checklist = createSlice({
  name: 'checklist',
  initialState: {
    pets: [],
    bills: [],
    extras: '',
  },
  reducers: {
    petsReducer: (state, action) => {
      console.log('action.payload in petsReducer', action.payload);
    },
    billsReducer: (state, action) => {
      console.log('action.payload in billsReducer', action.payload);
    },
    extrasReducer: (state, action) => {
      console.log('action.payload in extrasReducer', action.payload);
    },
  },
});

export const { petsReducer, billsReducer, extrasReducer } = checklist.actions;

export default checklist.reducer;

export const checklistState = (state) => state;
