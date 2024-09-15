import { configureStore } from '@reduxjs/toolkit';
import myState from './slice'; // Your existing slice
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Default to localStorage for web

// Persist configuration
const persistConfig = {
  key: 'root',
  storage, // You can change this to sessionStorage or another storage if needed
};

// Wrap your reducer with persistReducer
const persistedReducer = persistReducer(persistConfig, myState);

// Configure store with persisted reducer
export const store = configureStore({
  reducer: {
    myStore: persistedReducer, // Replaced with the persisted reducer
  },
});

// Create persistor
export const persistor = persistStore(store);
