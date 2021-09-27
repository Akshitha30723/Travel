import React, {useState} from 'react';
import ReactDOM from  'react-dom';

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