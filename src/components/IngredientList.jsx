export default function IngredientList(props) {
  const ingredientlistitems = props.ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  return (
    <section>
      <h2>Ingredients on hand </h2>

      <ul className="indgredient-List" aria-live="polite">
        {ingredientlistitems}
      </ul>
      {props.ingredients.length >= 3 && (
        <div className="get-recipe-container">
          <div>
            <h2>Ready for a recipe</h2>
            <p>Generating the recipe based on the list of your ingredients</p>
          </div>
          <button onClick={props.getRecipe}>Get a recipe</button>
        </div>
      )}
    </section>
  );
}
