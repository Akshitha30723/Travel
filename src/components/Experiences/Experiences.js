import React from 'react';
import PlaceCard from './exp-card';
import { expData } from './expData';
function Experiences(){
return(
    
    <div>
    <h4>Best Experiences</h4>  
    <div className="pics">
        {expData.map((e)=>{
            return(
                <PlaceCard img={e.img} desc={e.desc} place={e.place} days={e.days} distance={e.distance}/>
            );
        }
        )}
        </div>
        </div>
)
}
export default Experiences;