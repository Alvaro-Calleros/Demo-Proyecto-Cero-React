import React from 'react';
import MealCard from './MealCard';

const MealList = ({ meals, getMealDetailsById }) => {
  return (
    <div className="meal-results">
      {meals.map((meal) => (
        <MealCard key={meal.idMeal} meal={meal} onShowDetails={getMealDetailsById} />
      ))}
    </div>
  );
};

export default MealList;