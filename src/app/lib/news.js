const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;
const BASE_URL = 'https://newsapi.org/v2/everything';

export const fetchNews = async (query = '', page = 1, pageSize = 10) => {
  const url = `${BASE_URL}?q=${query}&page=${page}&pageSize=${pageSize}&apiKey=${API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.articles;
};
