import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { productReducer } from './productsSlice';
import { productDetalisReducer } from './productDetaliseSlice';
import { favoriteBasketReducer } from './favoriteBasketSlice';

const rootPersistConfig = {
  key: 'root',
  storage,
  blacklist: ['favoriteBasket', 'products', 'productDetalis'],
};

const favoritePersistConfig = {
  key: 'favoriteBasket',
  storage,
  blacklist: ['favoriteProduct', 'basketProduct'],
};

const rootReducer = combineReducers({
  favoriteBasket: persistReducer(favoritePersistConfig, favoriteBasketReducer),
  products: productReducer,
  productDetalis: productDetalisReducer,
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
