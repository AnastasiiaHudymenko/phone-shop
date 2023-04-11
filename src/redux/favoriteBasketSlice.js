import { createSlice } from '@reduxjs/toolkit';
import {
  fetchProductFavoriteDetalise,
  fetchProductBasketDetalise,
} from './operations';

const favoriteBasketSlice = createSlice({
  name: 'favoriteBasket',
  initialState: {
    idProducts: [],
    favoriteProduct: [],
    isLoading: false,
    error: null,
    favoriteStatuses: [],
    idProductsBasket: [],
    basketProduct: [],
    basketStatuses: [],
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
    addBasketProduct(state, action) {
      state.idProductsBasket.push(action.payload);
    },
    deleteBasketSlice(state, action) {
      const index = state.idProductsBasket.findIndex(
        product => product === action.payload
      );
      state.idProductsBasket.splice(index, 1);
    },
    findIndexBasketProduct(state, actions) {
      if (!actions.payload.products) {
        state.basketStatuses[actions.payload - 1] =
          !state.basketStatuses[actions.payload - 1];
        return;
      }
      const index = actions.payload.products.findIndex(
        p => p.id === actions.payload.id
      );

      state.basketStatuses[index] = !state.basketStatuses[index];
      return state;
    },
    clearBasketProduct(state) {
      state.basketProduct = [];
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
    [fetchProductBasketDetalise.pending](state) {
      state.isLoading = true;
    },
    [fetchProductBasketDetalise.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [fetchProductBasketDetalise.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.basketProduct.push(action.payload);
    },
  },
});

export const {
  addFavoriteProduct,
  deleteFavoriteSlice,
  clearFavoriteProduct,
  findIndexProduct,
  addBasketProduct,
  deleteBasketSlice,
  findIndexBasketProduct,
  clearBasketProduct,
} = favoriteBasketSlice.actions;
export const favoriteBasketReducer = favoriteBasketSlice.reducer;
