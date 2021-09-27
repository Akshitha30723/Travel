import React from 'react';
import Side from './sidebar';
function Settings(){
    return(
        <div className="dsh">
        <div fluid className="dashboard">
        <div>
        <Side/>
        </div>
        <div className="content">
            <div className="Fav"><h1>Settings</h1></div>
        </div>
        </div>
        </div>
    )
}
export default Settings;