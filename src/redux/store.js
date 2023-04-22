import { configureStore } from '@reduxjs/toolkit'
import userSlice from './user/user'
import allUsersSlice from './allUsers/allusers'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import allOrders from './allOrders/allOrders';
import allProducts from './allProducts/allProducts';
import allStores from './allStores/allStores';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}
const persistedReducer = persistReducer(persistConfig, userSlice)

export const store = configureStore({
  reducer: {
    user: persistedReducer,
    allUsers: allUsersSlice,
    allOrders: allOrders,
    allProducts: allProducts,
    allStores: allStores
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
export const persistor = persistStore(store)
