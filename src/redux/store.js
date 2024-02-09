import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import logger from 'redux-logger';
import DaySlices from './Slices/DaySlices';
import AuthSlices from './Slices/AuthSlices';

const store = configureStore({
  reducer: {
    Day: DaySlices.reducer,
    Auth: AuthSlices.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk, logger }),
});

export default store;
