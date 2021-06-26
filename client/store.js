/** @format */

import { configureStore } from '@reduxjs/toolkit';
import chooseServiceSlice from './slices/chooseServiceSlice';
import chooseServiceReducer from './slices/chooseServiceSlice';
import futureChecklistSlice from './slices/futureChecklistSlice';
import selectPlanSlice from './slices/selectPlanSlice';
export default configureStore({
  reducer: {
    plan: selectPlanSlice,
    service: chooseServiceSlice,
    checklist: futureChecklistSlice,
  },
});
