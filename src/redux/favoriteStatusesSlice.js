import { createSlice } from '@reduxjs/toolkit';

const favoriteStatusesSlice = createSlice({
  name: 'favoriteStatuses',
  initialState: [],
  reducers: {
    findIndexProduct(state, actions) {
      const index = actions.payload.products.findIndex(
        p => p.id === actions.payload.id
      );

      state[index] = !state[index];
      return state;
    },
  },
});

export const { findIndexProduct } = favoriteStatusesSlice.actions;
export const favoriteStatusesReducer = favoriteStatusesSlice.reducer;
