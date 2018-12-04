import React from 'react';


export default function IngredientList({ingredients = null}){
  return <div>
    <label>Ingredient List:</label>
    <div>
      {ingredients !== null ?
        ingredients.map(ingredient =>
          <div key={ingredient.id}>{ingredient.id}.- {ingredient.name}</div>):
        'No ingredients added yet.'
      }
    </div>
  </div>;
}
