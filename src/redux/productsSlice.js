import { createSlice } from '@reduxjs/toolkit';
import { fetchAllProducts } from './operations';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchAllProducts.pending](state) {
      state.isLoading = true;
    },
    [fetchAllProducts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [fetchAllProducts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.products = action.payload;
    },
  },
});

export const productReducer = productsSlice.reducer;
