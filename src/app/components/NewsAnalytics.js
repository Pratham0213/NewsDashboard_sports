import { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { useAppSelector } from '../store/store';

const NewsAnalytics = () => {
  const articles = useAppSelector((state) => state.news.articles);
  const [data, setData] = useState([]);

  useEffect(() => {
    const articleTypes = articles.reduce((acc, article) => {
      const type = article.type || 'Unknown';
      if (!acc[type]) {
        acc[type] = 1;
      } else {
        acc[type]++;
      }
      return acc;
    }, {});

    const formattedData = Object.keys(articleTypes).map((type) => ({
      name: type,
      value: articleTypes[type],
    }));
    setData(formattedData);
  }, [articles]);

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold">Article Types Analytics</h2>
      <PieChart width={400} height={400}>
        <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={150} fill="#8884d8" label>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#82ca9d' : '#8884d8'} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default NewsAnalytics;
