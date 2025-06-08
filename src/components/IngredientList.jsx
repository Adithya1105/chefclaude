import React from 'react';
import PropTypes from 'prop-types';


function IngredientList({ ingredients, onRemove }) {
  return (
    <section>
      <h2 className="ingredientheading">Ingredients on hand</h2>
      <ul className="ingredient-list">
        {ingredients.map(ing => (
          <li className="ingredient-item" key={ing}>
            <span className="ingredient-text">{ing}</span>
            <button
              className="remove-btn"
              onClick={() => onRemove(ing)}
              aria-label={`Remove ${ing}`}
            >
              ×
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

IngredientList.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default React.memo(IngredientList);