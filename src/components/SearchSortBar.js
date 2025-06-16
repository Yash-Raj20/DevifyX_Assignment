import React from "react";

const SearchSortBar = ({ searchTerm, setSearchTerm, sortBy, setSortBy }) => (
  <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-6">
    <input
      type="text"
      placeholder="🔍 Search by title..."
      value={searchTerm}
      title="Search by title"
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full sm:w-2/3 px-4 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
    />

    <select
      value={sortBy}
      title="Sort items"
      onChange={(e) => setSortBy(e.target.value)}
      className="w-full sm:w-1/3 px-4 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
    >
      <option value="title">Sort by Title</option>
      <option value="date">Sort by Date</option>
    </select>
  </div>
);

export default SearchSortBar;