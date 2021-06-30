/** @format */

import { createSlice } from '@reduxjs/toolkit';

export const plan = createSlice({
  name: 'plan',
  initialState: {
    rite: '',
    funeralhome: '',
    funeralbeforerites: false,
    funerallocation: '',
    gravesideservice: false,
    gravesidelocation: '',
    memorialservice: false,
    memoriallocation: '',
  },
  reducers: {
    chooseRitesReducer: (state, action) => {
      // console.log('action.payload in Rites reducer', action.payload);
      state.rite = action.payload;
    },
    funeralHomeReducer: (state, action) => {
      // console.log('action.payload in funeralHomeReducer', action.payload);
      state.funeralhome = action.payload;
    },
    funeralLocationReducer: (state, action) => {
      // console.log('action.payload in funeralLocationReducer', action.payload);
      state.funeralbeforerites = true;
      state.funerallocation = action.payload;
    },
    graveSideServiceReducer: (state, action) => {
      // console.log('action.payload in graveSideServiceReducer', action.payload);
    },
    graveSideLocationReducer: (state, action) => {
      // console.log('action.payload in graveSideLocationReducer', action.payload);
      state.gravesideservice = true;
      state.gravesidelocation = action.payload;
    },
    memorialServiceReducer: (state, action) => {
      // console.log('action.payload in memorialServiceReducer', action.payload);
    },
    memorialLocationReducer: (state, action) => {
      // console.log('action.payload in memorialLocationReducer', action.payload);
      state.memorialservice = true;
      state.memoriallocation = action.payload;
    },
    updateRitesPlanSummaryReducer: (state, action) => {
      console.log('UpdateRitesPlanReducer State', action.payload);
      state.rite = action.payload.rite;
      state.funeralhome = action.payload.funeralhome;
      state.funeralbeforerites = action.payload.funeralbeforerites;
      state.funerallocation = action.payload.funerallocation;
      state.gravesideservice = action.payload.gravesideservice;
      state.gravesidelocation = action.payload.gravesidelocation;
      state.memorialservice = action.payload.memorialservice;
      state.memoriallocation = action.payload.memoriallocation;
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
  updateRitesPlanSummaryReducer,
} = plan.actions;

export default plan.reducer;

export const planState = (state) => state;
