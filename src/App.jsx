import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import MealList from './MealList';
import ModalRecipe from './ModalRecipe';
import MessageBox from './MessageBox';
import LoadingIndicator from './LoadingIndicator';

const App = () => {
  const [query, setQuery] = useState('');
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [modalMeal, setModalMeal] = useState(null);

  const API_BASE_URL = 'https://www.themealdb.com/api/json/v1/1/';
  
  const showMessage = (text, type = 'info') => {
    setMessage({ text, type });
    setTimeout(() => setMessage(null), 5000);
  };

  const fetchMeals = async (endpoint) => {
    setLoading(true);
    setMeals([]);
    setMessage(null);
    try {
      const res = await fetch(`${API_BASE_URL}${endpoint}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      return data;
    } catch (err) {
      showMessage(`Error al cargar: ${err.message}`, 'error');
      return null;
    } finally {
      setLoading(false);
    }
  };

  const searchMealByName = async () => {
    if (!query.trim()) return showMessage('Por favor, introduce un nombre para buscar.', 'info');
    const data = await fetchMeals(`search.php?s=${query}`);
    if (data?.meals) setMeals(data.meals);
    else showMessage(`No se encontraron recetas para "${query}".`, 'info');
  };

  const getRandomMeal = async () => {
    const data = await fetchMeals('random.php');
    if (data?.meals) setMeals(data.meals);
    else showMessage('No se pudo cargar una receta aleatoria.', 'error');
  };

  const getMealDetailsById = async (id) => {
    const data = await fetchMeals(`lookup.php?i=${id}`);
    if (data?.meals?.length) setModalMeal(data.meals[0]);
    else showMessage('No se pudieron cargar los detalles de la receta.', 'error');
  };

  useEffect(() => {
    getRandomMeal();
  }, []);

  return (
    <div className="app-container">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-8">MAGIC IN RECIPIES</h1>
      <SearchBar 
        query={query} 
        setQuery={setQuery} 
        searchMealByName={searchMealByName} 
        getRandomMeal={getRandomMeal} 
      />
      <MessageBox message={message} />
      <LoadingIndicator loading={loading} />
      <MealList meals={meals} getMealDetailsById={getMealDetailsById} />
      <ModalRecipe modalMeal={modalMeal} setModalMeal={setModalMeal} />
    </div>
  );
};

export default App;