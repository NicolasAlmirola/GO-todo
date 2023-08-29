import React from 'react';
import './TodoSearch.css';
import { TodoContext } from '../TodoContext';

function TodoSearch() {
  const {
    searchValue,
    setSearchValue,
} = React.useContext(TodoContext)

  return (
    <div className="group">
      <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
        <path d="M20.53 18.47l-3.66-3.66C19.195 14.24 20 12.214 20 10c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 10c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z" />
      </svg>
      <input
        placeholder="Search"
        type="search"
        id="buscador"
        className="input"
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
    </div>
  );
}

export { TodoSearch };
