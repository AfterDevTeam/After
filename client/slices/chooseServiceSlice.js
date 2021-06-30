/** @format */
/** @format */

import { createSlice } from '@reduxjs/toolkit';

export const service = createSlice({
  name: 'service',
  initialState: {
    guestList: [],
    participants: [],
    prayersBool: false,
    prayersRead: [],
    musicBool: false,
    musicPlayed: [],
    cateringBool: false,
    cateringService: '',
    extras: '',
  },
  reducers: {
    guestListReducer: (state, action) => {
      console.log('action.payload in guestListReducer', action.payload);
      if (action.payload === []) return;
      state.guestList.push(action.payload);
      return;
    },
    participantsReducer: (state, action) => {
      console.log('action.payload in participantsReducer', action.payload);
      state.participants.push(action.payload);
    },
    prayersReadReducer: (state, action) => {
      console.log('action.payload in prayersReadReducer', action.payload);
      state.prayersBool = true;
      state.prayersRead.push(action.payload);
    },
    musicPlayedReducer: (state, action) => {
      console.log('action.payload in musicPlayedReducer', action.payload);
      state.musicBool = true;
      state.musicPlayed.push(action.payload);
    },
    cateringServiceReducer: (state, action) => {
      console.log('action.payload in cateringServiceReducer', action.payload);
      state.cateringBool = true;
      state.cateringService = action.payload;
    },
    extrasReducer: (state, action) => {
      console.log('action.payload in extrasReducer', action.payload);
      state.extras = action.payload;
    },
    updateServiceSummaryReducer: (state, action) => {
      state.guestList = action.payload.guestlist;
      state.participants = action.payload.participants;
      state.prayersBool = action.payload.prayersbool;
      state.prayersRead = action.payload.prayersread;
      state.musicBool = action.payload.musicbool;
      state.musicPlayed = action.payload.musicplayed;
      state.cateringBool = action.payload.cateringbool;
      state.cateringService = action.payload.cateringservice;
      state.extras = action.payload.extras;
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
