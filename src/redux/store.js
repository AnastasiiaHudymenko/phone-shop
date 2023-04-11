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
import { favoriteReducer } from './favoriteSlice';

const rootPersistConfig = {
  key: 'root',
  storage,
  blacklist: ['favorite', 'products', 'productDetalis'],
};

const favoritePersistConfig = {
  key: 'favorite',
  storage,
  blacklist: ['favoriteProduct', 'basketProduct'],
};

const rootReducer = combineReducers({
  favorite: persistReducer(favoritePersistConfig, favoriteReducer),
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
