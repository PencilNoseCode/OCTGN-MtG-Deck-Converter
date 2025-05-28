// store.js
import { configureStore } from '@reduxjs/toolkit';
import settingsReducer from './slices/settingsSlice';
import decksReducer from './slices/decksSlice';
import currentDeckReducer from './slices/currentDeckSlice'

const store = configureStore({
  reducer: {
    settings: settingsReducer,
    decks: decksReducer,
    currentDeck: currentDeckReducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
