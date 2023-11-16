import { useState } from 'react';
import css from './SearchForm.module.css';

export const SearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const changeQuery = e => {
    setQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!query) return;
    onSearch(query);
    setQuery('');
  };

  return (
    <form className={css.searchForm} onSubmit={handleSubmit}>
      <input
        className={css.searchInput}
        type="text"
        placeholder="Enter for search movies"
        name="query"
        value={query}
        onChange={changeQuery}
      />
      <button className={css.searchButton} type="submit">
        Search Movie
      </button>
    </form>
  );
};
