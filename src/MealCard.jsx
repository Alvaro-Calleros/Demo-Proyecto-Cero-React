import React from 'react';

const MealCard = ({ meal, onShowDetails }) => {
  return (
    <div className="meal-card">
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <div className="meal-card-content">
        <h3>{meal.strMeal}</h3>
        <button
          className="btn btn-view-recipe"
          onClick={() => onShowDetails(meal.idMeal)}
        >
          Ver Receta <i className="fas fa-arrow-right ml-2"></i>
        </button>
      </div>
    </div>
  );
};

export default MealCard;