import { createSlice } from '@reduxjs/toolkit';

const CategorySlices = createSlice({
  name: 'CategorySlices',
  initialState: { value: 0 },
  reducers: {
    change: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default CategorySlices;
