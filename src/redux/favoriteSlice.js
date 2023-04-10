import { createSlice } from '@reduxjs/toolkit';
import { fetchProductFavoriteDetalise } from './operations';

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    idProducts: [],
    favoriteProduct: [],
    isLoading: false,
    error: null,
    favoriteStatuses: [],
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
    findIndexProduct(state, actions) {
      if (!actions.payload.products) {
        state.favoriteStatuses[actions.payload - 1] =
          !state.favoriteStatuses[actions.payload - 1];
        return;
      }
      const index = actions.payload.products.findIndex(
        p => p.id === actions.payload.id
      );

      state.favoriteStatuses[index] = !state.favoriteStatuses[index];
      return state;
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

export const {
  addFavoriteProduct,
  deleteFavoriteSlice,
  clearFavoriteProduct,
  findIndexProduct,
} = favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;
