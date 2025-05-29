import React from 'react';

const ModalRecipe = ({ modalMeal, setModalMeal }) => {
  if (!modalMeal) return null;

  const ingredients = Array.from({ length: 20 }, (_, i) => {
    const ing = modalMeal[`strIngredient${i+1}`];
    const msr = modalMeal[`strMeasure${i+1}`];
    return ing && ing.trim() ? `${msr} ${ing}` : null;
  }).filter(Boolean);

  const steps = modalMeal.strInstructions
    ? modalMeal.strInstructions
        .split(/\r?\n|\.\s+(?=[A-Z])/)
        .map(s => s.trim())
        .filter(Boolean)
    : [];

  return (
    <div className="modal-overlay show" onClick={() => setModalMeal(null)}>
      <div
        className="modal-content"
        onClick={e => e.stopPropagation()}
      >
        <button
          className="modal-close-btn"
          onClick={() => setModalMeal(null)}
        >
          &times;
        </button>

        <h2 className="modal-title">{modalMeal.strMeal}</h2>

        <img
          className="modal-image"
          src={modalMeal.strMealThumb}
          alt={modalMeal.strMeal}
        />

        <p className="modal-meta">
          <span className="modal-category">{modalMeal.strCategory}</span> |{' '}
          <span className="modal-area">{modalMeal.strArea}</span>
        </p>

        <h3>Ingredientes</h3>
        <ul className="modal-ingredients-list">
          {ingredients.map((line, idx) => (
            <li key={idx}>{line}</li>
          ))}
        </ul>

        <h3>Instrucciones</h3>
        <ol className="modal-instructions">
          {steps.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>

        {modalMeal.strYoutube && (
          <>
            <h3 className="modal-youtube-title">Video de YouTube</h3>
            <a
              className="modal-youtube-link"
              href={modalMeal.strYoutube}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver video en YouTube <i className="fab fa-youtube ml-1"></i>
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default ModalRecipe;