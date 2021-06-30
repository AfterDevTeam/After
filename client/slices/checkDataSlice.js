/** @format */

import { createSlice } from '@reduxjs/toolkit';

export const checkData = createSlice({
  name: 'checkData',
  initialState: {
    planComplete: false,
    serviceComplete: false,
    checklistComplete: false,
  },
  reducers: {
    planCompleteReducer: (state, action) => {
      state.planComplete = true;
    },
    serviceCompleteReducer: (state, action) => {
      state.serviceComplete = true;
    },
    checklistCompleteReducer: (state, action) => {
      state.checklistComplete = true;
    },
  },
});

export const {
  planCompleteReducer,
  serviceCompleteReducer,
  checklistCompleteReducer,
} = checkData.actions;

export default checkData.reducer;

export const checkDataState = (state) => state;
