/** @format */

import { createSlice } from '@reduxjs/toolkit';

// Create slice accepts an initial state, an object full of reducer functions, and a slice "name". It automatically
// generates action creators and action types that correspond to the reducers and state. https://redux-toolkit.js.org/api/createslice
// The slice object is passed to createReducer, so reducers may safely 'mutate' the state they are given

export const userInfo = createSlice({
  name: 'userInfo',
  initialState: {
    firstName: '',
    lastName: '',
    email: '',
    userId: '',
    showPassword: false,
  },
  reducers: {
    userIdReducer: (state, action) => {
      console.log('action.payload in userId reducer', action.payload);
      state.userId = action.payload;
    },
    firstNameReducer: (state, action) => {
      console.log('action.payload in firstName reducer', action.payload);
      state.firstName = action.payload;
    },
    lastNameReducer: (state, action) => {
      console.log('action.payload in lastName reducer', action.payload);
      state.lastName = action.payload;
    },
    emailReducer: (state, action) => {
      console.log('action.payload in emailReducer reducer', action.payload);
      state.email = action.payload;
    },
    showPasswordReducer: (state, action) => {
      console.log('action.payload in showPassword reducer', action.payload);
      state.showPassword = !action.payload;
    },
    updateUserInfoSummaryReducer: (state, action) => {
      console.log(
        'updateUserInfoSummaryReducer action.payload',
        action.payload
      );
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.showPassword = action.payload.showPassword;
      state.userId = action.payload.userId;
    },
  },
});

// export actions
export const {
  firstNameReducer,
  lastNameReducer,
  emailReducer,
  showPasswordReducer,
  updateUserInfoSummaryReducer,
  userIdReducer,
} = userInfo.actions;

// export reducer
export default userInfo.reducer;

export const userInfoState = (state) => state;
