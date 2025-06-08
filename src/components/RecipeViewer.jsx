import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { getRecipeImage } from '../ai';

export default function RecipeViewer({ recipeMarkdown }) {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    let canceled = false;
    getRecipeImage(recipeMarkdown).then(url => {
      if (!canceled) setImageUrl(url);
    });
    return () => { canceled = true; };
  }, [recipeMarkdown]);

  return (
    <div className="recipe-viewer" aria-live="polite">
      <h2>Chef Claude Recommends:</h2>
      <ReactMarkdown>{recipeMarkdown}</ReactMarkdown>
      {imageUrl ? (
        <img src={imageUrl} alt="Dish preview" />
      ) : (
        <p>Loading image…</p>
      )}
    </div>
  );
}

RecipeViewer.propTypes = {
  recipeMarkdown: PropTypes.string.isRequired,
};