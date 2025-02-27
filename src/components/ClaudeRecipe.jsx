// import PropTypes from 'prop-types'
// import ReactMarkdown from "react-markdown"
// //import ReactMarkdown from 'react-markdown'




// const ClaudeRecipe = (props) => {
//     return (
//         <section className="suggested-recipe-container" arial-live="polite">
//           <h2>Chef claude Recommends :</h2>
          
//           <ReactMarkdown>{props.recipe}</ReactMarkdown>
//         </section>
//     );
// };

// export default ClaudeRecipe;





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
            <p>Loading image...</p> // ✅ Placeholder while loading
        )}
    </section>
);
}

ClaudeRecipe.propTypes = {
    recipe: PropTypes.string.isRequired,
};

export default ClaudeRecipe;
