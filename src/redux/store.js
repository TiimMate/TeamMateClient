import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import logger from 'redux-logger';
import DaySlices from './Slices/DaySlices';

const store = configureStore({
  reducer: {
    Day: DaySlices.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk, logger }),
});

export default store;
