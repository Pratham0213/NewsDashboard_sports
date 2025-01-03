import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  articles: [],
  filters: {
    author: '',
    dateRange: '',
    type: '',
  },
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setArticles: (state, action) => {
      state.articles = action.payload;
    },
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
  },
});

export const { setArticles, setFilters } = newsSlice.actions;

export default newsSlice.reducer;
