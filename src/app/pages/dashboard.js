import { useEffect, useState } from 'react';
import { fetchNews } from '../lib/news';  // Import the news fetching helper
import { useAppDispatch, useAppSelector } from '../store/store'; // Redux hooks
import { setArticles } from '../store/slices/newsSlice'; // Action to set articles
import Filters from '../components/Filters';
import NewsCard from '../components/NewsCard';
import Payout from '../components/Payout';

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    author: '',
    dateRange: '',
    type: '',
  });
  const [loading, setLoading] = useState(true);
  const articles = useAppSelector((state) => state.news.articles);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await fetchNews(searchQuery);
      dispatch(setArticles(data)); // Set articles to Redux state
      setLoading(false);
    };
    fetchData();
  }, [searchQuery, filters, dispatch]);  // Re-fetch when search query or filters change

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>

      {/* Filters and Global Search */}
      <Filters setFilters={setFilters} setSearchQuery={setSearchQuery} />

      {/* Payout Overview */}
      <Payout />

      <div className="mt-6">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <h2 className="text-xl font-semibold">Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {articles.map((article, idx) => (
                <NewsCard key={idx} article={article} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
