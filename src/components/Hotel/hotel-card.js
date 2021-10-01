import React from 'react';
// import ReactDOM from  'react-dom';
import {FaStar } from 'react-icons/fa';
import '../Dashboard.css';

    function HotelCard(props){
      return(
        
        <div class='hotel-cards'>
          <a href="/form">
        <img src={props.img} alt="" />
        </a>
        <div class='rating' >
          <FaStar color='yellow'/>
          {props.rating}
        </div>
        <div class='hotel-desc'>
          <b>{props.name}</b>
          </div>
          <div class="hotel-name">
          <p>{props.desc}</p>
        </div>
       
        </div>
        
    )}

export default HotelCard;