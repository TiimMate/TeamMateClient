import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import logger from 'redux-logger';

const store = configureStore({
  reducer: {},
  middleware: getDefaultMiddleware => getDefaultMiddleware({ thunk, logger }),
});

export default store;
