import React from 'react';
import Side from '../sidebar';
import Hotels from './top';
import '../Dashboard.css';
function Hotel(){
    return(
        <div className="dsh">
        <div className="dashboard">
        <div>
        <Side/>
        </div>
        <div className="content">
        <div className="Exp1">
                    <div>
                    <Hotels/>
                    </div>
                   
                </div>
        </div>
        </div>
        </div>
    
    )
}
export default Hotel;