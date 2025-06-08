import React, {
  useState,
  useCallback,
  Suspense,
  lazy
} from 'react';

import IngredientInput      from './components/IngredientInput';
import IngredientList       from './components/IngredientList';
import getRecipeFromMistral from './ai';

const RecipeViewer = lazy(() => import('./components/RecipeViewer'));

export default function Main() {
  const [ingredients, setIngredients] = useState([]);
  const [recipe,      setRecipe]      = useState(null);
  const [loading,     setLoading]     = useState(false);

  const addIngredient = useCallback(ing =>
    setIngredients(prev => [...prev, ing])
  , []);

  const removeIngredient = useCallback(ing =>
    setIngredients(prev => prev.filter(i => i !== ing))
  , []);

  const fetchRecipe = useCallback(async () => {
    setLoading(true);
    try {
      const md = await getRecipeFromMistral(ingredients);
      setRecipe(md);
    } finally {
      setLoading(false);
    }
  }, [ingredients]);


  const bgUrl = process.env.PUBLIC_URL + '/images/kitchenn.jpg';

  return (
    <main
      style={{
        backgroundImage:  `url(${bgUrl})`,
        backgroundSize:   'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width:            '100%',      
        minHeight:        '100vh',    
        padding:          '2rem',     
        boxSizing:        'border-box' 
      }}
    >
      {}
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <IngredientInput
          ingredients={ingredients}
          onAdd={addIngredient}
        />

        {ingredients.length > 0 && (
          <IngredientList
            ingredients={ingredients}
            onRemove={removeIngredient}
          />
        )}

        {ingredients.length >= 3 && (
          <button
            className="get-recipe"
            onClick={fetchRecipe}
            disabled={loading}
          >
            {loading ? 'Generating…' : 'Get a Recipe'}
          </button>
        )}

        {recipe && (
          <Suspense fallback={<p>Loading recipe viewer…</p>}>
            <RecipeViewer recipeMarkdown={recipe} />
          </Suspense>
        )}
      </div>
    </main>
  );
}
