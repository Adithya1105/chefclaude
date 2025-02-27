import { useState } from "react";
import React from "react";
import IngredientList from "./components/IngredientList";
import ClaudeRecipe from "./components/ClaudeRecipe";
import getRecipeFromMistral from "./ai"; 

export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);
  const [recipeShown, setRecipeShown] = React.useState(false);
  const [recipe, setRecipe] = React.useState("");

  async function getRecipe() {
    try {
      const recipeMarkdown = await getRecipeFromMistral(ingredients);
      console.log(recipeMarkdown);
      setRecipe(recipeMarkdown); 
      setRecipeShown(true);
    } catch (error) {
      console.error("Error fetching recipe:", error);
    }
  }

  function addingredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredient) => [...prevIngredient, newIngredient]);
  }

  return (
    <main>
      <form action={addingredient} className="ingridentform">
        <input
          type="text"
          placeholder="e.g chicken"
          aria-label="Add Ingredient"
          name="ingredient"
        />
        <button type="submit">Add Ingredient</button>
      </form>

      {ingredients.length > 0 && (
        <IngredientList ingredients={ingredients} getRecipe={getRecipe} />
      )}

      {recipeShown && <ClaudeRecipe recipe={recipe} />}
    </main>
  );
}
