import { createSlice } from '@reduxjs/toolkit';

export const testSlice = createSlice({
  name: 'test',

  initialState: {
    value: 'ping',
  },

  reducers: {
    pong: state => {
      if (state.value === 'ping') state.value = 'pong';
      else state.value = 'ping';
    },
  },
});

export const { pong } = testSlice.actions;
export default testSlice.reducer;
