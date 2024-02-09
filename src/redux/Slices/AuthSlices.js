import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuth: false,
  id: '',
  pw: '',
  nickname: '',
};

export const AuthSlices = createSlice({
  name: 'AuthSlice',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.isAuth = true;
      state.id = action.payload.id;
      state.nickname = action.payload.nickname;
      state.gender = action.payload.gender;
      state.age = action.payload.age;
      state.region = action.payload.region;
    },
    logoutUser: (state, action) => {
      state.isAuth = false;
    },
  },
});

export const { loginUser, logoutUser } = AuthSlices.actions;
export default AuthSlices;
