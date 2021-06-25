/** @format */
/** @format */

import { createSlice } from '@reduxjs/toolkit';

export const service = createSlice({
  name: 'service',
  initialState: {
    guestList: [],
    participants: [],
    prayersRead: [],
    musicPlayed: [],
    cateringService: '',
    extras: '',
  },
  reducers: {
    guestListReducer: (state, action) => {
      console.log('action.payload in guestListReducer', action.payload);
    },
    participantsReducer: (state, action) => {
      console.log('action.payload in participantsReducer', action.payload);
    },
    prayersReadReducer: (state, action) => {
      console.log('action.payload in prayersReadReducer', action.payload);
    },
    musicPlayedReducer: (state, action) => {
      console.log('action.payload in musicPlayedReducer', action.payload);
    },
    cateringServiceReducer: (state, action) => {
      console.log('action.payload in cateringServiceReducer', action.payload);
    },
    extrasReducer: (state, action) => {
      console.log('action.payload in extrasReducer', action.payload);
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
} = service.actions;

export default service.reducer;

export const serviceState = (state) => state;
