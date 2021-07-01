

import { createSlice } from '@reduxjs/toolkit';

// Create slice accepts an initial state, an object full of reducer functions, and a slice "name". It automatically
// generates action creators and action types that correspond to the reducers and state. https://redux-toolkit.js.org/api/createslice
// The slice object is passed to createReducer, so reducers may safely 'mutate' the state they are given

export const loggedStatus = createSlice({
  name: 'loggedStatus',
  initialState: {
    loggedIn: 'false',
  },
  reducers: {
    loggedInReducer: (state, action) => {
      console.log('action.payload in loggedIn reducer', action.payload);
      state.loggedIn = action.payload;
    },
  },
});

// export actions
export const {
  loggedInReducer
} = loggedStatus.actions;

// export reducer
export default loggedStatus.reducer;

export const loggedStatusState = (state) => state;
