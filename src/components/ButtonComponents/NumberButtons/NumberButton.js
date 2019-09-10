import React from "react";
// import {numbers} from "./Numbers"

export const NumberButton = props => {
  return (
    <button onClick={()=> props.number(props.count)}className="number_button">{props.buttonValue}</button>
      
      // {/* Display a button element rendering the data being passed down from the parent container on props */ }
      
     
     
    
  );
};
