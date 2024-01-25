import { createSlice } from '@reduxjs/toolkit';

const DaySlices = createSlice({
  name: 'DaySlice',
  initialState: { value: 0 },
  reducers: {
    change: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default DaySlices;
