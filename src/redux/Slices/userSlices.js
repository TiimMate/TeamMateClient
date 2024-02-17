import { createSlice } from '@reduxjs/toolkit';

import decodePayload from '../../utils/decodePayload';

const token = localStorage.getItem('access_token'); // only in CSR

const initialState = token
  ? {
      isAuth: true,
      nickname: decodePayload(token).nickname,
    }
  : {
      isAuth: false,
    };

export const userSlices = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuth = true;
      state.id = action.payload.id;
      state.nickname = action.payload.nickname;
      state.gender = action.payload.gender;
      state.age = action.payload.age;
      state.region = action.payload.region;
    },
    logout: (state) => {
      state.isAuth = false;
    },
  },
});

export const { login, logout } = userSlices.actions;
export default userSlices.reducer;
