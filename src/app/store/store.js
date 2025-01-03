import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './slices/newsSlice';

export const store = configureStore({
  reducer: {
    news: newsReducer,
  },
  devTools: process.env.NODE_ENV !== 'production', // Enable dev tools in development only
});
