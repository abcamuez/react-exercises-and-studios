import React from 'react';
import styles from './Description.module.css';

// export default
 function RecipeAuthor() {
    let authorLink = "https://www.mycolombianrecipes.com/es/ceviche-de-camarones/"
    let authorPhoto = "https://www.mycolombianrecipes.com/wp-content/uploads/2019/03/Erica-Dinho-Headshot.jpg"
    let authorName = "Erica Dinho"
    return(
       <div className = {styles.recipeAuthorBlock}>
        <img src= {authorPhoto} alt = "Reasonable alt text" className={styles.imageUpdates} />
        <div>
            <h3>{authorName}</h3>
            <a href ={authorLink}>Blog name</a>
        </div>
           
       </div>
    );
 }

 class RecipeDescription extends React.Component {
    render() {
        return(
            <div>
                <div>
                    <h1>Ceviche</h1>
                    <p>Quick and easy to make. Tastes even better with lime.</p>
                </div>
                <RecipeAuthor />
            </div>
        )
    }
 }

 export default RecipeDescription;