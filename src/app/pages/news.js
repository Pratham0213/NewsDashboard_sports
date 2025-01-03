import { useState, useEffect } from 'react';
import { fetchNews } from '../lib/news';
import NewsCard from '../components/NewsCard';

const NewsPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getNews = async () => {
      const data = await fetchNews('latest');
      setArticles(data);
      setLoading(false);
    };
    getNews();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading news...</p>
      ) : (
        <div>
          {articles.map((article, index) => (
            <NewsCard key={index} article={article} />
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsPage;
