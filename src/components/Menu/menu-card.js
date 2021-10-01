import React from 'react';


function MenuCard(props){
  return(
  <div class='card-container'>
    <div class='card'>
      <a href="Hotels">
     <div class='card-icon'>
      {props.children }
     </div>
     </a>
    </div>
     {props.name}
  </div>
)}



export default MenuCard;