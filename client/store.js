/** @format */

import { configureStore } from '@reduxjs/toolkit';
import checkDataSlice from './slices/checkDataSlice';
import chooseServiceSlice from './slices/chooseServiceSlice';
import chooseServiceReducer from './slices/chooseServiceSlice';
import futureChecklistSlice from './slices/futureChecklistSlice';
import selectPlanSlice from './slices/selectPlanSlice';
import userInfoSlice from './slices/userInfoSlice';
import loggedStatusSlice from './slices/loggedStatusSlice';

export default configureStore({
  reducer: {
    plan: selectPlanSlice,
    service: chooseServiceSlice,
    checklist: futureChecklistSlice,
    userInfo: userInfoSlice,
    checkData: checkDataSlice,
    loggedStatus: loggedStatusSlice,
  },
});
