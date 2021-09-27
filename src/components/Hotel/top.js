import React from 'react';
import HotelCard from './hotel-card';
import { hotelData } from './topHotels';
import '../Dashboard.css';
function Hotels(){
    return(
        
            <div className="box-hotel">
            {hotelData.map((e)=>{
            return(
                <HotelCard img={e.img} name={e.name} desc={e.desc} rating={e.rating}/>
            );
        }
        )}
            </div>
    )
}
export default Hotels;