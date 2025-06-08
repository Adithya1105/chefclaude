import React, { useState } from 'react';
import PropTypes from 'prop-types';

function IngredientInput({ ingredients, onAdd }) {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  // Clear error as soon as user types
  const handleChange = e => {
    setInput(e.target.value);
    if (error) {
      setError('');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const trimmed = input.trim().toLowerCase();

    if (!trimmed) {
      setError('Please enter an ingredient.');
      return;
    }
    if (ingredients.includes(trimmed)) {
      setError(`You already added "${trimmed}".`);
      return;
    }

    onAdd(trimmed);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="ingredient-form">
      <div style={{ display: 'flex', gap: '8px' }}>
        <input
          type="text"
          aria-label="Add ingredient"
          placeholder="e.g. chicken"
          value={input}
          onChange={handleChange}
          tyle={{
            borderColor: error ? 'white' : undefined,
            flex: 2,
          }}
        />
        <button type="submit">
          Add
        </button>
      </div>
      {error && (
        <p role="alert" style={{ color: 'red', marginTop: 4, fontSize: 14 }}>
          {error}
        </p>
      )}
    </form>
  );
}

IngredientInput.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default React.memo(IngredientInput);
