import React from 'react';

export default function SearchBar({
  query,
  setQuery,
  searchMealByName,
  getRandomMeal     
}) {
  return (
    <div className="input-group">
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Busca una receta por nombre..."
        className="flex-grow"
      />
      <button onClick={searchMealByName} className="btn">
        <i className="fas fa-search"></i> Buscar
      </button>
      <button onClick={getRandomMeal} className="btn">
        <i className="fas fa-dice"></i> Aleatorio
      </button>
    </div>
  );
}