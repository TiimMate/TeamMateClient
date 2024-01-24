import { createSlice } from '@reduxjs/toolkit';

const DaySlices = createSlice({
  name: 'DaySlice',
  initialState: { value: 0 },
  reducers: {
    change: (state, action) => {
      console.log(action);
      state.value = action.payload;
    },
  },
});

export default DaySlices;
