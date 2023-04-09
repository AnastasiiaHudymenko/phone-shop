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

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['favorite'],
};

const rootReducer = combineReducers({
  products: productReducer,
  productDetalis: productDetalisReducer,
  favorite: favoriteReducer,
});

const persistedContactsReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedContactsReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// export const store = configureStore({
//   reducer: {
//     products: productReducer,
//     productDetalis: productDetalisReducer,
//     favorite: favoriteReducer,
//   },
// });

export const persistor = persistStore(store);
