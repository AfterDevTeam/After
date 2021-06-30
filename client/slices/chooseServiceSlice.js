/** @format */
/** @format */

import { createSlice } from '@reduxjs/toolkit';

export const service = createSlice({
  name: 'service',
  initialState: {
    guestlist: [],
    participants: [],
    prayersbool: false,
    prayersread: [],
    musicbool: false,
    musicplayed: [],
    cateringbool: false,
    cateringservice: '',
    extras: '',
  },
  reducers: {
    guestListReducer: (state, action) => {
      // console.log('action.payload in guestListReducer', action.payload);
      if (action.payload === []) return;
      state.guestlist = action.payload;
      return;
    },
    participantsReducer: (state, action) => {
      // console.log('action.payload in participantsReducer', action.payload);
      state.participants = action.payload;
    },
    prayersReadReducer: (state, action) => {
      // console.log('action.payload in prayersReadReducer', action.payload);
      state.prayersbool = true;
      state.prayersread = action.payload;
    },
    musicPlayedReducer: (state, action) => {
      // console.log('action.payload in musicPlayedReducer', action.payload);
      state.musicbool = true;
      state.musicplayed = action.payload;
    },
    cateringServiceReducer: (state, action) => {
      // console.log('action.payload in cateringServiceReducer', action.payload);
      state.cateringbool = true;
      state.cateringservice = action.payload;
    },
    extrasReducer: (state, action) => {
      // console.log('action.payload in extrasReducer', action.payload);
      state.extras = action.payload;
    },
    updateServiceSummaryReducer: (state, action) => {
      console.log('Service Summary Reducer State', action.payload);
      state.guestlist = action.payload.guestlist;
      state.participants = action.payload.participants;
      state.prayersbool = action.payload.prayersbool;
      state.prayersread = action.payload.prayersread;
      state.musicbool = action.payload.musicbool;
      state.musicplayed = action.payload.musicplayed;
      state.cateringbool = action.payload.cateringbool;
      state.cateringservice = action.payload.cateringservice;
      state.extras = action.payload.extras;
      console.log('hello');
    },
  },
});

export const {
  guestListReducer,
  participantsReducer,
  prayersReadReducer,
  musicPlayedReducer,
  cateringServiceReducer,
  extrasReducer,
  updateServiceSummaryReducer,
} = service.actions;

export default service.reducer;

export const serviceState = (state) => state;
