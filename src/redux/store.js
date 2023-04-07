import { configureStore } from '@reduxjs/toolkit';
import { productReducer } from './productsSlice';
import { productDetalisReducer } from './productDetaliseSlice';

export const store = configureStore({
  reducer: {
    products: productReducer,
    productDetalis: productDetalisReducer,
  },
});
