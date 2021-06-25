/** @format */

import { configureStore } from '@reduxjs/toolkit';
import selectPlanSlice from './slices/selectPlanSlice';
export default configureStore({
  reducer: {
    plan: selectPlanSlice,
  },
});
