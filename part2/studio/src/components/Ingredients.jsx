import recipedata from "./recipe.json"

function IngredientList() {
  const ingredientElements = recipedata[0].ingredients.map((ingredient, index) => (
    <li key={index}>{ingredient}</li>
  ));
  return (
    <div>
      <h3>Ingredients</h3>
      <ul>
        {ingredientElements}
      </ul>
    </div>
   )
 }
 
 export default IngredientList;
 
//import json file for the data
//use a nested map to get inside the inner array
 