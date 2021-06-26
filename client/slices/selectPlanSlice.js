/** @format */

import { createSlice } from '@reduxjs/toolkit';

export const plan = createSlice({
  name: 'plan',
  initialState: {
    rite: '',
    funeralHome: '',
    funeralBeforeRites: false,
    funeralLocation: '',
    graveSideService: false,
    graveSideLocation: '',
    memorialService: false,
    memorialLocation: '',
  },
  reducers: {
    chooseRitesReducer: (state, action) => {
      console.log('action.payload in Rites reducer', action.payload);
      state.rite = action.payload;
    },
    funeralHomeReducer: (state, action) => {
      console.log('action.payload in funeralHomeReducer', action.payload);
      state.funeralHome = action.payload;
    },
    funeralLocationReducer: (state, action) => {
      console.log('action.payload in funeralLocationReducer', action.payload);
      state.funeralBeforeRites = true;
      state.funeralLocation = action.payload;
    },
    graveSideServiceReducer: (state, action) => {
      console.log('action.payload in graveSideServiceReducer', action.payload);
    },
    graveSideLocationReducer: (state, action) => {
      console.log('action.payload in graveSideLocationReducer', action.payload);
      state.graveSideService = true;
      state.graveSideLocation = action.payload;
    },
    memorialServiceReducer: (state, action) => {
      console.log('action.payload in memorialServiceReducer', action.payload);
    },
    memorialLocationReducer: (state, action) => {
      console.log('action.payload in memorialLocationReducer', action.payload);
      state.memorialService = true;
      state.memorialLocation = action.payload;
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
