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
import { favoriteStatusesReducer } from './favoriteStatusesSlice';

const rootPersistConfig = {
  key: 'root',
  storage,
  blacklist: ['favorite'],
};

const favoritePersistConfig = {
  key: 'favorite',
  storage,
  blacklist: ['favoriteProduct'],
};

const rootReducer = combineReducers({
  favorite: persistReducer(favoritePersistConfig, favoriteReducer),
  products: productReducer,
  productDetalis: productDetalisReducer,
  favoriteStatuses: favoriteStatusesReducer,
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['favoriteStatuses', 'favorite'],
// };

// const rootReducer = combineReducers({
//   products: productReducer,
//   productDetalis: productDetalisReducer,
//   favorite: favoriteReducer,
//   favoriteStatuses: favoriteStatusesReducer,
// });

// const persistedContactsReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
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
