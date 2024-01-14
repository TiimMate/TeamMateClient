import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import logger from 'redux-logger';

import testReducer from './reducers/testReducer';

const store = configureStore({
  reducer: {
    test: testReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({ thunk, logger }),
});

export default store;
