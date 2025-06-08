
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import ReactMarkdown from "react-markdown";
import { getRecipeImage } from "../ai"; 

const ClaudeRecipe = (props) => {
    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
        if (props.recipe) {
            getRecipeImage(props.recipe).then((url) => {
                if (url) setImageUrl(url);
            });
        }
    }, [props.recipe]);

    return (
        <section className="suggested-recipe-container" aria-live="polite">
            <h2>Chef Claude Recommends:</h2>
            <ReactMarkdown>{props.recipe}</ReactMarkdown>
            {imageUrl ? (
            <img src={imageUrl} alt="Recipe" className="recipe-image" />
        ) : (
            <p>Loading image...</p> 
        )}
    </section>
);
}

ClaudeRecipe.propTypes = {
    recipe: PropTypes.string.isRequired,
};

export default ClaudeRecipe;
