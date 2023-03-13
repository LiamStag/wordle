import { configureStore } from '@reduxjs/toolkit';
import wordReducer from '../features/wordSlice';

export const store = configureStore({
  reducer: {
    word: wordReducer,
  },
});
