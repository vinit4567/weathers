// src/DebouncedSearch.js

import React, { useState, useEffect } from 'react';

function DebouncedSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    // Clear the previous timeout if any
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    // If query is empty, reset results and exit early
    if (!query) {
      setResults([]);
      return;
    }

    // Set a new timeout for the debouncing
    const id = setTimeout(() => {
      setLoading(true);
      setError('');

      // Fetch data from JSONPlaceholder
      fetch(`https://jsonplaceholder.typicode.com/users`)
        .then((response) => response.json())
        .then((data) => {
          // Filter the data based on the query
          const filteredResults = data.filter(user =>
            user.name.toLowerCase().includes(query.toLowerCase())
          );
          setResults(filteredResults);
          setLoading(false);
        })
        .catch(err => {
          setError('Failed to load data');
          setLoading(false);
        });
    }, 500); // Debounce for 500ms

    setTimeoutId(id);

    // Cleanup function to clear timeout
    return () => clearTimeout(id);
  }, [query]);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for users..."
      />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {results.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default DebouncedSearch;
