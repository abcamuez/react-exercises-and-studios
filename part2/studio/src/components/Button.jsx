import React from 'react';
import ClickedButton from "./ClickedButton";
import SaveButton from "./SaveButton"
import "./styling.css"

function Button(props) {
  const saveButton = props.saveButton

  function handleClick() {
    alert("You are removing this post from saved")
  }
  
   return(
    <button id ={saveButton ? "saveButton" : "clickedButton"} onClick={handleClick}>
      {saveButton? "Save": "Saved"}
    </button>
   )
 }
 
 export default Button;
 
 //need to import SaveButton and ClickedButton
 //create conditional for these buttons
 //import styling
 