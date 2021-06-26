/** @format */

import { createSlice } from '@reduxjs/toolkit';

export const plan = createSlice({
  name: 'plan',
  initialState: {
    rites: '',
    funeralHome: '',
    funeralBeforeRites: '',
    funeralLocation: '',
    graveSideService: false,
    graveSideLocation: '',
    memorialService: false,
    memorialLocation: '',
  },
  reducers: {
    chooseRitesReducer: (state, action) => {
      console.log('action.payload in Rites reducer', action.payload);
    },
    funeralHomeReducer: (state, action) => {
      console.log('action.payload in funeralHomeReducer', action.payload);
    },
    funeralLocationReducer: (state, action) => {
      console.log('action.payload in funeralLocationReducer', action.payload);
    },
    graveSideServiceReducer: (state, action) => {
      console.log('action.payload in graveSideServiceReducer', action.payload);
    },
    graveSideLocationReducer: (state, action) => {
      console.log('action.payload in graveSideLocationReducer', action.payload);
    },
    memorialServiceReducer: (state, action) => {
      console.log('action.payload in memorialServiceReducer', action.payload);
    },
    memorialLocationReducer: (state, action) => {
      console.log('action.payload in memorialLocationReducer', action.payload);
    },
  },
});

export const {
  chooseRitesReducer,
  funeralHomeReducer,
  funeralLocationReducer,
  graveSideServiceReducer,
  graveSideLocationReducer,
  memorialServiceReducer,
  memorialLocationReducer,
} = plan.actions;

export default plan.reducer;

export const planState = (state) => state;
