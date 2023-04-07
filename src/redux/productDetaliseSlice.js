import { createSlice } from '@reduxjs/toolkit';
import { fetchProductDetalis } from './operations';

const productDetalisSlice = createSlice({
  name: 'productDetalis',
  initialState: {
    product: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchProductDetalis.pending](state) {
      state.isLoading = true;
    },
    [fetchProductDetalis.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [fetchProductDetalis.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.product = action.payload;
    },
  },
});

export const productDetalisReducer = productDetalisSlice.reducer;
