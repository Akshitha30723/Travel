import React from 'react';
import Side from './sidebar';
import './Dashboard.css';
function Form(){
    return(
        <div className="dsh">
        <div className="dashboard">
        <div>
        <Side/>
        </div>
        <div className="content1">
        <form>
        <div className="form-inner">
        <h2> Hotel Booking </h2>
        <div className="form-group">
            <label>Name:</label>
            <input type="text" placeholder="Name"/>
        </div>
        <div className="form-group">
            <label>Email:</label>
            <input type="email" placeholder="someone@gmail.com"/>
        </div>
        <div className="form-group">
            <label>Room type:</label>
            <select>
                <option>Please select</option>
                <option>small</option>
            </select>
        </div>
        <div className="form-group">
            <label>Number of Guests:</label>
            <select>
                <option>Please select</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
            </select>
        </div>
            </div>
        </form>
        </div>
        </div>
        </div>
    
    )
}
export default Form;