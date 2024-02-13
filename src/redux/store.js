import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import logger from 'redux-logger';
import DaySlices from './Slices/DaySlices';
import userReducer from './Slices/userSlices';

const store = configureStore({
  reducer: {
    Day: DaySlices.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk, logger }),
});

export default store;
