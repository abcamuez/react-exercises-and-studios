import React from 'react';
import  "./styling.css"
import recipeData from "./recipe.json"

function AuthorInfo() {
  let authorName = recipeData[0].author
  let authorImage = recipeData[0].authorImage
  let authorWebsite = recipeData[0].authorWebsite
   return(
    <div>
      <img className="authorImage" alt={authorName} src={authorImage}/>
      <h2>{authorName}</h2>
      <a href={authorWebsite}>Go to Website</a>
    </div>
   )
 }
 
 export default AuthorInfo;
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 