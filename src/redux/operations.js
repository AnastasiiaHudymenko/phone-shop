import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://dummyjson.com/';

export const fetchAllProducts = createAsyncThunk(
  'products/fetchAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('products');
      return res.data.products;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchProductDetalis = createAsyncThunk(
  'product/fetchDetalis',
  async (id, thunkAPI) => {
    try {
      const res = await axios.get(`products/${id}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchProductFavoriteDetalise = createAsyncThunk(
  'product/fetchFavoriteDetalis',
  async (id, thunkAPI) => {
    try {
      const res = await axios.get(`products/${id}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
