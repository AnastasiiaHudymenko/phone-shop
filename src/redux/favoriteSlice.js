import { createSlice } from '@reduxjs/toolkit';
import { fetchProductFavoriteDetalise } from './operations';

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    idProducts: [],
    favoriteProduct: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addFavoriteProduct(state, action) {
      state.idProducts.push(action.payload);
    },
    deleteFavoriteSlice(state, action) {
      const index = state.idProducts.findIndex(
        product => product === action.payload
      );
      state.idProducts.splice(index, 1);
    },
    clearFavoriteProduct(state) {
      state.favoriteProduct = [];
    },
  },
  extraReducers: {
    [fetchProductFavoriteDetalise.pending](state) {
      state.isLoading = true;
    },
    [fetchProductFavoriteDetalise.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [fetchProductFavoriteDetalise.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.favoriteProduct.push(action.payload);
    },
  },
});

export const { addFavoriteProduct, deleteFavoriteSlice, clearFavoriteProduct } =
  favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;
