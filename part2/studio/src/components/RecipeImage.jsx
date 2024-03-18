import recipedata from "./recipe.json"

function RecipeImage() {
  let recipeImage = recipedata[0]
   return(<div>
    <img className="recipeImage" src = {recipeImage.recipeImage} alt={recipeImage.name}/>
   </div>)
   

 }
 
 export default RecipeImage;
 
 //import json file for the data
 //apply css for className recipeImage
 