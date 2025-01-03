import { useState } from 'react';

const Filters = ({ setFilters, setSearchQuery }) => {
  const [author, setAuthor] = useState('');
  const [dateRange, setDateRange] = useState('');
  const [type, setType] = useState('');

  const handleFilterChange = () => {
    setFilters({ author, dateRange, type });
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Set search query for global search
  };

  return (
    <div className="flex flex-col space-y-4">
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Filter by Author"
        className="p-2 border border-gray-300 rounded-md"
      />
      <input
        type="text"
        value={dateRange}
        onChange={(e) => setDateRange(e.target.value)}
        placeholder="Filter by Date Range"
        className="p-2 border border-gray-300 rounded-md"
      />
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="p-2 border border-gray-300 rounded-md"
      >
        <option value="">Select Type</option>
        <option value="news">News</option>
        <option value="blog">Blog</option>
      </select>
      <button onClick={handleFilterChange} className="px-4 py-2 bg-blue-500 text-white rounded-md">
        Apply Filters
      </button>

      {/* Global Search Bar */}
      <input
        type="text"
        onChange={handleSearchChange}
        placeholder="Search Articles"
        className="p-2 border border-gray-300 rounded-md"
      />
    </div>
  );
};

export default Filters;
