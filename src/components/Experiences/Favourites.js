import React from 'react';
import Side from '../sidebar';
import Experiences from './Favcard';
import '../Dashboard.css';
function Favourites(){
    return(
        <div className="dsh">
        <div className="dashboard">
        <div>
        <Side/>
        </div>
        <div className="content">
        <div className="Exp1">
                    <div>
                    <Experiences/>
                    </div>
                   
                </div>
        </div>
        </div>
        </div>
    
    )
}
export default Favourites;